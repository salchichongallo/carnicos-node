import 'sanitize.css';
import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { carnicos } from '@carnicos/ui/theme';
import { ThemeProvider } from '@carnicos/ui/styled';

import createBrowserHistory from 'history/createBrowserHistory';

import App from './app/App';

const APP_NODE = document.getElementById('app');
const history = createBrowserHistory({ basename: '/' });

const renderApp = (Application: typeof App) => {
  ReactDOM.render(
    <ThemeProvider theme={carnicos}>
      <Router history={history}>
        <Application />
      </Router>
    </ThemeProvider>,
    APP_NODE,
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app/App', () => renderApp(App));
}
