import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Html from './html';
import App from '../app/App';

const serverRenderer = () => (req, res) => {
  const content = renderToString(
		<Router location={req.url} context={{}}>
			<App />
		</Router>
	);

  return res.send(
    '<!doctype html>' +
      renderToString(
        <Html
          css={[res.locals.assetPath('bundle.css'), res.locals.assetPath('vendor.css')]}
          scripts={[res.locals.assetPath('bundle.js'), res.locals.assetPath('vendor.js')]}
        >
          {content}
        </Html>
      )
  );
};

export default serverRenderer;
