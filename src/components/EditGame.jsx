import React from 'react';
import Schedule from './Schedule';
import PropTypes from 'prop-types';


function EditGame(props){
  return (
    <div>
      <Schedule gamesList={props.gamesList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditGame.propTypes = {
  gamesList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default EditGame;
