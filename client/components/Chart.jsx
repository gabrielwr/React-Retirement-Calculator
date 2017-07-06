import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
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
    const props = this.props.props
    return (
      <div id="chartContainer">
        <div id="finalSavings">
            <h3>Savings By Retirement</h3>
            <h3>{props.amtAtRetire}</h3>
            <h3>Savings at end</h3>
            <h3>{props.finalAmount}</h3>
        </div>
          <ResponsiveContainer
                width={500}
                height={500}
          >
            <AreaChart
                data={props.graphData}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis dataKey="age"/>
                <YAxis dataKey="savingsAtEnd"/>
                <Area type="monotone" dataKey="savingsAtEnd" stroke="#8884d8" fill='#8884d8' />
                <Tooltip />
                <CartesianGrid strokeDasharray="1 1" />
            </AreaChart>
          </ResponsiveContainer>
    </div>
    )
  }
}
