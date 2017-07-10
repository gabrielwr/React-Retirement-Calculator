import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import React from 'react'


export default class DynamicChart extends React.Component {
  constructor(){
    super()
  }

  formatMoney(n, c, d, t){
            c = isNaN(c = Math.abs(c)) ? 2 : c
            d = d == undefined ? "." : d
            t = t == undefined ? "," : t
            let s = n < 0 ? "-" : ""
            let i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)))
            let j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }


  render() {
    const props = this.props.props
    console.log(props)
    return (
      <div id="chartContainer">
        <div id="finalSavings">
            <h3>Savings By Retirement</h3>
            <h3>{`$${this.formatMoney(+props.amtAtRetire, 0, '.', ',')}`}</h3>
            <h3>Savings at end</h3>
            <h3>{`$${this.formatMoney(+props.finalAmount, 0, '.', ',')}`}</h3>
        </div>
          <ResponsiveContainer>
            <AreaChart
                data={props.graphData}
                margin={{top: 5, right: 30, left: 0, bottom: 5}}>
                <XAxis
                  interval={0}
                  dataKey="age"
                />
                <YAxis
                  tickFormatter={(money) => '$' + this.formatMoney(+money, 0, '.', ',')}
                />
                <Area
                  type="monotone"
                  dataKey="1"
                  stackId="1"
                  stroke="#8884d8"
                  fill='#8884d8'
                />
                <Area
                  type='monotone'
                  dataKey='2'
                  stackId="1"
                  stroke='#82ca9d'
                  fill='#82ca9d'
                />
                <Tooltip
                  label={ 'savings' }
                  labelFormatter={(age) => (`Age: ${age}`)}
                  formatter={(money) => (`$${this.formatMoney(+money, 0, '.', ',')}`)}/>
                <CartesianGrid strokeDasharray="1 1" />
            </AreaChart>
          </ResponsiveContainer>
    </div>
    )
  }
}
