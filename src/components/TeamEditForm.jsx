import React from 'react';
import PropTypes from 'prop-types';

function TeamEditForm(props) {

  let _name = null;
  let _manager = null;
  let _players = null;


  function handleTeamEditFormSubmission(event) {
    event.preventDefault();
    let id = props.teamToEditId;
    console.log(props.teamToEditId);
    props.onTeamEdition({name: _name.value, manager: _manager.value, players: _players.value, id});
    _name.value = '';
    _manager.value = '';
    _players.value = '';
  }

  return (
    <div style={{backgroundColor: 'white', padding: '15px', textAlign: 'center'}}>
      <h3>Edit Team</h3>
      <br></br>
      <form onSubmit={handleTeamEditFormSubmission}>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='name'
          placeholder='Team Name'
          ref={(input) => {_name = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='manager'
          placeholder='Team Manager'
          ref={(input) => {_manager = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='players'
          placeholder='Team Players'
          ref={(input) => {_players = input;}}/>
        <br></br>
        <br></br>
        <button type='submit'className="btn btn-warning">Done</button>
      </form>
    </div>
  );
}

TeamEditForm.propTypes = {
  onTeamEdition: PropTypes.func,
  teamToEditId: PropTypes.string
};

export default TeamEditForm;
