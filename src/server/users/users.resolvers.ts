import { AuthPayload, User } from '../graphql.schema.d';
import { UsersService } from '../users/users.service';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('User')
export class AuthResolvers {
  constructor(private readonly userService: UsersService) {}

  @Mutation('signupWithEmail')
  async signupWithEmail(@Args() args: any): Promise<User> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('users')
  async users(@Args() args: any): Promise<User[]> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('removeUser')
  async removeUser(@Args() args: any): Promise<User> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }
}
