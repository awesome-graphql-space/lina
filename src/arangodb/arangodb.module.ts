import { Module, OnModuleInit, OnModuleDestroy, Global, Inject, DynamicModule } from '@nestjs/common';
import * as arango from 'arangojs';
import { arangoProviders } from './arangodb.providers';
import { Database } from 'arangojs';
import { ArangodbController } from './arangodb.controller';
import { GRAPHORM_MODULE_OPTIONS } from './arangodb.constants';
import { ModuleRef } from '@nestjs/core';
import { ArangoModuleOptions } from './interfaces/arangodb-module-options.interface';

@Global()
@Module({
  controllers: [ArangodbController],
  providers: [...arangoProviders],
  exports: [...arangoProviders],
})
export class ArangodbModule implements OnModuleInit, OnModuleDestroy {
  private readonly options;
  protected db: Database;
  constructor(
    @Inject(GRAPHORM_MODULE_OPTIONS)
    private readonly options: ArangoModuleOptions,
    private readonly moduleRef: ModuleRef,
  ) {}
  static forRoot(options: ArangoModuleOptions): DynamicModule {
    const typeOrmModuleOptions = {
      provide: GRAPHORM_MODULE_OPTIONS,
      useValue: options,
    };
    const connectionProvider = {
      provide: getConnectionToken(options as ConnectionOptions),
      useFactory: async () => await this.createConnectionFactory(options),
    };
    const entityManagerProvider = this.createEntityManagerProvider(
      options as ConnectionOptions,
    );
    return {
      module: ArangodbModule,
      providers: [
        entityManagerProvider,
        connectionProvider,
        typeOrmModuleOptions,
      ],
      exports: [entityManagerProvider, connectionProvider],
    };
  }

  onModuleInit() {
    throw new Error('Method not implemented.');
  }

  onModuleDestroy() {
    throw new Error('Method not implemented.');
  }
}
