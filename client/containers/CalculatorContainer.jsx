import React from 'react'
import { connect } from 'react-redux';

import store from '../store'

/* ------------       REDUCERS    ------------------ */
import { addCurrentAge } from '../reducers/currentAge'
import { addCurrentSavings } from '../reducers/currentSavings'
import { addFinalAmt } from '../reducers/finalAmt'
import { addGraphData as addGraph } from '../reducers/graphData'
import { addLifespan } from '../reducers/lifespan'
import { addMarketReturn } from '../reducers/marketReturn'
import { addRetireAmt } from '../reducers/retireAmt'
import { addRetireSpending } from '../reducers/retireSpending'
import { addSalary } from '../reducers/salary'
import { addSalaryIncrease} from '../reducers/salaryIncrease'
import { addSavings } from '../reducers/savings'



import Calculator from '../components/Calculator'


const mapState = state => ({
  //destructure state object
  ...state
})

const mapDispatch = {
  addCurrentAge,
  addCurrentSavings,
  addFinalAmt,
  addGraph,
  addLifespan,
  addMarketReturn,
  addRetireAmt,
  addRetireSpending,
  addSalary,
  addSalaryIncrease,
  addSavings
}

export default connect(
  mapState,
  mapDispatch
)( Calculator );

