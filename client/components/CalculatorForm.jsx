import React from 'react'




export default class CalculatorForm extends React.Component {
  constructor() {
    super()
  }

  render() {
    const state = this.props.props.state
    const handle = this.props.props.handleChange
    return (
      <div className={`col-md-${ 12 / state.numScenarios.length }`}>
        <div>
          <span>Age:</span>
          <input
            onChange={ handle.handleCurrentAge }
            value={ state.currentAge }
          />
        </div>
        <div>
          <span>Retirement Age:</span>
          <input
            onChange={ handle.handleRetirementAge }
            value={ state.retirementAge }
          />
        </div>
        <div>
          <span>Lifespan Age:</span>
          <input
            onChange={ handle.handleLifespanAge }
            value={ state.lifespanAge }
          />
        </div>
        <div>
          <span>Salary:</span>
          <input
            onChange={ handle.handleSalary }
            value={ state.salary }
          />
        </div>
        <div>
          <span>Salary Increase / Year:</span>
          <input
            onChange={ handle.handleSalaryIncrease }
            value={ state.salaryIncrease }
          />
        </div>
        <div>
          <span>Retirement Spending</span>
          <input
            onChange={ handle.handleRetirementSpending }
            value={ state.retirementSpending }
          />
        </div>
        <div>
          <span>Investment Return:</span>
          <input
            onChange={ handle.handleInvestmentReturn }
            value={ state.marketReturn }
          />
        </div>
        <div>
          <span>Savings Rate:</span>
          <input
            onChange={ handle.handleSavings }
            value={ state.savings }
          />
        </div>
        <div>
          <span>Current Savings:</span>
          <input
            onChange={ handle.handleCurrentSavings }
            value={ state.currentSavings }
          />
        </div>
        {/*<div> { state.amtAtRetire }</div>*/}

      </div>
    )
  }
}


