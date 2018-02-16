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
    <div>
      <form onSubmit={handleNewTeamFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Team Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='manager'
          placeholder='Team Manager'
          ref={(input) => {_manager = input;}}/>
        <textarea
          id='players'
          placeholder='Team players'
          ref={(textarea) => {_players = textarea;}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

TeamForm.propTypes = {
  onNewTeamCreation: PropTypes.func
};

export default TeamForm;
