import { Type } from '@nestjs/common';
import { ModuleMetadata } from '@nestjs/common/interfaces';

export declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ArangoModuleOptions extends Omit<Config, 'typeDefs'>, Partial<Pick<ServerRegistration, 'onHealthCheck' | 'disableHealthCheck' | 'path'>> {
    host: string | string[];
    username?: string;
    password?: string;
    databaseName?: string;
}
export interface ArangoOptionsFactory {
    createArangolOptions(): Promise<ArangoModuleOptions> | ArangoModuleOptions;
}