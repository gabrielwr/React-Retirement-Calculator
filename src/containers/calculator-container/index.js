import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as calculationDataActions } from '../../reducers/calculation-data';

import CalculatorForm from '../../components/calculator-form';
import Chart from '../../components/chart';
import AgeForm from '../../components/age-form';

import {
  CalculatorContainerWrapper,
  ContentWrapper,
} from './styled';

import {
  IconButton,
  IconImage
} from '../../elements/styled';

import ContinueIcon from '../../assets/continue.svg';

const {
  setFinalSavings,
  setGraphData,
  setInvestmentReturnRate,
  setLifeExpectancy,
  setRetireAge,
  setRetireAmt,
  setRetireSpending,
  setSalary,
  setSalaryIncrease,
  setSavingsRate,
  setStartingAge,
  setStartingSavings
} = calculationDataActions;

class CalculatorContainer extends Component {

  componentWillMount(){
    this.computeData();
  }

  computeData() {
    const state = { ...this.props }
    let startingAge = +state.startingAge;
    let salarySaved = Math.floor( +state.salary / 100 * +state.savings);
    const salaryIncrease = +state.salaryIncrease;
    const yearsToRetirement = +state.retireAge - startingAge;
    const yearsLeft = +state.lifespan - startingAge;
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
        age: `${startingAge++}`,
      })

      //update via salaryIncrease
      salarySaved += Math.floor(salarySaved / 100 * salaryIncrease)
    }

    //dispatch to store
    this.props.setFinalSavings(`${accumulatedSavings}`);
    this.props.setGraphData(graphData);
  }

  handleCurrentAge = (_evt, age) => {
    const { retireAge, setLifeExpectancy, lifeExpectancy, addCurrentAge, addRetireAge } = this.props;
    if(age >= +retireAge) {
      addRetireAge(`${age + 1}`);
    }
    if(age >= +lifeExpectancy) {
      setLifeExpectancy(`${age + 1}`);
    }
    addCurrentAge(`${age}`);
    this.computeData();
  }

  handleRetirementAge = (_evt, retireAge) => {
    const { addCurrentAge, addRetireAge, startingAge, lifeExpectancy } = this.props;
    if(retireAge <= +startingAge) {
      addCurrentAge(`${retireAge - 1}`);
    } else if(retireAge >= lifeExpectancy) {
      addRetireAge(`${lifeExpectancy-1}`);
    }
    addRetireAge(`${retireAge}`);
    this.computeData();
  }

  handleLifespanAge = (_evt, lifeExpectancy) => {
    const { startingAge, addCurrentAge, setLifeExpectancy } = this.props;

    if(lifeExpectancy <= +startingAge){
      addCurrentAge(`${lifeExpectancy-1}`);
    }
    setLifeExpectancy(`${lifeExpectancy}`);
    this.computeData();
  }

  changeHandler = (keyName) => {
    return (_evt, updatedValue) => {
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
      graphData: this.props.graphData
    };

    return (
      <ContentWrapper>
        <CalculatorContainerWrapper>
          <AgeForm />
          <Chart />
          <CalculatorForm { ...props } />
        </CalculatorContainerWrapper>
      </ContentWrapper>
    );
  }
}

const mapState = state => ({
  ...state
});

const mapDispatch = {
  setFinalSavings,
  setGraphData,
  setInvestmentReturnRate,
  setLifeExpectancy,
  setRetireAge,
  setRetireAmt,
  setRetireSpending,
  setSalary,
  setSalaryIncrease,
  setSavingsRate,
  setStartingAge,
  setStartingSavings
};

export default connect(mapState, mapDispatch)( CalculatorContainer );
