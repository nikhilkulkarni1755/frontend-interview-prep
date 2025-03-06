import boto3
import os

def extract(file_path):
    client = boto3.client('textract')

    with open(file_path, "rb") as document:
        response = client.detect_document_text(Document={"Bytes": document.read()})


    print("results:")
    for item in response["Blocks"]:
        if item["BlockType"] == "LINE":
            print(item["Text"])

# extract(os.path.abspath("test.jpeg"))

# with open("test.jpeg") as f:
#     print('file opened')

def findPrices(file_path):
    # find the prices within the sea of data.
    return 0