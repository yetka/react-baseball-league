import React from 'react';
import PlayersList from './PlayersList';
import PropTypes from 'prop-types';

function AddPlayer(props) {

  return (
    <div>
      <PlayersList playersList={props.playersList} />
    </div>
  );
}

AddPlayer.propTypes = {
  playersList: PropTypes.array
};

export default AddPlayer;
