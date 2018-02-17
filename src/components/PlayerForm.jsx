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
    <div style={{backgroundColor: 'white', padding: '15px', textAlign: 'center'}}>
      <h3>Add New Player</h3>
      <br></br>
      <form onSubmit={handleNewPlayerFormSubmission}>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='name'
          placeholder='Player Name'
          ref={(input) => {_name = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='age'
          placeholder='Player Age'
          ref={(input) => {_age = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='position'
          placeholder='Player Position'
          ref={(input) => {_position = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='team'
          placeholder='Player Team'
          ref={(input) => {_team = input;}}/>
        <br></br>
        <input style={{width: '250px', padding: '5px'}}
          type='text'
          id='jerseyNumber'
          placeholder='Player Jersey Number'
          ref={(input) => {_jerseyNumber = input;}}/>
        <br></br>
        <button style={{margin: '5px', width: '70px', backgroundColor: '#4CAF50'}} type='submit' className="btn btn-success">Add!</button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  onNewPlayerCreation: PropTypes.func
};

export default PlayerForm;
