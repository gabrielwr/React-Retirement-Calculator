import React from 'react'
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar, Legend, Tooltip } from 'recharts'

import { formatMoney } from '../utils/formatMoney'

export default class DynamicChart extends React.Component {
  constructor(){
    super()
  }

  render() {
    const barArr = [{
      retireAmt: +this.props.retireAmt,
      endAmt: +this.props.finalAmount
    }]

    console.log('barArr test', barArr)
    return (
      <ResponsiveContainer width={'15%'} height={'90%'}>
        <BarChart
          data={ barArr }
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis
            tickFormatter={ money => '$' + formatMoney(+money, 0)}
        />
        {/* <CartesianGrid strokeDasharray="3 3"/> */}
        <Tooltip
          labelFormatter={(amt) => (`Retire Amount ${amt}`)}
          formatter={(finalAmt) => (`$${formatMoney(+finalAmt, 0)}`)}
        />
        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
        <Bar dataKey="retireAmt" fill="#7FDBFF" />
        <Bar dataKey="endAmt" fill="#39CCCC" />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

// BarChart style

