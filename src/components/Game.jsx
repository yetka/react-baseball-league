import React from 'react';
import PropTypes from 'prop-types';

function Game(props){
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', textAlign: 'center', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', borderColor: 'rgba(1,1,1,1)'}} className="row">
      <div className="col-md-2">
        <h4>{props.team1}</h4>
      </div>
      <div className="col-md-1">
        <h4>{props.team1Score}</h4>
      </div>
      <div className="col-md-2">
        <h4>{props.team2}</h4>
      </div>
      <div className="col-md-1">
        <h4>{props.team2Score}</h4>
      </div>
      <div className="col-md-3">
        <h4>{props.date}</h4>
      </div>
      <div className="col-md-3">
        <h4>{props.field}</h4>
      </div>
    </div>
  );
}

Game.propTypes = {
  team1: PropTypes.string,
  team1Score: PropTypes.number,
  team2: PropTypes.string,
  team2Score: PropTypes.number,
  date: PropTypes.string,
  field: PropTypes.string
};

export default Game;
