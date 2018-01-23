import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-materialize';

const Nav = () => (
  <Navbar style={{ backgroundColor: "#2266bb" }} brand='Figure out what you need' left>
    <li><Link to='/calculator'>Calculator</Link></li>
  </Navbar>
)

export default Nav;

