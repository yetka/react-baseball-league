import React from 'react';
import PropTypes from 'prop-types';

function Game(props){
  function handleDeleteGameWhenClicked() {
    props.onDeleteGame(props.id);
  }

  const gameInformation =
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', textAlign: 'center', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', borderColor: 'rgba(1,1,1,1)'}} className="row">
      <div className="col-md-2">
        <h5>{props.team1}</h5>
      </div>
      <div className="col-md-1">
        <h5>{props.team1Score}</h5>
      </div>
      <div className="col-md-2">
        <h5>{props.team2}</h5>
      </div>
      <div className="col-md-1">
        <h5>{props.team2Score}</h5>
      </div>
      <div className="col-md-3">
        <h5>{props.date}</h5>
      </div>
      <div className="col-md-3">
        <h5>{props.field}</h5>
      </div>
    </div>;

  if (props.currentRouterPath === '/admin/edit-game'){
    return (
      <div>
        <div>
          {gameInformation}
        </div>
        <div>
          <button type="button" className="btn btn-warning">Edit</button>
          <button onClick={() => {handleDeleteGameWhenClicked();}} type="button" className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {gameInformation}
      </div>
    );
  }
}

Game.propTypes = {
  team1: PropTypes.string,
  team1Score: PropTypes.number,
  team2: PropTypes.string,
  team2Score: PropTypes.number,
  date: PropTypes.string,
  field: PropTypes.string,
  onDeleteGame: PropTypes.func
};

export default Game;
