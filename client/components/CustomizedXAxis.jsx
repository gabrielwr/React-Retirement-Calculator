import React from 'react'

const CustomizedXAxisTick = ({ x, y, payload, currentAge, retireAge, lifespanAge }) => {
  let test = null

  if(payload.value === currentAge) {
    test = `Current Age ${currentAge}`
  } else if(payload.value === retireAge) {
    test =  `Retirement ${retireAge}`
  } else if ( payload.value === lifespanAge) {
    test = `Age ${lifespanAge}`
  }
  return (
    <g transform={`translate(${x},${y})`}>
        <text
          x={-30} y={20}
          textAnchor="start"
          fill="#666"
          style={{paddingBottom: '100'}}
        >
          { test && test }
        </text>
    </g>
  )
}

export default CustomizedXAxisTick
