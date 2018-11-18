import React from 'react';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import createHistory from 'history/createBrowserHistory';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { httpLink, uri } from './link';
import App from './app/App';

const browserHistory = window.browserHistory || createHistory();

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	ssrMode: true,
});

hydrate(
	<Router history={browserHistory}>
		<ApolloProvider client={client}>
			<App linaEndpoint={uri} />
		</ApolloProvider>
	</Router>,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }
  if (!window.browserHistory) {
    window.browserHistory = browserHistory;
  }
}
