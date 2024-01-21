import { SignInCommand } from "@functions/auth/command";
import { BaseCommand } from "src/commons/command/base.command";

export class RegisterUserCommand extends SignInCommand implements BaseCommand {}
