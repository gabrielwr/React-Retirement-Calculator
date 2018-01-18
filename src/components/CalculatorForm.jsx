import React from 'react'
import Slider from 'material-ui/Slider';

import { Col } from 'react-materialize'
import { formatMoney } from '../utils/formatMoney'

class CalculatorForm extends React.Component {
  render() {
    const props = {} = this.props
    const state = props.state
    const handle = props.handleChange
    return (
      <div className="formContainer">
        <Col>
          <span>Age: </span>
          <span>{ +state.currentAge }</span>
          <Slider
            min={ 0 }
            max={ 129 }
            step={ 1 }
            defaultValue={ +state.currentAge }
            value={ +state.currentAge }
            onChange={ handle.handleCurrentAge }
          />
          <span>Retirement Age: </span>
          <span>{ +state.retireAge }</span>
          <Slider
            min={ 1 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 65 }
            value={ +state.retireAge }
            onChange={ handle.handleRetirementAge }
          />
          <span>Lifespan Age: </span>
          <span>{ +state.lifespan }</span>
          <Slider
            min={ 1 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 90 }
            value={ +state.lifespan }
            onChange={ handle.handleLifespanAge }
          />
        </Col>
        <Col>
          <span>Salary: </span>
          <span>{ `$${formatMoney(+state.salary, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 300000 }
            step={ 1000 }
            defaultValue={ 50000 }
            value={ +state.salary }
            onChange={ handle.changeHandler('Salary') }
          />
           <span>Salary Increase / Year:</span>
          <span> { +state.salaryIncrease }%</span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 1 }
            defaultValue={ 3 }
            value={ +state.salaryIncrease }
            onChange={ handle.changeHandler('SalaryIncrease') }
          />
          <span>Retirement Spending: </span>
          <span>{ `$${formatMoney(+state.retireSpending, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 300000 }
            step={ 1000 }
            defaultValue={ 40000 }
            value={ +state.retireSpending }
            onChange={ handle.changeHandler('RetireSpending') }
          />
        </Col>
        <Col>
          <span>Investment Return:</span>
          <span> { +state.marketReturn }%</span>
          <Slider
            min={ 0 }
            max={ 20 }
            step={ 1 }
            defaultValue={ 4 }
            value={ +state.marketReturn }
            onChange={ handle.changeHandler('MarketReturn') }
          />
          <span>Savings Rate:</span>
          <span> { +state.savings }%</span>
          <Slider
            min={ 0 }
            max={ 100 }
            step={ 0.5 }
            defaultValue={ 3 }
            value={ +state.savings }
            onChange={ handle.changeHandler('Savings') }
          />
          <span>Current Savings: </span>
          <span>{ `$${formatMoney(+state.currentSavings, 0)}` }</span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1000 }
            defaultValue={ 0 }
            value={ +state.currentSavings }
            onChange={ handle.changeHandler('CurrentSavings') }
          />
        </Col>
      </div>
    )
  }
}

export default CalculatorForm
