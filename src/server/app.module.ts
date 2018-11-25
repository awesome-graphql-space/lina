import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
import { CommonsModule } from './commons/commons.module';
// import { ConfigModule } from './config/config.module';
// import { AuthModule } from './auth/auth.module';
import { GraphqlOptions } from './graphql.options';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
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
