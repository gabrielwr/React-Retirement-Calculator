import React from 'react'
import { Footer } from 'react-materialize'

const Foot = (props) => (
  <Footer copyrights="&copy; 2017 Gabriel Rowe" //center this
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="http://linkedin.com/in/gabrielrowe">LinkedIn</a></li>
        <li><a className="grey-text text-lighten-3" href="https://github.com/gabrielwr">GitHub</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Link Placeholder</a></li>
      </ul>
    }
    className='example'
  >
      <h5 className="white-text">Footer Content</h5>
      <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
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
