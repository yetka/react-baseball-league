import React from 'react';
import PlayersList from './PlayersList';
import PropTypes from 'prop-types';


function EditPlayer(props){
  return (
    <div>
      <PlayersList playersList={props.playersList}
        currentRouterPath={props.currentRouterPath}onDeletePlayer={props.onDeletePlayer}/>
    </div>
  );
}

EditPlayer.propTypes = {
  playersList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDeletePlayer: PropTypes.func
};

export default EditPlayer;
