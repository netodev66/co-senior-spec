import * as log from "lambda-log";
import { ProductAdapter } from "src/infra/dynamodb/adapter/product.adapter";

export class FindProductService {
  private logger = log;
  constructor(private productAdapter: ProductAdapter) {}

  async findAll() {
    this.logger.debug(`Finding all products`);
    const products = await this.productAdapter.findAll();
    this.logger.debug(`Returning products: ${JSON.stringify(products)}`);
    return {
      items: products,
    };
  }
}
