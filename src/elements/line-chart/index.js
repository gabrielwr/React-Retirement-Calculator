import React, { Component } from 'react';
import XAxisTick from './x-axis-tick';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

import { formatMoney } from '../../utils/formatMoney';

class LineChart extends Component {
  render() {
    const newArr = this.props.graphData;
    return (
      <ResponsiveContainer width={'75%'} height={'90%'}>
        <AreaChart
          data={ newArr }
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            margin={{ bottom: 100 }}
            padding={{ top: 20 }}
            interval={ 0 }
            tick={ <XAxisTick {...this.props}/> }
            dataKey='age'
          />
          <YAxis
            tickFormatter={ money => '$' + formatMoney(+money, 0)}
            dataKey='savings'
          />
          <Area
            type="monotone"
            dataKey="savings"
            stroke='#0074D9'
            fill='#0074D9'
          />
          <Tooltip
            label={ 'savings' }
            labelFormatter={(age) => (`Age: ${age}`)}
            formatter={(money) => (`$${formatMoney(+money, 0)}`)}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default LineChart;
