import { User } from './../graphql.schema.d';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { TokenPayload } from './interfaces/token-payload.interface';

@Injectable()
export class AuthService {

  constructor(
     private readonly usersService: UsersService,
     private readonly jwtService: JwtService,
  ) {}

  async createToken(id: string): Promise<TokenPayload> {
    const user: JwtPayload = { id };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async verifyToken(token: string): Promise<TokenPayload> {
    const accessToken = this.jwtService.verify(token);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  async validateUser(token: string): Promise<User> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.usersService.findOneById(token);
  }

  async validateUser(token: string): Promise<User> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.usersService.findOneById(token);
  }
}
