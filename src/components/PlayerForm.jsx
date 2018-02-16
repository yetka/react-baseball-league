import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function PlayerForm(props) {

  let _name = null;
  let _age = null;
  let _position = null;
  let _team = null;
  let _jerseyNumber = null;

  function handleNewPlayerFormSubmission(event) {
    event.preventDefault();
    props.onNewPlayerCreation({name: _name.value, age: parseInt(_age.value), position: _position.value, team: _team.value, jerseyNumber: parseInt(_jerseyNumber.value), id: v4()});
    _name.value = '';
    _age.value = '';
    _position.value = '';
    _team.value = '';
    _jerseyNumber.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPlayerFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Player Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='age'
          placeholder='Player Age'
          ref={(input) => {_age = input;}}/>
        <input
          type='text'
          id='position'
          placeholder='Player Position'
          ref={(input) => {_position = input;}}/>
        <input
          type='text'
          id='team'
          placeholder='Player Team'
          ref={(input) => {_team = input;}}/>
        <input
          type='text'
          id='jerseyNumber'
          placeholder='Player Jersey Number'
          ref={(input) => {_jerseyNumber = input;}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  onNewPlayerCreation: PropTypes.func
};

export default PlayerForm;
