export const apiConfig = {
  private_secret_jwt: process.env.PRIVATE_SECRET_JWT.replace(/\\n/g, "\n"),
  public_secret_jwt: process.env.PUBLIC_SECRET_JWT.replace(/\\n/g, "\n"),
  encrypt_algorithm: "RS256",
};
