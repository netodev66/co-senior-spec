import * as log from "lambda-log";
import { UserAdapter } from "src/infra/dynamodb/adapter/user.adapter";
import { RegisterUserCommand } from "./command";

export class RegisterUserService {
  private logger = log;
  constructor(private userAdapter: UserAdapter) {}

  async registerUser(registerUserCommand: RegisterUserCommand) {
    this.logger.debug(
      `Creating user with Payload: ${JSON.stringify({
        ...registerUserCommand,
        password: undefined,
      })}`,
    );
    const user = await this.userAdapter.create(registerUserCommand);

    const payload = {
      sub: user.id,
      username: user.username,
    };
    return {
      user: payload,
    };
  }
}
