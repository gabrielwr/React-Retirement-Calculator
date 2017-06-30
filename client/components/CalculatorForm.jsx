import React from 'react'
import Slider from 'material-ui/Slider';


const CalculatorForm = ({ props }) => (
  <div>
    {console.log(props)}
    <div id="current_age">
      <h1>Age: {props.state.currentAge}</h1>
      <Slider
        min={ 0 }
        max={ 130 }
        step={ 1 }
        defaultValue={ 25 }
        value={ props.state.currentAge }
        onChange={ props.handleCurrentAge }
      />
    </div>
    <div id="retirement_age">
      <h1>Retirement Age: {props.state.retirementAge}</h1>
      <Slider
        min={ 0 }
        max={ 130 }
        step={ 1 }
        defaultValue={ 65 }
        value={ props.state.retirementAge }
        onChange={ props.handleRetirementAge }
      />
    </div>
    <div id="salary">
      <h1>Salary: {props.state.salary}</h1>
      <Slider
        min={ 0 }
        max={ 1000000 }
        step={ 1 }
        defaultValue={ 50000 }
        value={ props.state.salary }
        onChange={ props.handleCurrentAge }
      />
    </div>
  </div>
)


export default CalculatorForm;
