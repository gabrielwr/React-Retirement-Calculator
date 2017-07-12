import React from 'react'
import { Row, Input } from 'react-materialize'


//this probably should just be presentational?
//getting uncontrolled/controlled error here strictly because of
//materialize Input tag... try to figure this out.


//UPDATE! may want to have calculator form be aware and conditionally
//render the # of forms necessary.
//then send that to chart to be aware of how many "areas" to have
export default class CalculatorForm extends React.Component {

  render() {
    const state = this.props.props.state
    const handle = this.props.props.handleChange
    console.log('state check:', state)
    console.log('handle check:', handle)
    return (
      <div className={`col-md-${ 12 / state.numScenarios }`}>
        <Row>
          <div>
            <Input
              onChange={ handle.handleCurrentAge }
              value={ state.currentAge }
              label="Age"
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleRetirementAge }
              value={ state.retireAge }
              label="Retirement Age"
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleLifespanAge }
              value={ state.lifespanAge }
              label="Lifespan Age"
            />
          </div>
        </Row>
        <Row>
          <div>
            <Input
              onChange={ handle.handleChange }
              value={ state.salary }
              label="Salary"
              name='salary'
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleChange }
              value={ state.salaryIncrease }
              label="Salary Increase/Year"
              name='salaryIncrease'
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleChange }
              value={ state.retireSpending }
              label="Retirement Spending"
              name='retireSpending'
            />
          </div>
        </Row>
        <Row>
          <div>
            <Input
              onChange={ handle.handleChange }
              value={ state.marketReturn }
              label="Investment Return"
              name='marketReturn'
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleChange }
              value={ state.savings }
              label="Savings Rate"
              name='savings'
            />
          </div>
          <div>
            <Input
              onChange={ handle.handleCurrentSavings }
              value={ state.currentSavings }
              label="Current Savings"
            />
          </div>
          {/*<div> { state.amtAtRetire }</div>*/}
        </Row>
      </div>
    )
  }
}


