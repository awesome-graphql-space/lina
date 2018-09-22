import { GraphQLModule } from '@nestjs/graphql';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';
// import { ConfigModule } from './config/config.module';
// import { ConfigService } from 'config/config.service';
import { AuthModule } from './auth/auth.module';
import * as path from 'path';
// import { ArangodbModule } from 'arangodb/arangodb.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    CommonsModule,
    GraphQLModule.forRootAsync({
      useClass: GraphqlOptions,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  private isAuthEnabled: boolean;
  constructor(){}
}
