import { SuccessResponse } from './response.type';
import IUser from './user.type';

export type AuthResponse = SuccessResponse<{
  access_token: string;
  refresh_token: string;
  expires_refresh_token: number;
  expires: number;
  user: IUser;
}>;

export type RefreshTokenResponse = SuccessResponse<{ access_token: string }>;

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister {
  email: string;
  password: string;
  phone: string;
}
