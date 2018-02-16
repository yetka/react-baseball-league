import React from 'react';
import Schedule from './Schedule';
import GameForm from './GameForm';
import PropTypes from 'prop-types';

function AddGame(props) {

  return (
    <div>
      <GameForm />
      <Schedule gamesList={props.gamesList}/>
    </div>
  );
}

AddGame.propTypes = {
  gamesList: PropTypes.array
};

export default AddGame;
