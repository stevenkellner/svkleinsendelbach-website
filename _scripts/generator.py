import frontmatter
import shutil
import json
import sys
import os
import re

FILES_JSON_PATH = os.path.abspath("_scripts/files.json")
SOURCE_PATH = os.path.abspath("src")
GITHUB_USERNAME = "GITHUB_USERNAME"
GITHUB_REPOSITORY = "GITHUB_REPOSITORY"

if "debug" not in sys.argv:
    GITHUB_USERNAME = os.environ.get("GITHUB_ACTOR")
    GITHUB_REPOSITORY = os.environ.get("GITHUB_REPOSITORY").split("/")[1]

GITHUB_PAGES_LINK = f"https://{GITHUB_USERNAME}.github.io/{GITHUB_REPOSITORY}"


def removePreexistingData():
    if os.path.exists(FILES_JSON_PATH):
        os.remove(FILES_JSON_PATH)
    if os.path.exists(SOURCE_PATH):
        for root, dirs, files in os.walk(SOURCE_PATH):
            for f in files:
                os.unlink(os.path.join(root, f))
            for d in dirs:
                shutil.rmtree(os.path.join(root, d))
        shutil.rmtree(SOURCE_PATH)


def getAllDirectories():
    return [
        directory
        for directory in next(os.walk("."))[1]
        if directory not in ["assets", "src"]
           and not directory.startswith("_")
           and not directory.startswith(".")
    ]


def getFilesInDirectory(directory):
    return [
        file
        for file in os.listdir(os.path.abspath(directory))
        if file.endswith("md")
           and os.path.isfile(os.path.join(directory, file))
    ]


def parseMarkdownLinks(filePath):
    with open(filePath, "r") as file:
        content = file.read()
    regex = r"src=\"[\s\S]*?\""
    indices = [(m.start(), m.end()) for m in re.finditer(regex, content)]
    indices.sort(key=lambda x: x[0], reverse=True)
    for index in indices:
        relPath = content[index[0] + 5: index[1] - 1]
        path = os.path.join(SOURCE_PATH, os.path.relpath(relPath, filePath))
        path = path.replace("../", "")
        url = os.path.join(GITHUB_PAGES_LINK, os.path.relpath(path, "."))
        content = content[:index[0]] + "src=\"" + url + "\"" + content[index[1]:]
    with open(filePath, 'w') as file:
        file.write(content)


def checkTags(fileTags, tags):
    for tag in tags:
        if tag not in fileTags:
            return False
    return True


def getLinks(fileTags, linkTags):
    for linkTag in linkTags:
        if linkTag in fileTags:
            rawLink = fileTags[linkTag]
            link = os.path.join(GITHUB_PAGES_LINK, SOURCE_PATH, rawLink)
            fileTags[linkTag] = link
    return fileTags


def parseDate(fileTags, dateTags):
    for dateTag in dateTags:
        if dateTag in fileTags:
            dateString = str(fileTags[dateTag])
            fileTags[dateTag] = dateString
    return fileTags


def parseFileTags(fileTags):
    fileTags = getLinks(fileTags, ["image"])
    fileTags = parseDate(fileTags, ["date"])
    return fileTags


def parseMarkdown(path):
    with open(path) as md:
        fileTags = frontmatter.load(md).metadata
    if not checkTags(fileTags, ["title", "address", "date"]):
        return {"error": "Missing tags"}
    return parseFileTags(fileTags)


def writeFilesJson(data):
    with open(FILES_JSON_PATH, "w") as data_json:
        data_json.write(json.dumps(data, indent=4))


def copyAssets():
    dirNames = ["assets"]
    for dirName in dirNames:
        destination = os.path.join(SOURCE_PATH, dirName)
        shutil.copytree(dirName, destination, dirs_exist_ok=True)


def main():
    # Remove preexisting data
    removePreexistingData()

    # Create _scr folder
    os.mkdir(SOURCE_PATH)

    data = {}

    # Parse all markdown files
    for directory in getAllDirectories():

        filesData = []

        srcFolder = os.path.join(SOURCE_PATH, directory)
        if not os.path.exists(srcFolder):
            os.makedirs(srcFolder)

        for file in getFilesInDirectory(directory):
            fullSrcPath = os.path.abspath(os.path.join(directory, file))
            fullDestPath = os.path.join(srcFolder, file)
            shutil.copy(fullSrcPath, fullDestPath)
            parseMarkdownLinks(os.path.join(SOURCE_PATH, directory, file))

            fileTags = parseMarkdown(fullSrcPath)
            url = os.path.join(GITHUB_PAGES_LINK, SOURCE_PATH, directory, file.replace(".md", ""))
            fileTags["url"] = url
            filesData.append(fileTags)

        data[directory] = filesData

    # Write files json
    writeFilesJson(data)

    # Copy all assets
    copyAssets()


if __name__ == "__main__":
    main()
