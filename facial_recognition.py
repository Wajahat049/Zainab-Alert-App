import csv
import boto3

with open("new_user_credentials.csv", "r") as input:
    next(input)
    reader = csv.reader(input)
    for line in reader:
        access_key_id = line[2]
        secret_access_key = line[3]


def my_face_recognition(sourse_img_id, target_img_id):
    reko_client = boto3.client("rekognition",
                               aws_access_key_id=access_key_id,
                               aws_secret_access_key=secret_access_key)

    reko_response = reko_client.compare_faces(
        SourceImage={
            "S3Object": {
                "Bucket": "zainab-alert",
                "Name": sourse_img_id
            }
        },
        TargetImage={
            "S3Object": {
                "Bucket": "zainab-alert-2",
                "Name": target_img_id
            }
        }
    )
    for key, value in reko_response.items():
        if key == "FaceMatches" and value != []:
            return "Founded", value[0]['Similarity']
    return "Not Found", 0.00


service_resourse = boto3.resource("s3")
s3_client = boto3.client('s3')
buckets = service_resourse.Bucket("zainab-alert")
files = list(buckets.objects.all())

##need to implement some searching algorithm
for file in files:
    print(file.key)
    a = my_face_recognition(file.key, "bill-gate-test.jfif")
    print(a)
    if a[0] == "Founded":
        break
