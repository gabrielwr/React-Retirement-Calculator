import React from 'react'

const Footer = (props) => (
  <div id="footer">
    <footer>
      <h1> Footer </h1>
      <p className= "footer"> More from me! </p>
        <a href="http://twitter.com/GroweURBoat">
          <img src="img/twitter-wrap.png" alt="Twitter Logo" className="social-icon" />
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
