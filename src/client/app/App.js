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

import { LoginPage, DashboardPage, NotFoundPage, SignupPage } from './components';
import { getSchemaMainTypes, getSchemaEnumTypes, getSchemaInputTypes } from './utils';
import { LinaProvider } from './lina-context';

/* import {
	getSchemaMainTypes,
	getSchemaInputTypes,
	getSchemaEnumTypes,
} from '../utils';*/

class App extends React.Component {

  render() {
		const { linaEndpoint } = this.props;

		const INTROSPECTION_QUERY = gql`
			${introspectionQuery}
		`;
    return (
			<FadeIn>
				<Query query={INTROSPECTION_QUERY}>
					{({ loading, error, data }) => {
						if (loading || error) {
							return <div>Loading/Error</div>
						}

						const mainTypes = getSchemaMainTypes(data.__schema);
						const inputTypes = getSchemaInputTypes(data.__schema);
						const enumTypes = getSchemaEnumTypes(data.__schema);
						const navBarItems = Object.values(mainTypes).map(
							type => type.name,
						);

						return (
							<LinaProvider value={{ mainTypes, core: data, enumTypes, inputTypes, navBarItems }}>
								<div>
									<Helmet defaultTitle="Lina Admin" titleTemplate="%s – Lina Admin" />
									<Switch>
										<Route path="/" exact component={DashboardPage} />
										<Route path="/login" component={LoginPage} />
										<Route path="/signup" component={SignupPage} />
										<Route path="*" component={NotFoundPage} />
									</Switch>
								</div>
							</LinaProvider>
						);
					}}
				</Query>
			</FadeIn>
    );
  }
}

export default App;
