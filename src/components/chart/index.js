import React, { Component } from "react";
import { connect } from "react-redux";
import * as R from "ramda";

import LineChart from "../../elements/line-chart/index";

import { ChartWrapper } from "./styled";

class Chart extends Component {
  render() {
    return (
      <ChartWrapper>
        <LineChart {...this.props} />
      </ChartWrapper>
    );
  }
}

const mapState = (state) => {
  const graphData = R.path(["calculationData", "graphData"])(state);
  const retireAge = R.path(["calculationData", "retireAge"])(state);
  const startingAge = R.path(["calculationData", "startingAge"])(state);

  return {
    graphData,
    retireAge,
    startingAge
  };
};

export default connect(mapState, null)(Chart);
