import { connect } from 'react-redux';

/* ------------       REDUCERS    ------------------ */
import { addCurrentAge } from '../../reducers/currentAge';
import { addCurrentSavings } from '../../reducers/currentSavings';
import { addFinalAmt } from '../../reducers/finalAmt';
import { addGraphData as addGraph } from '../../reducers/graphData';
import { addLifespan } from '../../reducers/lifespan';
import { addMarketReturn } from '../../reducers/marketReturn';
import { addRetireAge } from '../../reducers/retireAge';
import { addRetireAmt } from '../../reducers/retireAmt';
import { addRetireSpending } from '../../reducers/retireSpending';
import { addSalary } from '../../reducers/salary';
import { addSalaryIncrease} from '../../reducers/salaryIncrease';
import { addSavings } from '../../reducers/savings';

import React, { Component } from 'react';

import CalculatorForm from '../../components/calculator-form';
import Chart from '../../components/chart';

class Calculator extends Component {

  componentWillMount(){
    this.computeData();
  }

  computeData() {
    const state = { ...this.props }
    let currentAge = +state.currentAge;
    let salarySaved = Math.floor( +state.salary / 100 * +state.savings);
    const salaryIncrease = +state.salaryIncrease;
    const yearsToRetirement = +state.retireAge - currentAge;
    const yearsLeft = +state.lifespan - currentAge;
    const retireSpending = +state.retireSpending;
    let accumulatedSavings = +state.currentSavings;
    let retiredBool = false;
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
    this.props.addFinalAmt(`${accumulatedSavings}`);
    this.props.addGraph(graphData);
  }

  handleCurrentAge = (evt, age) => {
    if(age >= +this.props.retireAge) {
      this.props.addRetireAge(`${age + 1}`);
    }
    if(age >= +this.props.lifespan) {
      this.props.addLifespan(`${age + 1}`);
    }
    this.props.addCurrentAge(`${age}`);
    this.computeData();
  }

  handleRetirementAge = (evt, retireAge) => {
    if(retireAge <= +this.props.currentAge) {
      this.props.addCurrentAge(`${retireAge - 1}`);
    } else if(retireAge >= this.props.lifespan) {
      this.props.addRetireAge(`${this.props.lifespan-1}`);
    }
    this.props.addRetireAge(`${retireAge}`);
    this.computeData();
  }

  handleLifespanAge = (evt, lifespan) => {
    if(lifespan <= +this.props.currentAge){
      this.props.addCurrentAge(`${lifespan-1}`);
    }
    this.props.addLifespan(`${lifespan}`);
    this.computeData();
  }

  changeHandler = (keyName) => {
    return (evt, updatedValue) => {
      this.props[`add${keyName}`](`${updatedValue}`);
      this.computeData();
    };
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
    };

    return (
      <div>
        <Chart />
        <div id='form'>
          <CalculatorForm { ...props } />
        </div>
      </div>
    );
  }
}

const mapState = state => ({
  ...state
});

const mapDispatch = {
  addCurrentAge,
  addCurrentSavings,
  addFinalAmt,
  addGraph,
  addLifespan,
  addMarketReturn,
  addRetireAge,
  addRetireAmt,
  addRetireSpending,
  addSalary,
  addSalaryIncrease,
  addSavings
};

export default connect(mapState, mapDispatch)( Calculator );
