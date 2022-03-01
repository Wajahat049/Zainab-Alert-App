import boto3
s3 = boto3.client("s3")
s3.upload_file("MainWheel.png","321mytestbucket123","MainWheel.png")
