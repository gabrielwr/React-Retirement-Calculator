import React, { Component } from 'react';

import { formatMoney } from '../../utils/formatMoney';

import {
  FormWrapper,
  FormColumn,
  Row
} from './styled';

class CalculatorForm extends Component {
  render() {
    const {
      handleCurrentAge,
      handleRetirementAge,
      handleLifespanAge,
      startingSavings,
      investmentReturnRate,
      retireAge,
      retireSpending,
      salary,
      salaryIncrease,
      savingsRate,
    } = this.props;

    return (
      <FormWrapper>
        <FormColumn>
          <Row>
            <span>Net Income</span>
            <input value={formatMoney(salary, 0)} />
            <span>$/yr</span>
          </Row>
          <Row>
            <span>Current Savings </span>
            <input value={formatMoney(startingSavings, 0)}/>
            <span>$</span>
          </Row>
          <Row>
            <span>Investment Return</span>
            <input value={investmentReturnRate}/>
            <span>%</span>
          </Row>
        </FormColumn>
        <FormColumn>
          <Row>
            <span>Savings Rate</span>
            <input value={ savingsRate }/>
            <span>%</span>
          </Row>
          <Row>
            <span>Retirement Age</span>
            <input value={ retireAge }/>
            <span>yrs</span>
          </Row>
          <Row>
            <span>Withdrawal Rate</span>
            <input value={ 4 }/>
            <span>%</span>
          </Row>
        </FormColumn>
      </FormWrapper>
    );
  }
}

export default CalculatorForm;
