import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';


function EditGame(props){
  return (
    <div>
      <Schedule gamesList={props.gamesList}
        currentRouterPath={props.currentRouterPath} onDeleteGame={props.onDeleteGame}/>
    </div>
  );
}

EditGame.propTypes = {
  gamesList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDeleteGame: PropTypes.func
};

export default EditGame;
