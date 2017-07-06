import React from 'react'
import { Link } from 'react-router'



const Navbar = (props) => (
  <div style={{backgroundColor: "#e3f2fd"}}>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <Link className="navbar-brand" to="/calculator">Navbar w/ text</Link>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/calculator">Calculator <span className="sr-only"></span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
        <span className="navbar-text">
          Figure out what you need
        </span>
      </div>
    </nav>
  </div>
)

export default Navbar





// <nav className="navbar navbar-light" style={{backgroundColor:"#e3f2fd"}}>
//       <Link className="navbar-brand" to="/calculator">Retirement Calculator!</Link>
//         <div className="navbar-nav">
//           <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
//           <a className="nav-item nav-link" href="#">Features</a>
//           <a className="nav-item nav-link" href="#">Pricing</a>
//         </div>
//     </nav>



// <header>
//       <h1>Investment Calculator!</h1>
//       <h2>Figure out what you'll need.</h2>
//       <nav>
//         <ul>
//           <li><Link to="/calculator">Calculator</Link></li>
//           <li><Link to="/about">About</Link></li>
//         </ul>
//       </nav>
//     </header>






