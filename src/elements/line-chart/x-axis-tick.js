import React from "react";

const CustomizedXAxisTick = ({ x, y, payload, startingAge, retireAge }) => {
  let xAxisMarker = null;

  if (payload.value === startingAge) {
    xAxisMarker = `Today`;
  } else if (payload.value === retireAge) {
    xAxisMarker = `Retirement`;
  }

  if (!xAxisMarker) return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-30} y={20} textAnchor="start" fill="#666">
        {xAxisMarker}
      </text>
    </g>
  );
};

export default CustomizedXAxisTick;
