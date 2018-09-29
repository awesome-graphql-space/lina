export interface TokenPayload {
  expiresIn: number;
  refreshToken?: string;
  accessToken: string;
}