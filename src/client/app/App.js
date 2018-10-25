// @flow
// Library
import * as React from 'react';
import FadeIn from 'react-fade-in';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { setLocale } from './common/redux/app/actions';

import css from './App.scss';

// components
import Chat from './common/components/chat';

type PropsT = {
    setLocale: (string) => {},
    t: (string) => string,
};

class App extends React.PureComponent<PropsT> {
    setLanguage = (e) => {
        this.props.setLocale(e.target.value);
    };

    render() {
        const { t } = this.props;

        return (
            <>
               <div className={css.wrapper}>
                  <Helmet defaultTitle="Lina Admin" titleTemplate="%s – Lina Admin" />
                  <h1>
                      <img src={require('./assets/react.svg')} className={css.reactLogo} /> Lina Admin
                  </h1>
                  <h2>{t('features')}</h2>

               	<Chat />

                  <h2>{t('i18n-example')}</h2>
                  <p>
                     <button value="de-DE" onClick={this.setLanguage}>
                        Deutsch
                     </button>
                     <button value="en-US" onClick={this.setLanguage}>
                        English
                     </button>
                  </p>
               </div>
					<FadeIn>
						<div className={css.wrapper}>
							<Helmet defaultTitle="Lina Admin" titleTemplate="%s – Lina Admin" />
							<h1>
								<img src={require('./assets/react.svg')} className={css.reactLogo} /> Lina Admin
							</h1>
							<h2>{t('features')}</h2>

							<Chat />

							<h2>{t('i18n-example')}</h2>
							<p>
								<button value="de-DE" onClick={this.setLanguage}>
									Deutsch
								</button>
								<button value="en-US" onClick={this.setLanguage}>
									English
								</button>
							</p>
						</div>
					</FadeIn>
            </>
        );
    }
}

const mapDispatchToProps = {
    setLocale,
};

export default connect(null, mapDispatchToProps)(translate()(App));
