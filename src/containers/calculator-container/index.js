import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

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
    const {
      startingAge,
      salary,
      salaryIncrease,
      retireAge,
      savingsRate,
      lifeExpectancy,
      startingSavings,
      investmentReturnRate
    } = this.props;

    let salarySaved = Math.floor( salary / 100 * savingsRate);
    const yearsToRetirement = retireAge - startingAge;
    const yearsLeft = lifeExpectancy - startingAge;
    const retireSpending = retireSpending;
    let accumulatedSavings = startingSavings;
    let retiredBool = false;
    let graphData = [];

    for(let i = 0; i <= yearsLeft; i++) {
      accumulatedSavings += Math.floor(accumulatedSavings / 100 * investmentReturnRate);
      if(i >= yearsToRetirement && !retiredBool) {
        retiredBool = true;
        this.props.addRetireAmt(accumulatedSavings);
      }
      if(!retiredBool) {
        accumulatedSavings += salarySaved;
      } else {
        accumulatedSavings -= retireSpending;
      }
      graphData.push({
        savings: accumulatedSavings,
        age: `${startingAge+1}`,
      });

      //update via salaryIncrease
      salarySaved += Math.floor(salarySaved / 100 * salaryIncrease)
    }

    this.props.setFinalSavings(accumulatedSavings);
    this.props.setGraphData(graphData);
  }

  handleCurrentAge = (_evt, age) => {
    const { retireAge, setLifeExpectancy, lifeExpectancy, addCurrentAge, addRetireAge } = this.props;
    if(age >= retireAge) {
      addRetireAge(age + 1);
    }
    if(age >= lifeExpectancy) {
      setLifeExpectancy(age + 1);
    }
    addCurrentAge(age);
    this.computeData();
  }

  handleRetirementAge = (_evt, retireAge) => {
    const { addCurrentAge, addRetireAge, startingAge, lifeExpectancy } = this.props;
    if(retireAge <= startingAge) {
      addCurrentAge(retireAge - 1);
    } else if(retireAge >= lifeExpectancy) {
      addRetireAge(lifeExpectancy-1);
    }
    addRetireAge(retireAge);
    this.computeData();
  }

  changeHandler = (keyName) => {
    return (_evt, updatedValue) => {
      this.props[`add${keyName}`](`${updatedValue}`);
      this.computeData();
    };
  }

  render() {
    const {
      finalSavings,
      investmentReturnRate,
      retireAge,
      retireAmt,
      retireSpending,
      salary,
      salaryIncrease,
      savingsRate,
      startingSavings,
    } = this.props;

    const formProps = {
      finalSavings,
      investmentReturnRate,
      retireAge,
      retireAmt,
      retireSpending,
      salary,
      salaryIncrease,
      savingsRate,
      startingSavings,
      handleCurrentAge: this.handleCurrentAge,
      handleLifeExpectancy: this.handleLifespanAge,
      handleRetirementAge: this.handleRetirementAge,
    }

    return (
      <ContentWrapper>
        <CalculatorContainerWrapper>
          <AgeForm />
          <Chart />
          <CalculatorForm { ...formProps } />
        </CalculatorContainerWrapper>
      </ContentWrapper>
    );
  }
}

const mapState = (state) => {
  const finalSavings = R.path(['calculationData', 'finalSavings'])(state);
  const investmentReturnRate = R.path(['calculationData', 'investmentReturnRate'])(state);
  const retireAge = R.path(['calculationData', 'retireAge'])(state);
  const retireAmt = R.path(['calculationData', 'retireAmt'])(state);
  const retireSpending = R.path(['calculationData', 'retireSpending'])(state);
  const salary = R.path(['calculationData', 'salary'])(state);
  const salaryIncrease = R.path(['calculationData', 'retireAmt'])(state);
  const savingsRate = R.path(['calculationData', 'savingsRate'])(state);
  const startingSavings = R.path(['calculationData', 'startingSavings'])(state);

  const lifeExpectancy = R.path(['calculationData', 'lifeExpectancy'])(state);

  return {
    finalSavings,
    investmentReturnRate,
    retireAge,
    retireAmt,
    retireSpending,
    salary,
    salaryIncrease,
    savingsRate,
    startingSavings,
    lifeExpectancy
  };
};

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
  setStartingSavings,
};

export default connect(mapState, mapDispatch)( CalculatorContainer );
