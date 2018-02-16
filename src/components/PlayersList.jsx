import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';


function PlayersList(props){
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px'}}>
      <div className="row">
        {props.playersList.map((player, i) =>
          <Player
            name={player.name}
            age={player.age}
            position={player.position}
            team={player.team}
            jerseyNumber={player.jerseyNumber}
            key={i}/>
        )}
      </div>
    </div>
  );
}

PlayersList.propTypes = {
  playersList: PropTypes.array
};

export default PlayersList;
