import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.jsx';

import App from './elements/App';
import CalculatorContainer from './containers/CalculatorContainer';
import NotFound from './elements/NotFound';

render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      <Route path="/" component={ App }>
        <IndexRoute component={ CalculatorContainer } />
      </Route>
      <Route path='*' component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('root')
);
