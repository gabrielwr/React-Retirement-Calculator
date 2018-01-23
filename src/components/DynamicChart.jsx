import React, { Component } from 'react';
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar, Legend, Tooltip } from 'recharts'

import { formatMoney } from '../utils/formatMoney'

class DynamicChart extends Component {
  render() {
    const barArr = [{
      retireAmt: +this.props.retireAmt,
      endAmt: +this.props.finalAmount
    }]

    return (
      <ResponsiveContainer width={ '15%' } height={ '90%' }>
        <BarChart
          barCategoryGap={ '10%' }
          data={ barArr }
          margin={{ top: 5, right: 30, left: 20, bottom: 0 }}
        >
        <XAxis dataKey="name"/>
        <YAxis
            tickFormatter={ money => '$' + formatMoney( +money, 0 ) }
        />
        <Tooltip
          labelFormatter={ amt => (`Retire Amount ${amt}`) }
          formatter={ finalAmt => (`$${formatMoney( +finalAmt, 0 )}`) }
        />
        <Legend

          wrapperStyle={{
            bottom: 0,
            right: 0,
            backgroundColor: '#f5f5f5',
            border: '1px solid #d5d5d5',
            borderRadius: 3,
            lineHeight: '40px'
          }}
        />
        <Bar dataKey="retireAmt" fill="#7FDBFF" />
        <Bar dataKey="endAmt" fill="#39CCCC" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

export default DynamicChart;
