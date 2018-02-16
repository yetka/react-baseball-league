import React from 'react';
import TeamsList from './TeamsList';
import TeamForm from './TeamForm';
import PropTypes from 'prop-types';

function AddTeam(props) {

  return (
    <div>
      <TeamForm onNewTeamCreation={props.onNewTeamCreation}/>
      <TeamsList teamsList={props.teamsList} />
    </div>
  );
}

AddTeam.propTypes = {
  teamsList: PropTypes.array,
  onNewTeamCreation: PropTypes.func
};

export default AddTeam;
