import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerEvent,
} from "aws-lambda";
import { JwtService } from "src/commons/libs/jwt";
import { AuthorizerService } from "./businessLogic";

export const handler = async (
  event: APIGatewayTokenAuthorizerEvent,
): Promise<APIGatewayAuthorizerResult> => {
  const jwtService = new JwtService();
  const useCase = new AuthorizerService(jwtService);
  const result = await useCase.verify(event);

  return result;
};

export const main = handler;
