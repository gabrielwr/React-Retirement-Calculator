
//React Imports
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import store from './store.jsx';
import Root from './components/Root'
import CalculatorContainer from './containers/CalculatorContainer'
import NotFound  from './components/NotFound'

import './public/scss/index.scss' //imports scss into browser files

render(
  <Provider store={ store }>
    <Router history={ browserHistory } >
      <Route path="/" component={ Root }>
        <Route path="/calculator" component={ CalculatorContainer } />
        <IndexRoute component={ CalculatorContainer } />
      </Route>
      <Route path='*' component={ NotFound } />
    </Router>
  </Provider>,
  document.getElementById('app')
);

