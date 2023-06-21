import React from "react";

function CurvedText({ text }) {
  return (
    <svg viewBox="0 0 200 200">
      <g>
        <path
          id="curve2"
          className="outer"
          fill="transparent"
          d="M 100, 100
		   m -75, 0
		   a 75,75 0 1,1 150,0
		   a 75,75 0 1,1 -150,0"
        />
        <text width="500" fontSize="14">
          <textPath xlinkHref="#curve2" startOffset="20%">{text}</textPath>
        </text>
      </g>
    </svg>
  );
}

export default CurvedText;
