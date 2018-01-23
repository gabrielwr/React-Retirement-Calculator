
import { connect } from 'react-redux';

import Chart from '../components/Chart';

const mapState = state => ({
  ...state
});

export default connect(mapState, null)( Chart );
