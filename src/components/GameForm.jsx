import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function GameForm(props) {

  let _team1 = null;
  let _team1Score = null;
  let _team2 = null;
  let _team2Score = null;
  let _date = null;
  let _field = null;

  function handleNewGameFormSubmission(event) {
    event.preventDefault();
    props.onNewGameCreation({team1: _team1.value, team1Score: parseInt(_team1Score.value), team2: _team2.value, team2Score: parseInt(_team2Score.value), date: _date.value, field: _field.value, id: v4()});
    _team1.value = '';
    _team1Score.value = '';
    _team2.value = '';
    _team2Score.value = '';
    _date.value = '';
    _field.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewGameFormSubmission}>
        <input
          type='text'
          id='team1'
          placeholder='Home'
          ref={(input) => {_team1 = input;}}/>
        <input
          type='text'
          id='team1Score'
          placeholder='Home Score'
          ref={(input) => {_team1Score = input;}}/>
        <input
          type='text'
          id='team2'
          placeholder='Away'
          ref={(input) => {_team2 = input;}}/>
        <input
          type='text'
          id='team2Score'
          placeholder='Away Score'
          ref={(input) => {_team2Score = input;}}/>
        <input
          type='text'
          id='date'
          placeholder='Date'
          ref={(input) => {_date = input;}}/>
        <input
          type='text'
          id='field'
          placeholder='Field'
          ref={(input) => {_field = input;}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>
  );
}

GameForm.propTypes = {
  onNewGameCreation: PropTypes.func
};

export default GameForm;
