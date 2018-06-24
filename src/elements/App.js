import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = ({ children }) => {
  return (
    <AppWrapper>
      <Navbar />
        { children }
      <Footer />
    </AppWrapper>
  );
}

export default App;
