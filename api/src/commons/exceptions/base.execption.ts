export class BaseException extends Error {
  constructor(
    public statusCode = 500,
    public message: string,
  ) {
    super(message);
  }
}
