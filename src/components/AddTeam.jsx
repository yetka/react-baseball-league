import React from 'react';
import TeamsList from './TeamsList';
import PropTypes from 'prop-types';


function AddTeam(props) {

  return (
    <div>
      <TeamsList teamsList={props.teamsList}/>
    </div>
  );
}

AddTeam.propTypes = {
  teamsList: PropTypes.array
};

export default AddTeam;
