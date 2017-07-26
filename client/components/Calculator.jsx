//framework imports
import React from 'react'
import { Button, Col, Row } from 'react-materialize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//component imports
import CalculatorForm from './CalculatorForm'
import Chart from './Chart.jsx'

//reducer imports
// import { addGraphData } from '../reducers/graphData'

export default class Calculator extends React.Component {
  constructor() {
    super()
    this.state = {
      currentAge: '26',
      retireAge: '65',
      lifespanAge: '90',
      salary: '50000',
      salaryIncrease: '3',
      retireSpending: '40000',
      marketReturn: '4',
      savings: '25',
      currentSavings: '0',
      graphData: [],
      finalAmount: '0',
      amtAtRetire: '0'
    }

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleLifespanAge = this.handleLifespanAge.bind(this)
    this.handleCurrentSavings = this.handleCurrentSavings.bind(this)
    this.handleSalary = this.handleSalary.bind(this)
    // this.handleSalaryIncrease = this.handleSalaryIncrease.bind(this)
    this.handleSavings = this.handleSavings.bind(this)
    this.handleRetirementSpending = this.handleRetirementSpending.bind(this)
    this.handleInvestmentReturn = this.handleInvestmentReturn.bind(this)
    this.handleCurrentSavings = this.handleCurrentSavings.bind(this)
  }

  componentDidMount(){
    this.computeData()
  }

  computeData() {
    console.log('props check', this.props)
    const state = {} = this.state
    let currentAge = +state.currentAge
    const salarySaved = (state.salary / 100) * state.savings
    const salaryIncrease = +state.salaryIncrease
    const yearsToRetirement = +state.retireAge - currentAge
    const yearsToEnd = +state.lifespanAge - currentAge
    const retireSpending = +state.retireSpending
    let accumulatedSavings = +state.currentSavings
    let retiredBool = false
    let graphData = [];

    for(let i = 0; i <= yearsToEnd; i++) {
      accumulatedSavings += (accumulatedSavings/100) * state.marketReturn
      graphData.push({
        savings: accumulatedSavings,
        age: `${currentAge++}`,
      })
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        this.setState({
          amtAtRetire: accumulatedSavings
        })
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved
      } else {
        accumulatedSavings -= retireSpending;
      }
    }

    //sync dispatch to store
    this.props.dispatchGraph(graphData)

    this.setState({
      finalAmount: accumulatedSavings,
      graphData
    })

  }

  handleCurrentAge(evt, age) {
    if(age >= +this.state.retireAge) {
      console.error(`age can't be greater than retire age`)
      //you have to change retirement age!
      this.setState({
        currentAge: `${age}`,
        retireAge: `${++age}`
      }, () => this.computeData())
    } else {
      this.setState({
        currentAge: `${age}`
      }, () => this.computeData())
    }
  }

  handleRetirementAge(evt, retireAge) {
    if(retireAge <= +this.state.currentAge) {
      console.log('less than')
      this.setState({
        //this might produce a bug, keep an eye out
        retireAge: `${retireAge}`,
        currentAge: `${--retireAge}`
      }, () => this.computeData())
    } else {
      this.setState({
        retireAge: `${retireAge}`,
      }, () => this.computeData())
    }
  }

  handleLifespanAge(evt, ageAtDeath) {
    if(ageAtDeath < +this.state.currentAge){
      this.setState({
        lifespanAge: `${ageAtDeath}`,
        currentAge: `${--ageAtDeath}`
      }, () => {
        this.computeData()
      })
    } else {
      this.setState({
        lifespanAge: `${ageAtDeath}`
      }, () => {
        this.computeData()
      })
    }
  }

  handleCurrentSavings(evt, currentSavings) {
    this.setState({
      currentSavings,
    }, () => this.computeData() )
  }

  handleSalary(evt, salary) {
    this.setState({
      salary
    }, () => this.computeData())
  }
  handleSavings(evt, savings) {
    this.setState({
      savings
    }, () => this.computeData())
  }
  handleRetirementSpending(evt, retireSpending ) {
    this.setState({
      retireSpending
    }, () => this.computeData())
  }
  handleInvestmentReturn(evt, marketReturn) {
    this.setState({
      marketReturn
    }, () => this.computeData())
  }

  render() {
    const props = {
      handleChange: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleLifespanAge: this.handleLifespanAge,
        handleCurrentSavings: this.handleCurrentSavings,
        handleSalary: this.handleSalary,
        handleSavings: this.handleSavings,
        handleRetirementSpending: this.handleRetirementSpending,
        handleInvestmentReturn: this.handleInvestmentReturn,
      },
      state: {...this.state},
      graphData: this.props.graphData.graphData
    }

    //need to connect calculator form and make container since will pass info to rechart
    return (
      <div>
        <Row>
          <Chart { ...props } />
          <MuiThemeProvider>
            <CalculatorForm { ...props } />
          </MuiThemeProvider>
        </Row>
      </div>
    )
  }
}

