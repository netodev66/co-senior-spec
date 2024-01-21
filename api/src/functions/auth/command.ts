import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  validate,
} from "class-validator";
import { BaseCommand } from "src/commons/command/base.command";

export class SignInCommand implements BaseCommand {
  constructor(body: Record<string, string>) {
    this.username = body.username;
    this.password = body.password;
  }

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  username: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%]).{8,64}$/gm, {
    message:
      "Password must be between 8 and 64 characters long with 1 special character and capital character each",
  })
  password: string;

  async validate() {
    return validate(this);
  }
}
