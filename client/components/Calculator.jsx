import React from 'react'

import CalculatorForm from './CalculatorForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Calculator extends React.Component {

  constructor() {
    super()

    this.state = {
      currentAge: 26,
      retirementAge: 65,
      salary: 50000,
      salaryIncreasePercent: 3,
      savingsPercent: 5,
      retirementSpending: 40000,
      investmentReturnPercent: 4,
      currentSavings: 0,
    }

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleCurrentAge(e, setCurrAge) {
    console.log('target:', e, 'setCurrAge', setCurrAge)
    this.setState({
      currentAge: setCurrAge
    })
  }

  handleRetirementAge(e, value) {

  }

  handleChange(e, value) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const props = {
      handleChange: this.handleChange,
      handleCurrentAge: this.handleCurrentAge,
      handleRetirementAge: this.handleRetirementAge,
      state: this.state
    }
    return (
      <div>
        <MuiThemeProvider>
          <CalculatorForm props={props} />
        </MuiThemeProvider>
      </div>
    )
  }
}
