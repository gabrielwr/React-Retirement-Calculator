//framework imports
import React from 'react'
import { Button, Col, Row } from 'react-materialize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//component imports
import CalculatorForm from './CalculatorForm'
import ChartContainer from '../containers/ChartContainer'
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
    console.log('props', state)
    let currentAge = +state.currentAge
    const salarySaved = Math.floor((+state.salary / 100) * +state.savings)
    const salaryIncrease = +state.salaryIncrease
    const yearsToRetirement = +state.retireAge - currentAge
    const yearsLeft = +state.lifespan - currentAge
    console.log('yearsLeft', yearsLeft)
    const retireSpending = +state.retireSpending
    let accumulatedSavings = +state.currentSavings
    let retiredBool = false
    let graphData = [];

    for(let i = 0; i <= yearsLeft; i++) {

      accumulatedSavings += Math.floor((accumulatedSavings/100) * state.marketReturn)
      graphData.push({
        savings: accumulatedSavings,
        age: `${currentAge++}`,
      })
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        console.log('about to dispatch retireAMT')
        this.props.addRetireAmt(accumulatedSavings)
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved
      } else {
        accumulatedSavings -= retireSpending;
      }
    }
    //dispatch to store
    this.props.addGraph(graphData)
    this.props.addFinalAmt(accumulatedSavings)
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
        <ChartContainer />
        <div id='form'>
          <MuiThemeProvider muiTheme={this.muiTheme}>
            <CalculatorForm { ...props } />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

