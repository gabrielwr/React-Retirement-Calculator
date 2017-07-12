import React from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-materialize'



const Nav = (props) => (
  <Navbar style={{backgroundColor: "lightblue"}} brand='Figure out what you need' left>
    <li><Link to='/calculator'>Calculator</Link></li>
    <li><Link to='/about'>About</Link></li>
  </Navbar>
)

export default Nav

