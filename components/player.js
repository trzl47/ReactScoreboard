import React, { PropTypes } from 'react';
import Counter from './counter.js';

const Player = (props) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={ () => props.removePlayer(props.index) }>✖</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter
					index={props.index}
					updateScore={props.updateScore}
					score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
	removePlayer: PropTypes.func.isRequired,
	updateScore: PropTypes.func.isRequired,
};

export default Player;
