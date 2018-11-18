/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';

export default class HTML extends React.Component {

  render() {
		const { children, scripts, css, sheet, state } = this.props;
		const head = Helmet.renderStatic();
		
		const styleTags = sheet.getStyleTags();

    return (
      <html lang="">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}
          {css.map((href) => {
              return <link key={href} rel="stylesheet" href={href} />;
					})}
					<style dangerouslySetInnerHTML={{__html: styleTags}} />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {scripts.map((src) => {
              return <script key={src} src={src} />;
					})}
					<script dangerouslySetInnerHTML={{
						__html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
					}} />
        </body>
      </html>
    );
  }
}
