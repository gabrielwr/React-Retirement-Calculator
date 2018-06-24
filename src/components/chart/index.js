import React, { Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../../elements/line-chart/index';
import BarChart from '../../elements/bar-chart/index';

import { ChartWrapper } from './styled';

class Chart extends Component {
  render() {
    const { finalAmount, graphData, retireAmt } = this.props;
    return (
      <ChartWrapper>
        <LineChart graphData={graphData}/>
        <BarChart finalAmount={finalAmount} retireAmt={retireAmt}/>
      </ChartWrapper>
    );
  }
}

const mapState = state => ({
  ...state
});

export default connect(mapState, null)(Chart);
