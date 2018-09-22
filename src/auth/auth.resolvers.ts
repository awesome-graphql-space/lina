import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { UsersService } from './../users/users.service';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver('AuthPayload')
export class AuthResolvers {
  constructor(private readonly userService: UsersService) {}

  @Mutation('signupWithEmail')
  async signupWithEmail(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('signupWithTwitter')
  async signupWithTwitter(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('signupWithFacebook')
  async signupWithFacebook(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('loginWithEmail')
  async loginWithEmail(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('loginWithFacebook')
  async loginWithFacebook(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('loginWithTwitter')
  async loginWithTwitter(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('logout')
  async logout(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('refreshToken')
  async refreshToken(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('resetPassword')
  async resetPassword(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('forgotPassword')
  async forgotPassword(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Mutation('changePassword')
  async changePassword(@Args() args: any): Promise<any> {
    // const createdany = await this.userService.create(args);
    // pubSub.publish('userCreated', { anyCreated: createdany });
    return null;
  }

  @Subscription('userCreated')
  userCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('userCreated'),
    };
  }

  @Subscription('userLogout')
  userLogout() {
    return {
      subscribe: () => pubSub.asyncIterator('userLogout'),
    };
  }

  @Subscription('userLogin')
  userLogin() {
    return {
      subscribe: () => pubSub.asyncIterator('userLogin'),
    };
  }
}
