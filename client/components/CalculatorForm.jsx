import React from 'react'
import Slider from 'material-ui/Slider';

import { Row, Col } from 'react-materialize'


export default class CalculatorForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    console.log('props', this.props)
    const props = {} = this.props
    const state = props.state
    const handle = props.handleChange
    console.log('handle is', handle)
    return (
      <Col>
        <Row>
          <span>Age:</span>
          <span><h1>{ +state.currentAge }</h1></span>
          <Slider
            min={ 0 }
            max={ 129 }
            step={ 1 }
            defaultValue={ +state.currentAge }
            value={ +state.currentAge }
            onChange={ handle.handleCurrentAge }
          />
        </Row>
        <Row>
          <span>Retirement Age:</span>
          <span><h1>{ +state.retirementAge }</h1></span>
          <Slider
            min={ 0 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 65 }
            value={ +state.retirementAge }
            onChange={ handle.handleRetirementAge }
          />
        </Row>
        <Row>
          <span>Lifespan Age:</span>
          <span><h1>{ +state.lifespanAge }</h1></span>
          <Slider
            min={ 0 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 90 }
            value={ +state.lifespanAge }
            onChange={ handle.handleLifespanAge }
          />
        </Row>
        <Row>
          <span>Salary:</span>
          <span><h1>{ +state.salary }</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1 }
            defaultValue={ 50000 }
            value={ +state.salary }
            onChange={ handle.handleSalary }
          />
        </Row>
        <Row>
          <span>Salary Increase / Year:</span>
          <span><h1>{ +state.salaryIncrease }</h1></span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 1 }
            defaultValue={ 3 }
            value={ +state.salaryIncrease }
            onChange={ handle.handleSalaryIncrease }
          />
        </Row>
        <Row>
          <span>Retirement Spending</span>
          <span><h1>{ +state.retirementSpending }</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1 }
            defaultValue={ 40000 }
            value={ +state.retirementSpending }
            onChange={ handle.handleRetirementSpending }
          />
        </Row>
        <Row>
          <span>Investment Return:</span>
          <span><h1>{ +state.investmentReturnPercent }</h1></span>
          <Slider
            min={ 0 }
            max={ 20 }
            step={ 1 }
            defaultValue={ 4 }
            value={ +state.investmentReturnPercent }
            onChange={ handle.handleInvestmentReturn }
          />
        </Row>
        <Row>
          <span>Savings Rate:</span>
          <span><h1>{ +state.savings }</h1></span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 0.1 }
            defaultValue={ 3 }
            value={ +state.savings }
            onChange={ handle.handleSavings }
          />
        </Row>
        <Row>
          <span>Current Savings:</span>
          <span><h1>{ +state.currentSavings }</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 10 }
            defaultValue={ 0 }
            value={ +state.currentSavings }
            onChange={ handle.handleCurrentSavings }
          />
        </Row>
      </Col>
    )
  }
}


