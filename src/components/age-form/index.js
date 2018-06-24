import React, { Component } from 'react';

import { AgeFormWrapper, AgeFormInput } from './styled';

class AgeForm extends Component {
  render() {
    return (
      <AgeFormWrapper>
        <span>I am</span>
        <AgeFormInput type='number'/>
        <span>years old with a life expectancy of</span>
        <AgeFormInput type='number'/>
        <span>.</span>
      </AgeFormWrapper>
    );
  }
}

export default AgeForm;
