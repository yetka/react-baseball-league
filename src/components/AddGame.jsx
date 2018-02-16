import React from 'react';
import Schedule from './Schedule';
import GameForm from './GameForm';
import PropTypes from 'prop-types';

function AddGame(props) {

  return (
    <div>
      <GameForm onNewGameCreation={props.onNewGameCreation}/>
      <br></br>
      <Schedule gamesList={props.gamesList}/>
    </div>
  );
}

AddGame.propTypes = {
  gamesList: PropTypes.array,
  onNewGameCreation: PropTypes.func
};

export default AddGame;
