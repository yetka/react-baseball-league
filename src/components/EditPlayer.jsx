import React from 'react';
import PlayersList from './PlayersList';
import PropTypes from 'prop-types';


function EditPlayer(props){
  return (
    <div>
      <PlayersList playersList={props.playersList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditPlayer.propTypes = {
  playersList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default EditPlayer;
