import * as log from "lambda-log";
import { Model } from "dynamoose/dist/Model";
import { DynamoConnection } from "../connection";
import { PartitionKeyAlreadyExists } from "src/commons/exceptions/partitionKeyAlreadyExists";

export default class DynamoDBRepository<
  Keys extends Record<string, any>,
  Entity extends Keys,
> {
  private logger = log;
  constructor(private dynamoModel: Model) {
    new DynamoConnection().connect();
  }

  async create(data: Entity): Promise<Entity> {
    const result = await this.dynamoModel.create(data).catch((err) => {
      this.logger.error(err);
      if (err.name === "ConditionalCheckFailedException") {
        this.logger.debug(
          `Resource alreadyExists ${JSON.stringify({
            ...data,
            password: undefined,
          })}`,
        );
        throw new PartitionKeyAlreadyExists();
      }
      throw err;
    });

    return result as unknown as Entity;
  }

  async findOne(partitionKeyValue: string): Promise<Entity | undefined> {
    const result = await this.dynamoModel.get(partitionKeyValue);
    return result?.toJSON() as Entity | undefined;
  }

  async findAll(): Promise<Entity[] | []> {
    const result = await this.dynamoModel.scan().all().exec();

    const populated = result?.toJSON() ?? [];
    return populated as Entity[] | [];
  }
}
