import React from 'react';
import PropTypes from 'prop-types';

function AdminAccessDenied(props) {

  let _name = null;
  let _password = null;



  function handleAuthenticationFormSubmission(event) {
    event.preventDefault();
    props.onAuthenticationFormSubmission({name: _name.value, password: _password.value});
    _name.value = '';
    _password.value = '';
  }

  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px', textAlign: 'center'}}>
      <h1>Access Denied!</h1>
      <br></br>
      <h4>Please provide your name and password</h4>
      <br></br>
      <form onSubmit={handleAuthenticationFormSubmission}>
        <input style={{padding: '5px'}}
          type='text'
          id='name'
          placeholder='Your Name'
          ref={(input) => {_name = input;}}/>
        <input style={{padding: '5px'}}
          type='text'
          id='password'
          placeholder='Your Password'
          ref={(input) => {_password = input;}}/>
        <button style={{padding: '5px'}} type='submit'>Submit!</button>
      </form>
      <br></br>
    </div>
  );
}

AdminAccessDenied.propTypes = {
  onAuthenticationFormSubmission: PropTypes.func
};

export default AdminAccessDenied;
