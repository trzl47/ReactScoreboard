import React, { PropTypes } from 'react';

function Counter(props) {
 return (
   <div className="counter" >
     <button
			 className="counter-action decrement"
			 onClick={ () => props.updateScore(props.index, -1)}>
       -
     </button>
     <div className="counter-score"> {props.score} </div>
     <button
			 className="counter-action increment"
			 onClick={ () => props.updateScore(props.index, 1)}>
       +
     </button>
   </div>
 );
}

Counter.propTypes = {
  updateScore: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Counter;
