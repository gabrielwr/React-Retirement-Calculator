import React from 'react'
import { Footer } from 'react-materialize'

const Foot = props => (
  <Footer
    copyrights="&copy; 2017 Gabriel Rowe"
    style={{ backgroundColor: "#2266bb" }}
    links={
      <ul>
        <p className="white-text"> More from me! </p>
        <a href="http://linkedin.com/in/gabrielrowe">
          <i alt="LinkedIn Logo" className="fa fa-linkedin-square fa-2x icon" aria-hidden="true" ></i>
        </a>
        <a href="https://github.com/gabrielwr">
          <i alt="GitHub Logo" className="fa fa-github fa-2x space-button icon" aria-hidden="true" ></i>
        </a>
        <a href="https://gabrielwr.github.io/">
          <i alt="Portfolio Site" className="fa fa-file-pdf-o fa-2x space-button icon" aria-hidden="true" ></i>
        </a>
      </ul>
    }
  >
      <h5 className="white-text">Hey!</h5>
      <p className="white-text">Thanks so much for coming to check this out.</p>
      <p className="white-text">It's a fun little side project that is still very much a work in progress!</p>
  </Footer>
);

export default Foot;
