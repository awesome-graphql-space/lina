
export declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export interface ArangoModuleOptions {
    host: string | string[];
    username?: string;
    password?: string;
    databaseName?: string;
}
export interface ArangoOptionsFactory {
    createArangolOptions(): Promise<ArangoModuleOptions> | ArangoModuleOptions;
}