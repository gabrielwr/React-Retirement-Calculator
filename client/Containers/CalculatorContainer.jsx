import React, { Component } from 'react'
import { connect } from 'react-redux';

//action creators
import { addScenario, deleteScenario } from '../reducers/calcScenarios';
import store from '../store'

//components
import Calculator from '../components/Calculator';
import AddScenario from '../components/AddScenario';
import Chart from '../components/Chart.jsx'

class CalculatorContainer extends React.Component {

  constructor() {
    super()

    this.handleAddScenario = this.handleAddScenario.bind(this)
  }

  handleAddScenario() {
    const num = this.props.numScenarios.scenarios
    if(num >= 3) {
      console.log('can only have 3 scenarios')
      return
    }
    //dispatch to store
    store.dispatch(addScenario(this.props.numScenarios.scenarios))
  }

  render(){
    const calculators = [];
    for(let i = 0; i < this.props.numScenarios.scenarios; i++) {
      calculators.push( <Calculator key={ i } props={ this.props }/> )
    }

    return (
      <div>
        <Chart props={ this.props }/>
        { calculators }
        <AddScenario
          num={ this.props.numScenarios.scenarios }
          handle={ this.handleAddScenario }
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  numScenarios: state.numScenarios,
  graphData: state.graphData
})



export default connect(
  mapStateToProps,
  null
)( CalculatorContainer );


