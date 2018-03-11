import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/index.css';

import LineChart from '../../elements/line-chart/index.jsx';
import BarChart from '../../elements/bar-chart/index.jsx';

class Chart extends Component {
  render() {
    console.log('STATE IN CHART', this.props)
    const { finalAmount, graphData, retireAmt } = this.props;
    return (
      <div className="chartContainer">
        <LineChart graphData={graphData}/>
        <BarChart finalAmount={finalAmount} retireAmt={retireAmt}/>
      </div>
    );
  }
}

const mapState = state => ({
  ...state
});

export default connect(mapState, null)(Chart);
