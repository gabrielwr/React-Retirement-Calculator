import React, { Component } from "react";
import XAxisTick from "./x-axis-tick";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import { GRAPH_AREA_PURPLE, LINE_DEEP_PURPLE } from "../styled";

import { formatMoney } from "../../utils/formatMoney";

class LineChart extends Component {
  render() {
    const { graphData } = this.props;
    return (
      <ResponsiveContainer width={"65%"} height={"90%"}>
        <AreaChart
          data={graphData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis
            margin={{ bottom: 100 }}
            padding={{ top: 20 }}
            interval={0}
            tick={<XAxisTick {...this.props} />}
            dataKey="age"
          />
          <YAxis
            tickFormatter={(money) => "$" + formatMoney(+money, 0)}
            dataKey="savings"
          />
          <Area
            type="monotone"
            dataKey="savings"
            stroke={LINE_DEEP_PURPLE}
            fill={GRAPH_AREA_PURPLE}
          />
          <Tooltip
            label={"savings"}
            labelFormatter={(age) => `Age: ${age}`}
            formatter={(money) => `$${formatMoney(+money, 0)}`}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default LineChart;
