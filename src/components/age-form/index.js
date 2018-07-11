import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

import { AgeFormWrapper, AgeFormInput } from './styled';

class AgeForm extends Component {

  handleLifespanAge = (_evt, lifeExpectancy) => {
    const { startingAge, addCurrentAge, setLifeExpectancy } = this.props;

    if(lifeExpectancy <= +startingAge){
      addCurrentAge(lifeExpectancy-1);
    }
    setLifeExpectancy(lifeExpectancy);
    this.computeData();
  }

  render() {
    const { startingAge, lifeExpectancy} = this.props
    return (
      <AgeFormWrapper>
        <span>I am</span>
        <AgeFormInput type='number' value={startingAge}/>
        <span>years old with a life expectancy of</span>
        <AgeFormInput type='number' value={lifeExpectancy}/>
      </AgeFormWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const lifeExpectancy = R.path(['calculationData', 'lifeExpectancy'])(state);
  const startingAge = R.path(['calculationData', 'startingAge'])(state);

  return {
    lifeExpectancy,
    startingAge
  };
};


export default connect(mapStateToProps)(AgeForm);
