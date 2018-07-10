import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as R from 'ramda';

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

const mapState = (state) => {
  const graphData = R.path(['calculationData', 'graphData'])(state);

  return {
    graphData
  };
};

export default connect(mapState, null)(Chart);
