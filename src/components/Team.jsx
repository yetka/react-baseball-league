import React from 'react';
import PropTypes from 'prop-types';
import BaseballSymbol from '../assets/images/symbol.jpg';

function Team(props){
  function handleDeleteTeamWhenClicked() {
    props.onDeleteTeam(props.id);
  }

  function handleTeamToEdit() {
    props.onTeamToEdit(props.id);
  }

  const teamInformation =
    <div>
      <div className="row">
        <div className="col-md-4">
          <img style={{width: '90px'}} src={BaseballSymbol} alt="symbol"></img>
        </div>
        <div className="col-md-8">
          <br></br>
          <h3>{props.name}</h3>
        </div>
      </div>
      <br></br>
      <div>
        <h5>Manager: {props.manager}</h5>
        <h5>Players: </h5>
        <ul>
          {props.players.map((player, i) =>
            <li>{player}</li>
          )}
        </ul>
      </div>
    </div>;

  if (props.currentRouterPath === '/admin/edit-team'){
    return (
      <div style={{padding: '50px'}} className="col-md-4">
        {teamInformation}
        <button onClick={() => {handleTeamToEdit();}} type="button" className="btn btn-warning">Edit</button>
        <button onClick={() => {handleDeleteTeamWhenClicked();}} type="button" className="btn btn-danger">Delete</button>
      </div>
    );
  } else {
    return (
      <div style={{padding: '50px'}} className="col-md-4">
        {teamInformation}
      </div>
    );
  }
}

Team.propTypes = {
  name: PropTypes.string,
  manager: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.string),
  currentRouterPath: PropTypes.string,
  onDeleteTeam: PropTypes.func,
  onTeamToEdit: PropTypes.func
};

export default Team;
