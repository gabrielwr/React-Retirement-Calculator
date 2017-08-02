import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import React from 'react'
import CustomXAxis from './CustomizedXAxis'


export default class DynamicChart extends React.Component {
  constructor(){
    super()
    this.state = {
      formattedData: []
    }
  }

  //update this
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
    const props = {} = this.props
    const state = props.state
    const newArr = props.graphData
    return (
      <div className="chartContainer">
         <div className="finalSavings">
            <h4>Savings By Retirement</h4>
            <h4>{`$${this.formatMoney(+state.amtAtRetire, 0, '.', ',')}`}</h4>
            <h4>Savings at end</h4>
            <h4>{`$${this.formatMoney(+state.finalAmount, 0, '.', ',')}`}</h4>
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
                  tickFormatter={ money => '$' + this.formatMoney(+money, 0, '.', ',')}
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
                  formatter={(money) => (`$${this.formatMoney(+money, 0, '.', ',')}`)}/>
                 {/* <CartesianGrid strokeDasharray="1 1" /> */}
            </AreaChart>
          </ResponsiveContainer>
      </div>
    )
  }
}
