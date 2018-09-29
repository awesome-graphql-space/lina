import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  async findOneById(token: string) {
    // await
  }

  async findOneByEmail(email: string) {
    // await
  }

  async findOneByUsername(username: string) {
    // await
  }

  async findOneByUsernameAndUpdate(username: string, data: object) {
    // await
  }
  async findOneByIdAndUpdate(token: string, data: object) {
    // await
  }

  async findOneByEmailAndUpdate(email: string, data: object) {
    // await
  }

  async removeOneById(token: string) {
    // await
  }
}
