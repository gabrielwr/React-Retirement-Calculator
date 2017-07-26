import React from 'react'
import { connect } from 'react-redux';

import store from '../store'
import { addGraphData as addGraph } from '../reducers/graphData'

import Calculator from '../components/Calculator'



const mapStateToProps = state => ({
  graphData: state.graphData
})

const mapDispatchToProps = dispatch => ({
  dispatchGraph: graphData => dispatch(addGraph(graphData))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Calculator );

