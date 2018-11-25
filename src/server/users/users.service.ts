import { Injectable } from '@nestjs/common';
import { User } from '@server/graphql.schema';

@Injectable()
export class UsersService {

  async findOneById(token: string): Promise<User> {
    // await
    return null;
  }

  async findOneByEmail(email: string): Promise<User> {
    // await
    return null;
  }

  async findOneByUsername(username: string): Promise<User> {
    // await
    return null;
  }

  async findOneByUsernameAndUpdate(username: string, data: object): Promise<User> {
    // await
    return null;
  }
  async findOneByIdAndUpdate(token: string, data: object): Promise<User> {
    // await
    return null;
  }

  async findOneByEmailAndUpdate(email: string, data: object): Promise<User> {
    // await
    return null;
  }

  async removeOneById(token: string): Promise<User> {
    // await
    return null;
  }
}
