import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import React from 'react'


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
    const dataArr = props.props.graphData.graphData
    // console.log('props in chart', props.props.graphData.graphData)
    let longest;
    let newArr = [];

    console.log('dataarr is:', dataArr)

    if(dataArr.length === 1) {
      newArr = dataArr[0]
    } else if(dataArr.length === 2){
      longest = Math.max(dataArr[0].length, dataArr[1].length)
      for(let i = 0; i < longest; i++) {
        newArr.push(Object.assign({1: 0, 2: 0}, dataArr[0][i], dataArr[1][i]))
      }
    } else if (dataArr.length === 3) {
      longest = Math.max(dataArr[0].length, dataArr[1].length, dataArr[2].length)
      for(let i = 0; i < longest; i++) {
        newArr.push(Object.assign({1: 0, 2: 0, 3: 0}, dataArr[0][i], dataArr[1][i], dataArr[2][i] ))
      }
    }



    // console.log('newarr is:', newArr)

    return (
      <div id="chartContainer">
        {/* <div id="finalSavings">
            <h4>Savings By Retirement</h4>
            <h4>{`$${this.formatMoney(+props.amtAtRetire, 0, '.', ',')}`}</h4>
            <h4>Savings at end</h4>
            <h4>{`$${this.formatMoney(+props.finalAmount, 0, '.', ',')}`}</h4>
        </div> */}
           <ResponsiveContainer>
            <AreaChart
                data={ newArr }
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <XAxis
                  interval={0}
                  dataKey='age'
                />
                <YAxis
                  tickFormatter={money => '$' + this.formatMoney(+money, 0, '.', ',')}
                   dataKey='1'
                />
                <Area
                  type='monotone'
                  dataKey="1"
                  stroke='#77C9D4'
                  fill='#77C9D4'
                />
                <Area
                  type='monotone'
                  dataKey='2'
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
