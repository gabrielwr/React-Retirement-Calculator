import React from 'react'
import { Link } from 'react-router'

const Navbar = (props) => (
  <div id="header">
    <header>
      <a>
        <h1>Investment Calculator!</h1>
        <h2>Figure out what you'll need.</h2>
      </a>
      <nav>
        <ul>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  </div>
)

export default Navbar
