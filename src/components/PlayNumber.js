import React from "react";
import utils from "../MathUtils";

const PlayNumber = props => (
	<button className="number"
    style = {{ backgroundColor: colors[props.status]}}
    onClick={() => props.onClick('Num', props.number)}
    
    >
    {props.number}
  </button>
);

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
  };

export default PlayNumber;