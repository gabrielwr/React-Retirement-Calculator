import React, { Component } from 'react';

import { formatMoney } from '../../utils/formatMoney';

import {
  FormWrapper,
  FormColumn,
  Row
} from './styled';

class CalculatorForm extends Component {
  render() {
    const { handle, state } = this.props;
    const {
      currentSavings,
      marketReturn,
      retireAge,
      retireSpending,
      salary,
      salaryIncrease,
      savings
    } = state;

    return (
      <FormWrapper>
        <FormColumn>
          <Row>
            <span>Net Income</span>
            <input value={formatMoney(+salary, 0)} />
            <span>$/yr</span>
          </Row>
          <Row>
            <span>Current Savings </span>
            <input value={formatMoney(+currentSavings, 0)}/>
            <span>$</span>
          </Row>
          <Row>
            <span>Investment Return</span>
            <input value={+marketReturn}/>
            <span>%</span>
          </Row>
        </FormColumn>
        <FormColumn>
          <Row>
            <span>Savings Rate</span>
            <input value={ +savings }/>
            <span>%</span>
          </Row>
          <Row>
            <span>Retirement Age</span>
            <input value={ +retireAge }/>
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
