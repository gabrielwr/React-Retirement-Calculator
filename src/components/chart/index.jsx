import React, { Component } from 'react';
import { ResponsiveContainer } from 'recharts';

import '../../css/index.css';

import BarChart from '../../elements/bar-chart';
import LineChart from '../../elements/line-chart';

class Chart extends Component {
  render() {
    return (
      <div className="chartContainer">
        <ResponsiveContainer width={'75%'} height={'90%'}>
          <LineChart />
          <BarChart />
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Chart;
