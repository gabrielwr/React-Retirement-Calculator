import React from 'react'
import { Link } from 'react-router'
import { Navbar, NavItem } from 'react-materialize'



const Nav = (props) => (
  <Navbar style={{backgroundColor: "lightblue"}} brand='Figure out what you need' left>
    <NavItem><Link to='/calculator'>Calculator</Link></NavItem>
    <NavItem><Link to='/about'>About</Link></NavItem>
  </Navbar>
)

export default Nav

