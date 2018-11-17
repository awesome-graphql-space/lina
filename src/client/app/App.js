// @flow
// Library
import * as React from 'react';
import FadeIn from 'react-fade-in';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { introspectionQuery } from 'graphql/utilities/introspectionQuery';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import routes from './routes';
import './root.less';

import { LoginPage, DashboardPage, NotFoundPage } from './components';

/* import {
	getSchemaMainTypes,
	getSchemaInputTypes,
	getSchemaEnumTypes,
} from '../utils';*/

class App extends React.Component {

  render() {
    return (
			<FadeIn>
				<div>
					<Helmet defaultTitle="Lina Admin" titleTemplate="%s – Lina Admin" />
					<Switch>
						<Route path="/" exact component={DashboardPage} />
						<Route path="/login" component={LoginPage} />
						<Route path="*" component={NotFoundPage} />
					</Switch>
				</div>
			</FadeIn>
    );
  }
}

export default App;
