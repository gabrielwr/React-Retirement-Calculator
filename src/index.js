import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "./store/";

import App from "./elements/App";
import CalculatorContainer from "./containers/calculator-container";
import NotFound from "./elements/NotFound";

import "./index.css";

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
