import frontmatter
import json
import os

FILES_JSON_PATH = os.path.abspath("_scripts/files.json")
GITHUB_USERNAME = os.environ.get("GITHUB_ACTOR")
GITHUB_REPOSITORY = os.environ.get("GITHUB_REPOSITORY").split("/")[1]
GITHUB_PAGES_LINK = f"https://{GITHUB_USERNAME}.github.io/{GITHUB_REPOSITORY}"


def removePreexistingData():
    if os.path.exists(FILES_JSON_PATH):
        os.remove(FILES_JSON_PATH)


def getAllDirectories():
    return [
        directory
        for directory in next(os.walk("."))[1]
        if directory != "assets"
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


def checkTags(fileTags, tags):
    for tag in tags:
        if tag not in fileTags:
            return False
    return True


def getLinks(fileTags, linkTags):
    for linkTag in linkTags:
        if linkTag in fileTags:
            rawLink = fileTags[linkTag]
            link = os.path.join(GITHUB_PAGES_LINK, rawLink)
            fileTags[linkTag] = link
    return fileTags


def parseMarkdown(path):
    with open(path) as md:
        fileTags = frontmatter.load(md).metadata
    if not checkTags(fileTags, ["title", "address", "date"]):
        return {"error": "Missing tags"}
    return getLinks(fileTags, ["image"])


def writeFilesJson(data):
    with open(FILES_JSON_PATH, "w") as data_json:
        data_json.write(json.dumps(data, indent=4))


def main():
    # Remove preexisting data
    removePreexistingData()

    data = {}

    # Parse all markdown files
    for directory in getAllDirectories():

        filesData = []

        for file in getFilesInDirectory(directory):
            fileTags = parseMarkdown(os.path.abspath(os.path.join(directory, file)))
            url = os.path.join(GITHUB_PAGES_LINK, directory, file.replace(".md", ""))
            fileTags["url"] = url
            filesData.append(fileTags)

        data[directory] = filesData

    # Write files json
    writeFilesJson(data)


if __name__ == "__main__":
    main()
