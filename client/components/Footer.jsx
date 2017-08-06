import React from 'react'
import { Footer } from 'react-materialize'

const Foot = props => (
  <Footer
    copyrights="&copy; 2017 Gabriel Rowe"
    style={{ backgroundColor: "#2266bb" }}
    links={
      <ul>
        <p className="white-text"> More from me! </p>
        <li><a className="grey-text text-lighten-3" href="http://linkedin.com/in/gabrielrowe">LinkedIn</a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/gabrielwr">GitHub</a></li>
        <li><a className="grey-text text-lighten-3" href="http://linkedin.com/in/gabrielrowe">Email</a></li>
      </ul>
    }
  >
      <h5 className="white-text">Hey!</h5>
      <p className="white-text">Thanks so much for coming to check this out!</p>
      <p className="white-text">It's a fun little side project that is still very much a work in progress!</p>
  </Footer>
)

export default Foot

//necessary updates
  //     <p className= "footer"> More from me! </p>
  //       <a href="linkedin_placehold">
  //         <img

  //           alt="LinkedIn Logo"
  //         />
  //       </a>
  //       <a href="http://facebook.com/gabriel.roo2">
  //         <img src="img/facebook-wrap.png" alt="Facebook Logo" className="social-icon"/>
  //       </a>
  //       <a href="https://github.com/gabrielwr">
  //         <img src="img/git.png" alt= "Git Hub Logo" className = "social-icon"/>
  //       </a>

// <Image source={require('../public/img/linkedin.png')}/>
