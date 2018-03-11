import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const App = ({ children }) => {
  return (
    <div id="main">
      <Navbar />
        { children }
      <Footer />
    </div>
  );
}

export default App;
