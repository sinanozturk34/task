// eslint-disable-next-line import/no-extraneous-dependencies
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../schemas/User";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

interface TokenPayload {
  id: string;
  username: string;
}

const generateToken = (user: IUser): string => {
  const payload: TokenPayload = {
    id: user._id as string,
    username: user.username,
  };

  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export default generateToken;
