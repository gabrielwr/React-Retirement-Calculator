import React, { Component } from 'react';
import Slider from 'material-ui/Slider';

import { Col } from 'react-materialize';
import { formatMoney } from '../utils/formatMoney';
import '../css/index.css';

class CalculatorForm extends Component {
  render() {
    const { handle, state } = this.props;
    const {
      currentAge,
      currentSavings,
      lifespan,
      marketReturn,
      retireAge,
      retireSpending,
      salary,
      salaryIncrease,
      savings
    } = state;

    return (
      <div className="formContainer">
        <Col>
          <span>Age: </span>
          <span>{ +currentAge }</span>
          <Slider
            min={ 0 }
            max={ 129 }
            step={ 1 }
            defaultValue={ +currentAge }
            value={ +currentAge }
            onChange={ handle.handleCurrentAge }
          />
          <span>Retirement Age: </span>
          <span>{ +retireAge }</span>
          <Slider
            min={ 1 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 65 }
            value={ +retireAge }
            onChange={ handle.handleRetirementAge }
          />
          <span>Lifespan Age: </span>
          <span>{ +lifespan }</span>
          <Slider
            min={ 1 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 90 }
            value={ +lifespan }
            onChange={ handle.handleLifespanAge }
          />
        </Col>
        <Col>
          <span>Salary: </span>
          <span>{ `$${formatMoney(+salary, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 300000 }
            step={ 1000 }
            defaultValue={ 50000 }
            value={ +salary }
            onChange={ handle.changeHandler('Salary') }
          />
           <span>Salary Increase / Year:</span>
          <span> { +salaryIncrease }%</span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 1 }
            defaultValue={ 3 }
            value={ +salaryIncrease }
            onChange={ handle.changeHandler('SalaryIncrease') }
          />
          <span>Retirement Spending: </span>
          <span>{ `$${formatMoney(+retireSpending, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 300000 }
            step={ 1000 }
            defaultValue={ 40000 }
            value={ +retireSpending }
            onChange={ handle.changeHandler('RetireSpending') }
          />
        </Col>
        <Col>
          <span>Investment Return:</span>
          <span> { +marketReturn }%</span>
          <Slider
            min={ 0 }
            max={ 20 }
            step={ 1 }
            defaultValue={ 4 }
            value={ +marketReturn }
            onChange={ handle.changeHandler('MarketReturn') }
          />
          <span>Savings Rate:</span>
          <span>{ +savings }%</span>
          <Slider
            min={ 0 }
            max={ 100 }
            step={ 0.5 }
            defaultValue={ 3 }
            value={ +savings }
            onChange={ handle.changeHandler('Savings') }
          />
          <span>Current Savings: </span>
          <span>{ `$${formatMoney(+currentSavings, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1000 }
            defaultValue={ 0 }
            value={ +currentSavings }
            onChange={ handle.changeHandler('CurrentSavings') }
          />
        </Col>
      </div>
    );
  }
}

export default CalculatorForm;
