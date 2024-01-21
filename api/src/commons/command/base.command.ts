import { ValidationError } from "class-validator";

export interface BaseCommand {
  validate: () => Promise<ValidationError[]>;
}
