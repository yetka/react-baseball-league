import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';

function AddGame(props) {

  return (
    <div>
      <Schedule gamesList={props.gamesList}/>
    </div>
  );
}

AddGame.propTypes = {
  gamesList: PropTypes.array
};

export default AddGame;
