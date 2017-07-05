import React from 'react'
import Slider from 'material-ui/Slider';

import Chart from './Chart.jsx'


export default class CalculatorForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    //fix this
    const state = this.props.props.state
    const handle = this.props.props.handleChange
    return (
      <div>
        <div className="col-md-3">
          <span>Age:</span>
          <span><h1>{state.currentAge}</h1></span>
          <Slider
            min={ 0 }
            max={ 129 }
            step={ 1 }
            defaultValue={ state.currentAge }
            value={ state.currentAge }
            onChange={ handle.handleCurrentAge }
          />
        </div>
        <div className="col-md-3">
          <span>Retirement Age:</span>
          <span><h1>{state.retirementAge}</h1></span>
          <Slider
            min={ 0 }
            max={ 130 }
            step={ 1 }
            defaultValue={ 65 }
            value={ state.retirementAge }
            onChange={ handle.handleRetirementAge }
          />
        </div>
        <div className="col-md-3">
          <span>Salary:</span>
          <span><h1>{state.salary}</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1 }
            defaultValue={ 50000 }
            value={ state.salary }
            onChange={ handle.handleSalary }
          />
        </div>
        <div className="col-md-3">
          <span>Salary Increase / Year:</span>
          <span><h1>{state.salaryIncrease}</h1></span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 1 }
            defaultValue={ 3 }
            value={ state.salaryIncrease }
            onChange={ handle.handleSalaryIncrease }
          />
        </div>
        <div className="col-md-3">
          <span>Retirement Spending</span>
          <span><h1>{state.retirementSpending }</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 1 }
            defaultValue={ 40000 }
            value={ state.retirementSpending }
            onChange={ handle.handleRetirementSpending }
          />
        </div>
        <div className="col-md-3">
          <span>Investment Return:</span>
          <span><h1>{state.investmentReturnPercent}</h1></span>
          <Slider
            min={ 0 }
            max={ 20 }
            step={ 1 }
            defaultValue={ 4 }
            value={ state.investmentReturnPercent }
            onChange={ handle.handleInvestmentReturn }
          />
        </div>
        <div className="col-md-3">
          <span>Savings Rate:</span>
          <span><h1>{state.savings}</h1></span>
          <Slider
            min={ 0 }
            max={ 10 }
            step={ 0.1 }
            defaultValue={ 3 }
            value={ state.savings }
            onChange={ handle.handleSavings }
          />
        </div>
        <div className="col-md-3">
          <span>Current Savings:</span>
          <span><h1>{state.currentSavings}</h1></span>
          <Slider
            min={ 0 }
            max={ 1000000 }
            step={ 10 }
            defaultValue={ 0 }
            value={ state.currentSavings }
            onChange={ handle.handleCurrentSavings }
          />
        </div>
      <Chart />
      </div>
    )
  }
}


