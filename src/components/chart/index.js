import React, { Component } from 'react';
import { connect } from 'react-redux';

import LineChart from '../../elements/line-chart/index';

import { ChartWrapper } from './styled';

class Chart extends Component {
  render() {
    const { graphData } = this.props;
    return (
      <ChartWrapper>
        <LineChart graphData={graphData}/>
      </ChartWrapper>
    );
  }
}

const mapState = state => ({
  ...state
});

export default connect(mapState, null)(Chart);
