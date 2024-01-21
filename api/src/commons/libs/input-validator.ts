import { BaseCommand } from "../command/base.command";
import { InvalidPayloadformat } from "../exceptions/invalidPayloadFormat";

export const commandValidation = async (command: BaseCommand) => {
  const error = await command.validate();
  if (error.length) {
    console.log({ error: error[0] });
    throw new InvalidPayloadformat(
      JSON.stringify(Object.values(error[0].constraints)),
    );
  }
};
