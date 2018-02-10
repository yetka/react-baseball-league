import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Error404(props){
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', textAlign: 'center', margin: '20px'}}>
      <br></br>
      <br></br>
      <br></br>
      <h2>The page {props.location.pathname} does not exist!</h2>
      <br></br>
      <br></br>
      <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
      <br></br>
      <br></br>
      <br></br>
    </div>

  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
