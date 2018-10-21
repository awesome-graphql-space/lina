import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';
// import { ConfigModule } from './config/config.module';
// import { ConfigService } from 'config/config.service';
// import { AuthModule } from './auth/auth.module';
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
  constructor(){}
}
