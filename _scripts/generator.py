import frontmatter
import json
import os

FILES_JSON_PATH = os.path.abspath("_scripts/files.json")
GITHUB_USERNAME = 'USERNAME'  # os.environ.get("GITHUB_ACTOR")
GITHUB_REPOSITORY = 'REPOSITORY'  # os.environ.get("GITHUB_REPOSITORY").split("/")[1]


def removePreexistingData():
    if os.path.exists(FILES_JSON_PATH):
        os.remove(FILES_JSON_PATH)


def getAllDirectories() -> [str]:
    return [
        directory
        for directory in next(os.walk("."))[1]
        if directory != "assets"
        and not directory.startswith("_")
        and not directory.startswith(".")
    ]


def getFilesInDirectory(directory: str) -> [str]:
    return [
        file
        for file in os.listdir(os.path.abspath(directory))
        if file.endswith("md")
        and os.path.isfile(os.path.join(directory, file))
    ]


def parseMarkdown(path: str) -> dict[str, str]:
    with open(path) as md:
        fileTags = frontmatter.load(md).metadata
    if "title" not in fileTags or "address" not in fileTags:
        return {"error": "Missing tags"}
    return fileTags


def writeFilesJson(data: [dict[str, str]]):
    with open(FILES_JSON_PATH, "w") as data_json:
        data_json.write(json.dumps(data, indent=4))


def main():
    # Remove preexisting data
    removePreexistingData()

    data: [dict[str, str]] = []

    # Parse all markdown files
    for directory in getAllDirectories():
        for file in getFilesInDirectory(directory):
            fileTags = parseMarkdown(os.path.abspath(os.path.join(directory, file)))
            url = f"https://{GITHUB_USERNAME}.github.io/{GITHUB_REPOSITORY}/{os.path.join(directory, file.replace('.md', ''))}"
            fileTags["url"] = url
            data.append(fileTags)

    # Write files json
    writeFilesJson(data)


if __name__ == "__main__":
    main()
