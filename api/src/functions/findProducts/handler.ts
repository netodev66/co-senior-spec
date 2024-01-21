import type { ValidatedEventAPIGatewayProxyEvent } from "src/commons/libs/api-gateway";
import { formatJSONResponse } from "src/commons/libs/api-gateway";
import { middyfy } from "src/commons/libs/lambda";

import { FindProductService } from "./businessLogic";
import errorHandler from "@schibsted/middy-error-handler";
import { ProductAdapter } from "src/infra/dynamodb/adapter/product.adapter";
import { ProductModel } from "src/infra/dynamodb/schemas/product.schema";

const registerUser: ValidatedEventAPIGatewayProxyEvent<
  Record<string, string>
> = async () => {
  const persistence = new ProductAdapter(ProductModel);
  const useCase = new FindProductService(persistence);
  const result = await useCase.findAll();

  return formatJSONResponse(result);
};

export const main = middyfy(registerUser).use(
  errorHandler({ exposeStackTrace: false }),
);
