import React from 'react';
import PlayersList from './PlayersList';
import PlayerForm from './PlayerForm';
import PropTypes from 'prop-types';

function AddPlayer(props) {

  return (
    <div>
      <PlayerForm />
      <PlayersList playersList={props.playersList} />
    </div>
  );
}

AddPlayer.propTypes = {
  playersList: PropTypes.array
};

export default AddPlayer;
