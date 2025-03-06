import boto3

def classify_image(image_path):

    client = boto3.client('rekognition')
    with open(image_path, "rb") as image:
        response = client.detect_labels(
            Image={"Bytes": image.read()},
            MaxLabels=5
        )

    print('detected labels')

    for label in response['Labels']:
        print(f"{label['Name']} : {label['Confidence']:.2f}%")

# huracan = "./huracan-offroad.jpg"
mclaren = "McLaren_P1.jpg"
classify_image(mclaren)