import { connect } from 'react-redux';

/* ------------       REDUCERS    ------------------ */
import { addCurrentAge } from '../reducers/currentAge';
import { addCurrentSavings } from '../reducers/currentSavings';
import { addFinalAmt } from '../reducers/finalAmt';
import { addGraphData as addGraph } from '../reducers/graphData';
import { addLifespan } from '../reducers/lifespan';
import { addMarketReturn } from '../reducers/marketReturn';
import { addRetireAge } from '../reducers/retireAge';
import { addRetireAmt } from '../reducers/retireAmt';
import { addRetireSpending } from '../reducers/retireSpending';
import { addSalary } from '../reducers/salary';
import { addSalaryIncrease} from '../reducers/salaryIncrease';
import { addSavings } from '../reducers/savings';

/* ------------       COMPONENT    ------------------ */
import Calculator from '../components/Calculator';

const mapState = state => ({
  //destructure state object
  ...state
});

const mapDispatch = {
  addCurrentAge,
  addCurrentSavings,
  addFinalAmt,
  addGraph,
  addLifespan,
  addMarketReturn,
  addRetireAge,
  addRetireAmt,
  addRetireSpending,
  addSalary,
  addSalaryIncrease,
  addSavings
};

export default connect(mapState, mapDispatch)( Calculator );

