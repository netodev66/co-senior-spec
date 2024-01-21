import * as jwt from "jsonwebtoken";
import * as util from "util";
import { apiConfig } from "src/commons/configs";

export class JwtService {
  async encodeToken(payload: Record<string, string | number>) {
    const promiseSigin = util.promisify<
      string | object | Buffer,
      jwt.Secret,
      jwt.SignOptions
    >(jwt.sign);
    const token = await promiseSigin(
      payload,
      apiConfig.private_secret_jwt.replace(/\\n/g, "\n"),
      {
        algorithm: apiConfig.encrypt_algorithm as jwt.Algorithm,
        expiresIn: "1h",
      },
    );

    return token;
  }

  async isTokenValid(token: string) {
    const promiseVerify = util.promisify<
      string | object | Buffer,
      jwt.Secret,
      jwt.VerifyOptions
    >(jwt.verify);
    try {
      await promiseVerify(token, apiConfig.public_secret_jwt, {
        algorithms: [apiConfig.encrypt_algorithm] as jwt.Algorithm[],
      });
      return true;
    } catch (_) {
      return false;
    }
  }
}
