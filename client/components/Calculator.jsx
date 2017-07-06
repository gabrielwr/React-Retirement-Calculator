import React from 'react'

import CalculatorForm from './CalculatorForm'
import Chart from './Chart.jsx'



export default class Calculator extends React.Component {

  constructor() {
    super()
    this.state = {
      currentAge: 26,
      retirementAge: 65,
      lifespanAge: 90,
      salary: 50000,
      salaryIncrease: 3,
      retirementSpending: 40000,
      investmentReturnPercent: 4,
      savings: 5,
      currentSavings: 0,
      graphData: [],
      numScenarios: [1],
      finalAmount: 0,
      amtAtRetire: 0
    }

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleSalary = this.handleSalary.bind(this)
    this.handleSalaryIncrease = this.handleSalaryIncrease.bind(this)
    this.handleSavings = this.handleSavings.bind(this)
    this.handleRetirementSpending = this.handleRetirementSpending.bind(this)
    this.handleInvestmentReturn = this.handleInvestmentReturn.bind(this)
    this.handleCurrentSavings = this.handleCurrentSavings.bind(this)
    this.handleAddScenario = this.handleAddScenario.bind(this) // why did I have to do this for this.state to show up?
    this.handleLifespanAge = this.handleLifespanAge.bind(this)
  }

  componentDidMount(){
    this.computeData()
  }

  computeData() {
    const salaryMonth = this.state.salary / 12
    const salaryIncrease = this.state.salaryIncrease
    const savingsPercent = this.state.savings
    const currSaved = this.state.currentSavings
    const yearsToRetirement = this.state.retirementAge - this.state.currentAge
    const monthsToRetirement = yearsToRetirement * 12
    const yearsToEnd = this.state.lifespanAge - this.state.currentAge
    const monthsToEnd = yearsToEnd * 12
    let retiredBool = false
    let savingsAtRetirement = 0;
    let savingsAtEnd;
    const retirementSpending = this.state.retirementSpending / 12

    for(let i = 0; i < monthsToEnd; i++) {
      if(i >= monthsToRetirement && !retiredBool) {
        retiredBool = true;
        console.log('just retired')
        savingsAtEnd = savingsAtRetirement
      }
      if(!retiredBool) {
        savingsAtRetirement += salaryMonth
      }
      if(retiredBool) {
        savingsAtEnd -= retirementSpending;
      }
    }

    //want to display age on x axis, not month

    this.setState({
      finalAmount: savingsAtEnd,
      amtAtRetire: savingsAtRetirement
    })
  }

  handleCurrentAge(evt) {
    const age = +evt.target.value
    if(age < 0) {
      console.log('cant be negative')
      //display warning for can't be negative
      return
    }

    if(age > this.state.retirementAge) {
      console.log(`age can't be greater than retire age`)
      //you have to change retirement age!
      return
    }
    this.setState({
      currentAge: evt.target.value
    })
  }

  handleRetirementAge(evt) {
    const retireAge = +evt.target.value
    if(retireAge <= 0) {
      console.log('cant be negative')
      return
    }
    if(retireAge < this.state.currentAge) {
      console.log(`retire age can't be less than current age`)
      //you have to change retirement age!
      return
    }

    this.setState({
      retirementAge: retireAge
    })
  }

  handleLifespanAge(evt) {
    const ageAtDeath = +evt.target.value

    //validations

    this.setState({
      lifespanAge: ageAtDeath
    })
  }

  handleSalary(evt) {
    this.setState({
      salary: +evt.target.value
    })
  }

  handleSalaryIncrease(evt) {
    this.setState({
      salaryIncrease: +evt.target.value
    })
  }

  handleSavings(evt) {
    this.setState({
      savings: +evt.target.value
    })
  }

  handleRetirementSpending(evt) {
    this.setState({
      retirementSpending: +evt.target.value
    })
  }

  handleInvestmentReturn(evt) {
    this.setState({
      investmentReturnPercent: +evt.target.value
    })
  }

  handleCurrentSavings(evt) {
    this.setState({
      currentSavings: +evt.target.value
    })
  }

  handleAddScenario(){
    const arr = this.state.numScenarios
    arr.push(this.state.numScenarios.length+1)
    if(arr.length > 3) {
      console.log('can only have 3 scenarios')
      return
    }
    this.setState({
      numScenarios: arr
    })
  }

  render() {
    const props = {
      handleChange: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleSalary: this.handleSalary,
        handleSalaryIncrease: this.handleSalaryIncrease,
        handleRetirementSpending: this.handleRetirementSpending,
        handleInvestmentReturn: this.handleInvestmentReturn,
        handleSavings: this.handleSavings,
        handleCurrentSavings: this.handleCurrentSavings,
        handleLifespanAge: this.handleLifespanAge
      },
      state: this.state
    }

    //need to connect calculator form and make container since will pass info to rechart
    return (
      <div>
        {this.state.numScenarios.map((currentScenario) => {
            return (<CalculatorForm key={currentScenario} props={props} />)
          })
        }
        <div>
          <button onClick={ this.handleAddScenario }>
            Add Scenario
          </button>
        </div>
        <Chart />
      </div>
    )
  }
}
