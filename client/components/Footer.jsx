import React from 'react'

const Footer = (props) => (
  <div id="footer">
    <footer>
      <p className= "footer"> More from me! </p>
        <a href="linkedin_placehold">
          <img src="img/linkedin_plalcehold" alt="LinkedIn Logo" className="social-icon" />
        </a>
        <a href="http://facebook.com/gabriel.roo2">
          <img src="img/facebook-wrap.png" alt="Facebook Logo" className="social-icon"/>
        </a>
        <a href="https://github.com/gabrielwr">
          <img src="img/git.png" alt= "Git Hub Logo" className = "social-icon"/>
        </a>
        <p>&copy; 2016 Gabriel Rowe</p>
    </footer>
  </div>
)

export default Footer
