import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from 'user/views';

import GlobalStyles from './App.styles';
import NotFound from './views/NotFound';

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
    <GlobalStyles />
  </>
);

export default App;
