import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//component imports
import CalculatorForm from './CalculatorForm';
import ChartContainer from '../containers/ChartContainer';

class Calculator extends Component {
  constructor() {
    super();

    //Sets the MaterialUI Slider Style
    this.muiTheme = getMuiTheme({
      slider: {
        selectionColor: '#2266bb',
        handleFillColor: '#2266bb'
      },
    });
  }

  componentWillMount(){
    this.computeData();
  }

  computeData() {
    const state = { ...this.props }
    let currentAge = +state.currentAge
    let salarySaved = Math.floor( +state.salary / 100 * +state.savings)
    const salaryIncrease = +state.salaryIncrease
    const yearsToRetirement = +state.retireAge - currentAge
    const yearsLeft = +state.lifespan - currentAge
    const retireSpending = +state.retireSpending
    let accumulatedSavings = +state.currentSavings
    let retiredBool = false
    let graphData = [];

    for(let i = 0; i <= yearsLeft; i++) {
      accumulatedSavings += Math.floor(accumulatedSavings / 100 * state.marketReturn)
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        this.props.addRetireAmt(`${accumulatedSavings}`)
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved
      } else {
        accumulatedSavings -= retireSpending;
      }
      graphData.push({
        savings: accumulatedSavings,
        age: `${currentAge++}`,
      })

      //update via salaryIncrease
      salarySaved += Math.floor(salarySaved / 100 * salaryIncrease)
    }

    //dispatch to store
    this.props.addFinalAmt(`${accumulatedSavings}`)
    this.props.addGraph(graphData)
  }

  handleCurrentAge = (evt, age) => {
    if(age >= +this.props.retireAge) {
      this.props.addRetireAge(`${age + 1}`)
    }
    if(age >= +this.props.lifespan) {
      this.props.addLifespan(`${age + 1}`)
    }
    this.props.addCurrentAge(`${age}`)
    this.computeData()
  }

  handleRetirementAge = (evt, retireAge) => {
    if(retireAge <= +this.props.currentAge) {
      this.props.addCurrentAge(`${retireAge - 1}`)
    } else if(retireAge >= this.props.lifespan) {
      this.props.addRetireAge(`${this.props.lifespan-1}`)
    }
    this.props.addRetireAge(`${retireAge}`)
    this.computeData()
  }

  handleLifespanAge = (evt, lifespan) => {
    if(lifespan <= +this.props.currentAge){
      this.props.addCurrentAge(`${lifespan-1}`)
    }
    this.props.addLifespan(`${lifespan}`)
    this.computeData()
  }

  changeHandler = (keyName) => {
    return (evt, updatedValue) => {
      this.props[`add${keyName}`](`${updatedValue}`);
      this.computeData();
    }
  }

  render() {
    const props = {
      handle: {
        handleCurrentAge: this.handleCurrentAge,
        handleRetirementAge: this.handleRetirementAge,
        handleLifespanAge: this.handleLifespanAge,
        changeHandler: this.changeHandler
      },
      state: { ...this.props },
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
    );
  }
}

export default Calculator;
