import { Database, EdgeCollection, Graph, aql } from 'arangojs';

export const arangoProviders = [
  {
    provide: 'ArDbConnectionToken',
    useFactory: async (): Promise<Database> => {
      const db = new Database();
      db.useDatabase('');
      db.useBasicAuth('');

      return db;
    },
  },
];
