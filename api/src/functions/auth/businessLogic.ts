import * as log from "lambda-log";
import { UserAdapter } from "src/infra/dynamodb/adapter/user.adapter";
import bcrypt from "bcryptjs";
import { JwtService } from "src/commons/libs/jwt";
import { IncorrectUserNameOrPassException } from "src/commons/exceptions/IncorrectUserNameOrPassException";
import { SignInCommand } from "./command";

export class SignInService {
  private logger = log;
  constructor(
    private userAdapter: UserAdapter,
    private jwtService: JwtService,
  ) {}

  private async checkyMatchUserPassword(password: string, hash: string) {
    return await bcrypt.compare(hash, password);
  }

  async signIn({ username, password }: SignInCommand) {
    this.logger.debug(
      `Generating user token with Payload: ${JSON.stringify({
        username,
      })}`,
    );
    const user = await this.userAdapter.findOne(username);

    if (!user) {
      this.logger.debug(`User ${username} not found in database`);
      throw new IncorrectUserNameOrPassException();
    }

    const check = await this.checkyMatchUserPassword(user.password, password);
    if (!check) {
      this.logger.debug(`User ${username} password incorrect `);
      throw new IncorrectUserNameOrPassException();
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };
    return {
      user: payload,
      token: await this.jwtService.encodeToken(payload),
    };
  }
}
