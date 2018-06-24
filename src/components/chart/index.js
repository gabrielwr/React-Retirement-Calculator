import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../index.css';

import LineChart from '../../elements/line-chart/index';
import BarChart from '../../elements/bar-chart/index';

class Chart extends Component {
  render() {
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
