import React from 'react';
import TeamsList from './TeamsList';
import PropTypes from 'prop-types';

function EditTeam(props){
  
  return (
    <div>
      <TeamsList teamsList={props.teamsList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditTeam.propTypes = {
  teamsList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default EditTeam;
