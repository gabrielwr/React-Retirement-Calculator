import React, { Component } from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import { actions as calculationDataActions } from "../../reducers/calculation-data";

import CalculatorForm from "../../components/calculator-form";
import Chart from "../../components/chart";
import AgeForm from "../../components/age-form";

import { CalculatorContainerWrapper, ContentWrapper } from "./styled";

import { IconButton, IconImage } from "../../elements/styled";

import ContinueIcon from "../../assets/continue.svg";

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
  componentWillMount() {
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
      investmentReturnRate,
      retireSpending
    } = this.props;

    const graphData = [];
    const yearsToRetirement = retireAge - startingAge;
    const totalYears = lifeExpectancy - startingAge;
    let salarySaved = Math.floor((salary / 100) * savingsRate);
    let currentAge = startingAge;
    let accumulatedSavings = startingSavings;
    let isRetired = yearsToRetirement > 0 ? false : true;

    for (let currentYear = 0; currentYear <= totalYears; currentYear++) {
      graphData.push({
        savings: accumulatedSavings,
        age: currentAge
      });

      accumulatedSavings += Math.floor(
        (accumulatedSavings / 100) * investmentReturnRate
      );
      if (currentYear === yearsToRetirement) {
        this.props.setRetireAmt(accumulatedSavings);
      }
      if (isRetired) {
        accumulatedSavings -= retireSpending;
      } else {
        salarySaved += Math.floor((salarySaved / 100) * salaryIncrease);
        accumulatedSavings += salarySaved;
      }

      currentAge++;
    }

    this.props.setFinalSavings(accumulatedSavings);
    this.props.setGraphData(graphData);
  }

  handleStartingAge = (_evt, age) => {
    const {
      retireAge,
      setLifeExpectancy,
      lifeExpectancy,
      setStartingAge,
      setRetireAge
    } = this.props;

    if (age >= retireAge) {
      setRetireAge(age + 1);
    }
    if (age >= lifeExpectancy) {
      setLifeExpectancy(age + 1);
    }
    setStartingAge(age);
    this.computeData();
  };

  handleRetirementAge = (_evt, retireAge) => {
    const {
      setStartingAge,
      setRetireAge,
      startingAge,
      lifeExpectancy
    } = this.props;
    if (retireAge <= startingAge) {
      setStartingAge(retireAge - 1);
    } else if (retireAge >= lifeExpectancy) {
      setRetireAge(lifeExpectancy - 1);
    }
    setRetireAge(retireAge);
    this.computeData();
  };

  changeHandler = (keyName) => {
    return (_evt, updatedValue) => {
      this.props[`set${keyName}`](`${updatedValue}`);
      this.computeData();
    };
  };

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
      startingAge
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
      startingAge,
      handleStartingAge: this.handleStartingAge,
      handleRetirementAge: this.handleRetirementAge
    };

    return (
      <ContentWrapper>
        <CalculatorContainerWrapper>
          <AgeForm />
          <Chart />
          <CalculatorForm {...formProps} />
        </CalculatorContainerWrapper>
      </ContentWrapper>
    );
  }
}

const mapState = (state) => {
  const finalSavings = R.path(["calculationData", "finalSavings"])(state);
  const investmentReturnRate = R.path([
    "calculationData",
    "investmentReturnRate"
  ])(state);
  const retireAge = R.path(["calculationData", "retireAge"])(state);
  const retireAmt = R.path(["calculationData", "retireAmt"])(state);
  const retireSpending = R.path(["calculationData", "retireSpending"])(state);
  const salary = R.path(["calculationData", "salary"])(state);
  const salaryIncrease = R.path(["calculationData", "retireAmt"])(state);
  const savingsRate = R.path(["calculationData", "savingsRate"])(state);
  const startingSavings = R.path(["calculationData", "startingSavings"])(state);
  const startingAge = R.path(["calculationData", "startingAge"])(state);

  const lifeExpectancy = R.path(["calculationData", "lifeExpectancy"])(state);

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
    startingAge,
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
  setStartingSavings
};

export default connect(mapState, mapDispatch)(CalculatorContainer);
