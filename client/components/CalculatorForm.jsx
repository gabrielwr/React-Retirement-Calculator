import React from 'react'
import { Row, Input, Col, Button } from 'react-materialize'




//this probably should just be presentational?
//getting uncontrolled/controlled error here strictly because of
//materialize Input tag... try to figure this out.


//UPDATE! may want to have calculator form be aware and conditionally
//render the # of forms necessary.
//then send that to chart to be aware of how many "areas" to have
export default class CalculatorForm extends React.Component {

  render() {
    const state = this.props.state
    const handle = this.props
    return (
      <Col style={{paddingTop: '20px'}} >
        <Row>
          <Input
            onChange={ handle.handleCurrentAge }
            value={ state.currentAge }
            label="Age"
          />
          <Input
            onChange={ handle.handleRetirementAge }
            value={ state.retireAge }
            label="Retirement Age"
          />
          <Input
            onChange={ handle.handleLifespanAge }
            value={ state.lifespanAge }
            label="Lifespan Age"
          />
        </Row>
        <Row>
          <Input
            onChange={ handle.handleChange }
            value={ state.salary }
            label="Salary (Post-Tax)"
            name='salary'
          />
          <Input
            onChange={ handle.handleChange }
            value={ state.salaryIncrease }
            label="Salary Increase/Year"
            name='salaryIncrease'
          />
          <Input
            onChange={ handle.handleChange }
            value={ state.retireSpending }
            label="Retirement Spending"
            name='retireSpending'
          />
        </Row>
        <Row>
          <Input
            onChange={ handle.handleChange }
            value={ state.marketReturn }
            label="Investment Return"
            name='marketReturn'
          />
          <Input
            onChange={ handle.handleChange }
            value={ state.savings }
            label="Savings Rate"
            name='savings'
          />
          <Input
            onChange={ handle.handleCurrentSavings }
            value={ state.currentSavings }
            label="Current Savings"
          />
          <Button waves='light' onClick={handle.handleSubmit}>submit</Button>
        </Row>
      </Col>
    )
  }
}


