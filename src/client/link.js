import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const { LINA_ENDPOINT, LINA_TOKEN } = process.env || {};
export const uri = LINA_ENDPOINT || 'http://localhost:3000/graphql';

export const httpLink = new HttpLink({
	uri,
  headers: LINA_TOKEN ? { Authorization: LINA_TOKEN } : {},
  fetch,
});
