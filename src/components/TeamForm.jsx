import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function TeamForm(props) {

  let _name = null;
  let _manager = null;
  let _players = null;

  function handleNewTeamFormSubmission(event) {
    event.preventDefault();
    props.onNewTeamCreation({name: _name.value, manager: _manager.value, players: _players.value, id: v4()});
    _name.value = '';
    _manager.value = '';
    _players.value = '';
  }

  return (
    <div style={{backgroundColor: 'white', padding: '15px', textAlign: 'center'}}>
      <h3>Add New Team</h3>
      <br></br>
      <form onSubmit={handleNewTeamFormSubmission}>
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
        <button style={{margin: '5px', width: '70px', backgroundColor: '#4CAF50'}} type='submit'>Add!</button>
      </form>
    </div>
  );
}

TeamForm.propTypes = {
  onNewTeamCreation: PropTypes.func
};

export default TeamForm;
