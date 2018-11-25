import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { getConnection, Connection } from 'typeorm';
import * as GraphQLJSON from 'graphql-type-json';
import { join } from 'path';
import { schemaToJS } from 'graphschematojson/src/schema';
import { importSchema } from 'graphql-import';
import { OneToMany, OneToOne, ManyToOne, ManyToMany, getRepositories } from './commons/typeorm';
import { makeExecutableSchema } from 'apollo-server-express';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

// const typeDefs = importSchema('./schema.graphql');
// const schema = makeExecutableSchema({typeDefs, resolvers: {}});
// const jsSchema = schemaToJS(schema);

// if (!existsSync('./generated')) {
  // mkdirSync('./generated');
// }

// writeFileSync(`./generated/query.graphql`, queryTemplate(jsSchema));
// writeFileSync(`./generated/mutation.graphql`, mutationTemplate(jsSchema));

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    const connection: Connection = getConnection();
    return {
      typePaths: ['./**/*.graphql'],
      path: '/graphql',
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.d.ts'),
        outputAs: 'class',
      },
      schemaDirectives: {
        OneToOne,
        OneToMany,
        ManyToOne,
        ManyToMany,
      },
      resolvers: { JSON: GraphQLJSON },
      context: ({ req }) => ({
        req,
        // repositories: getRepositories({schema: jsSchema, connection}),
        connection,
       }),
      onHealthCheck: () =>
        new Promise((resolve, reject) => {
          // database check or other asynchronous action
          // TODO: Health cron job
        }),
    };
  }
}
