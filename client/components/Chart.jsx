import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import React from 'react'


export default class DynamicChart extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  formatMoney() {
    //fill in here
  }

  render() {
    return (
      <div id="chartContainer">
        <div id="finalSavings">
            <h1>Savings By Retirement</h1><br />
        </div>
        <ResponsiveContainer >
            <LineChart
                data={this.state.data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="Age" tickFormatter={(date) => date.slice(2).split('-').join(' ')} />
                <YAxis tickFormatter={(num) => '$' + this.formatMoney(num, 0, '.', ',')} />

                <Tooltip labelFormatter={(date) => date.slice(2).split('-').join(' ')} formatter={(num) => '$' + this.formatMoney(num, 0, '.', ',')} />
                <Line isAnimationActive={false} type="monotone" dataKey="saved" stroke="#8884d8" activeDot={{r: 8}} />
                {/*<CartesianGrid strokeDasharray="1 1" />  <-- add this back to get a grid system*/}
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
  }
}
