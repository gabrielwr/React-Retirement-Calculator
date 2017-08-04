//framework imports
import React from 'react'
import { Button, Col, Row } from 'react-materialize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//component imports
import CalculatorForm from './CalculatorForm'
import Chart from './Chart.jsx'
import getMuiTheme from 'material-ui/styles/getMuiTheme';


export default class Calculator extends React.Component {
  constructor() {
    super()

    //Sets the MaterialUI Slider Style
    this.muiTheme = getMuiTheme({
      slider: {
        selectionColor: '#2266bb',
        handleFillColor: '#2266bb'
      },
    });

    this.handleCurrentAge = this.handleCurrentAge.bind(this)
    this.handleRetirementAge = this.handleRetirementAge.bind(this)
    this.handleLifespanAge = this.handleLifespanAge.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentWillMount(){
    this.computeData()
  }

  computeData() {
    const state = {...this.props}
    console.log('in compute', state)
    let currentAge = +state.currentAge
    const salarySaved = (state.salary / 100) * state.savings
    const salaryIncrease = +state.salaryIncrease
    const yearsToRetirement = +state.retireAge - currentAge
    const yearsLeft = +state.lifespan - currentAge
    const retireSpending = +state.retireSpending
    let accumulatedSavings = +state.currentSavings
    let retiredBool = false
    let graphData = [];

    for(let i = 0; i <= yearsLeft; i++) {
      accumulatedSavings += (accumulatedSavings/100) * state.marketReturn
      graphData.push({
        savings: accumulatedSavings,
        age: `${currentAge++}`,
      })
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        this.setState({
          retireAmt: accumulatedSavings
        })
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved
      } else {
        accumulatedSavings -= retireSpending;
      }
    }

    console.log('graphdata', graphData)
    //sync dispatch to store
    this.props.dispatchGraph(graphData)
    // localStorage.setItem('state', JSON.stringify(this.state))
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
    } else if(retireAge >= this.state.lifespan) {
      this.setState({
        retireAge: `${this.state.lifespan-1}`,
      }, () => this.computeData())
    } else {
      this.setState({
        retireAge: `${retireAge}`,
      }, () => this.computeData())
    }
  }

  handleLifespanAge(evt, lifespan) {
    if(lifespan < +this.state.currentAge){
      this.setState({
        lifespan: `${lifespan}`,
        currentAge: `${lifespan}`
      }, () => {
        this.computeData()
      })
    } else {
      this.setState({
        lifespan: `${lifespan}`
      }, () => {
        this.computeData()
      })
    }
  }

  changeHandler(keyName) {
    return (evt, updatedValue) => {
      this.setState({
        [keyName]: updatedValue
      }, () => this.computeData() )
    }
  }

  render() {
    const props = {
      handleChange: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleLifespanAge: this.handleLifespanAge,
        changeHandler: this.changeHandler
      },
      state: {...this.props},
      graphData: this.props.graphData.graphData
    }

    return (
      <div>
        <Chart { ...props } />
        <div id='form'>
          <MuiThemeProvider muiTheme={this.muiTheme}>
            <CalculatorForm { ...props } />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

