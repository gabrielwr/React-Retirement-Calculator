import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import CalculatorContainer from "../containers/calculator-container";
import Navbar from "./navbar";
import Footer from "./footer";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <AppWrapper>
      <Navbar />
      <Route path="/" component={CalculatorContainer}></Route>
      <Footer />
    </AppWrapper>
  );
};

export default App;
