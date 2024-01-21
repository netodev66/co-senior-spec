import * as dynamoose from "dynamoose";

export class DynamoConnection {
  connect() {
    new dynamoose.aws.ddb.DynamoDB({
      credentials: {
        accessKeyId: process.env.aws_access_key_id,
        secretAccessKey: process.env.aws_secret_access_key,
      },
      region: process.env.aws_region,
    });
  }
}
