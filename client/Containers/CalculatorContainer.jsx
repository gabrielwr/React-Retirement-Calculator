import React, { Component } from 'react'
import Calculator from '../components/Calculator';
import { connect } from 'react-redux';


class CalculatorContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      numScenarios: 1
    }
  }
}

export default connect(
  state => ({}),
  null
)( CalculatorContainer );
