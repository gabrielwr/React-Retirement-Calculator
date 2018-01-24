import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
