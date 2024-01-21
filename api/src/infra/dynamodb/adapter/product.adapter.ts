import { ModelType } from "dynamoose/dist/General";
import { AnyItem } from "dynamoose/dist/Item";
import DynamoDBRepository from "./base.repository";
import { IProduct } from "src/entities/models/Product";

export class ProductAdapter extends DynamoDBRepository<
  Pick<IProduct, "id">,
  IProduct
> {
  constructor(entity: ModelType<AnyItem>) {
    super(entity);
  }
}
