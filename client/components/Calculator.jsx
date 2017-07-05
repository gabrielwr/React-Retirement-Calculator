import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CalculatorForm from './CalculatorForm'



export default class Calculator extends React.Component {

  constructor() {
    super()
    this.state = {
      currentAge: 26,
      retirementAge: 65,
      salary: 50000,
      salaryIncrease: 3,
      savings: 5,
      retirementSpending: 40000,
      investmentReturnPercent: 4,
      currentSavings: 0,
    }

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleSalary = this.handleSalary.bind(this)
    this.handleSalaryIncrease = this.handleSalaryIncrease.bind(this)
    this.handleSavings = this.handleSavings.bind(this)
    this.handleRetirementSpending = this.handleRetirementSpending.bind(this)
    this.handleInvestmentReturn = this.handleInvestmentReturn.bind(this)
    this.handleCurrentSavings = this.handleCurrentSavings.bind(this)

  }

  //Note:
  // not possible to DRY up onChange handlers due to event

  handleCurrentAge(e, currentAge) {
    this.setState({
      currentAge
    })
  }

  handleRetirementAge(e, retirementAge) {
    this.setState({
      retirementAge
    })
  }
  handleSalary(e, salary) {
    this.setState({
      salary
    })
  }

  handleSalaryIncrease(e, salaryIncrease) {
    this.setState({
      salaryIncrease
    })
  }

  handleSavings(e, savings) {
    this.setState({
      savings
    })
  }

  handleRetirementSpending(e, retirementSpending) {
    this.setState({
      retirementSpending
    })
  }

  handleInvestmentReturn(e, investmentReturnPercent) {
    this.setState({
      investmentReturnPercent
    })
  }

  handleCurrentSavings(e, currentSavings) {
    this.setState({
      currentSavings
    })
  }



  render() {
    const props = {
      handleChange: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleSalary: this.handleSalary,
        handleSalaryIncrease: this.handleSalaryIncrease,
        handleSavings: this.handleSavings,
        handleRetirementSpending: this.handleRetirementSpending,
        handleInvestmentReturn: this.handleInvestmentReturn,
        handleCurrentSavings: this.handleCurrentSavings
      },
      state: this.state
    }

    //need to connect calculator form and make container since will pass info to rechart
    return (
      <div>
        <MuiThemeProvider>
          <CalculatorForm props={props} />
        </MuiThemeProvider>
      </div>
    )
  }
}
