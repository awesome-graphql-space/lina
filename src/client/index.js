import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { hydrate } from 'react-dom';
import { Router } from 'react-router-dom';
import App from './app/App';

const browserHistory = window.browserHistory || createHistory();

hydrate(
	<Router history={browserHistory}>
		<App />
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
