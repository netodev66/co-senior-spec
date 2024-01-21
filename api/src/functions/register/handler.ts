import type { ValidatedEventAPIGatewayProxyEvent } from "src/commons/libs/api-gateway";
import { formatJSONResponse } from "src/commons/libs/api-gateway";
import { middyfy } from "src/commons/libs/lambda";

import { UserAdapter } from "src/infra/dynamodb/adapter/user.adapter";
import { UserModel } from "src/infra/dynamodb/schemas/user.schema";
import { RegisterUserService } from "./businessLogic";
import errorHandler from "@schibsted/middy-error-handler";
import { RegisterUserCommand } from "./command";
import { commandValidation } from "src/commons/libs/input-validator";

const registerUser: ValidatedEventAPIGatewayProxyEvent<
  Record<string, string>
> = async ({ body }) => {
  const command = new RegisterUserCommand(body);
  await commandValidation(command);
  const persistence = new UserAdapter(UserModel);
  const useCase = new RegisterUserService(persistence);
  const result = await useCase.registerUser(command);

  return formatJSONResponse(result);
};

export const main = middyfy(registerUser).use(
  errorHandler({ exposeStackTrace: false }),
);
