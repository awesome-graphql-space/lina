import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { ServerStyleSheet } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Html from './html';
import App from '../app/App';
import { httpLink } from '../link';


const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	ssrMode: true,
});

const serverRenderer = () => (req, res) => {
	const sheet = new ServerStyleSheet();

	const initialState = client.extract();

  const content = renderToString(
		sheet.collectStyles(
			<Router location={req.url} context={{}}>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</Router>
		)
	);

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
					scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
					sheet={sheet}
					state={initialState}
        >
          {content}
        </Html>
      )
  );
};

export default serverRenderer;
