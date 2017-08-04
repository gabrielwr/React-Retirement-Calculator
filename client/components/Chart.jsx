import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import React from 'react'
import CustomXAxis from './CustomizedXAxis'

import { formatMoney } from '../utils/formatMoney'


export default class DynamicChart extends React.Component {
  constructor(){
    super()
    this.state = {
      formattedData: []
    }
  }

  render() {
    const props = {} = this.props
    const state = props.state
    const newArr = props.graphData
    return (
      <div className="chartContainer">
         <div className="finalSavings">
            <h4>Savings By Retirement</h4>
            <h4>{`$${formatMoney(+state.retireAmt, 0)}`}</h4>
            <h4>Savings at end</h4>
            <h4>{`$${formatMoney(+state.finalAmount, 0)}`}</h4>
        </div>
           <ResponsiveContainer>
            <AreaChart
                data={ newArr }
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis
                  margin={{bottom: 100}}
                  padding={{ top: 20 }}
                  interval={0}
                  tick={ <CustomXAxis {...state}/> }
                  dataKey='age'
                />
                <YAxis
                  tickFormatter={ money => '$' + formatMoney(+money, 0)}
                   dataKey='savings'
                />
                <Area
                  type="monotone"
                  dataKey="savings"
                  stroke='rgb(107,174,214)'
                  fill='rgb(107,174,214)'
                />
                <Tooltip
                  label={ 'savings' }
                  labelFormatter={(age) => (`Age: ${age}`)}
                  formatter={(money) => (`$${formatMoney(+money, 0)}`)}/>
                 {/* <CartesianGrid strokeDasharray="1 1" /> */}
            </AreaChart>
          </ResponsiveContainer>
      </div>
    )
  }
}
