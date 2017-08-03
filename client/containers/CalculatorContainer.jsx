import React from 'react'
import { connect } from 'react-redux';

import store from '../store'
import { addGraphData as addGraph } from '../reducers/graphData'

import Calculator from '../components/Calculator'

const mapState = state => ({
  graphData: state.graphData
})

const mapDispatch = dispatch => ({
  dispatchGraph: graph => store.dispatch(addGraph( graph ))
})

export default connect(
  mapState,
  mapDispatch
)( Calculator );

