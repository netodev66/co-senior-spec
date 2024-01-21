import type { ValidatedEventAPIGatewayProxyEvent } from "src/commons/libs/api-gateway";
import { formatJSONResponse } from "src/commons/libs/api-gateway";
import { middyfy } from "src/commons/libs/lambda";

import { UserAdapter } from "src/infra/dynamodb/adapter/user.adapter";
import { UserModel } from "src/infra/dynamodb/schemas/user.schema";
import { SignInService } from "./businessLogic";
import { JwtService } from "src/commons/libs/jwt";
import { SignInCommand } from "./command";
import errorHandler from "@schibsted/middy-error-handler";
import { commandValidation } from "src/commons/libs/input-validator";

const sign: ValidatedEventAPIGatewayProxyEvent<
  Record<string, string>
> = async ({ body }) => {
  const command = new SignInCommand(body);
  await commandValidation(command);
  const persistence = new UserAdapter(UserModel);
  const jwtService = new JwtService();
  const useCase = new SignInService(persistence, jwtService);
  const result = await useCase.signIn(command);

  return formatJSONResponse(result);
};

export const main = middyfy(sign).use(
  errorHandler({ exposeStackTrace: false }),
);
