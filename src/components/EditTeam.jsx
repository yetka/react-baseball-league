import React from 'react';
import TeamsList from './TeamsList';
import PropTypes from 'prop-types';
import TeamEditForm from './TeamEditForm';

function EditTeam(props){
console.log(props.teamToEditId);
  return (
    <div>
      <TeamEditForm onTeamEdition={props.onTeamEdition}
        teamToEditId={props.teamToEditId}/>
      <TeamsList teamsList={props.teamsList}
        currentRouterPath={props.currentRouterPath}
        onDeleteTeam={props.onDeleteTeam}
        onTeamToEdit={props.onTeamToEdit}/>
    </div>
  );
}

EditTeam.propTypes = {
  teamsList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onDeleteTeam: PropTypes.func,
  onTeamEdition: PropTypes.func,
  teamToEditId: PropTypes.string,
  onTeamToEdit: PropTypes.func
};

export default EditTeam;
