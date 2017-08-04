import React from 'react'
import { connect } from 'react-redux';

import store from '../store'
import { addGraphData as addGraph } from '../reducers/graphData'

import Calculator from '../components/Calculator'


//currentAge: state.currentAge,
  // currentSavings: state.currentSavings,
  // finalAmount: state.finalAmount,
  // graphData: state.graphData,
  // lifespan: state.lifespan,
  // marketReturn: state.marketReturn,
  // retireAmt: state.retireAmt,
  // retireSpending: state.retireSpending,
  // salary: state.salary,
  // salaryIncrease: state.salaryIncrease,
  // savings: state.savings

const mapState = state => ({
  ...state
})

const mapDispatch = dispatch => ({
  dispatchGraph: graph => store.dispatch(addGraph( graph ))
})

export default connect(
  mapState,
  mapDispatch
)( Calculator );

