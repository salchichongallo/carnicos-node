import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from './App.styles';
import NotFound from './views/NotFound';

const App = () => (
  <>
    <Switch>
      <Route component={NotFound} />
    </Switch>
    <GlobalStyles />
  </>
);

export default App;
