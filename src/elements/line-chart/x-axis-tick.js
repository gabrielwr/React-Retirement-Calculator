import React from 'react';

const CustomizedXAxisTick = ({ x, y, payload, currentAge, retireAge, lifespan }) => {

  let xAxisMarker = null;

  if( payload.value === currentAge ) {
    xAxisMarker = `Current Age ${currentAge}`;
  } else if( payload.value === retireAge ) {
    xAxisMarker =  `Retirement ${retireAge}`;
  } else if ( payload.value === lifespan ) {
    xAxisMarker = `Age ${lifespan}`;
  }

  return (
    <g transform={`translate(${x},${y})`}>
        <text
          x={ -30 } y={ 20 }
          textAnchor="start"
          fill="#666"
        >
          { xAxisMarker && xAxisMarker }
        </text>
    </g>
  );
}

export default CustomizedXAxisTick;
