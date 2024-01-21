// import * as log from "lambda-log";
import { JwtService } from "src/commons/libs/jwt";
import { APIGatewayTokenAuthorizerEvent } from "aws-lambda";

export class AuthorizerService {
  constructor(private jwtService: JwtService) {}

  private mountAccessResponse(
    event: APIGatewayTokenAuthorizerEvent,
    effect: "deny" | "Allow",
  ) {
    return {
      principalId: "user",
      policyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Action: "execute-api:Invoke",
            Effect: effect,
            Resource: event.methodArn,
          },
        ],
      },
    };
  }

  async verify(event: APIGatewayTokenAuthorizerEvent) {
    const authHeader = event.authorizationToken;
    const token = authHeader.split(" ")[1]!;

    if (!token) {
      return this.mountAccessResponse(event, "deny");
    }

    const isValid = await this.jwtService.isTokenValid(token);
    if (!isValid) return this.mountAccessResponse(event, "deny");

    return this.mountAccessResponse(event, "Allow");
  }
}
