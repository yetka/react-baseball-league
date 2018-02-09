import React from 'react';
import PropTypes from 'prop-types';
import Shiluette from '../assets/images/shiluette.jpg';

function Player(props){
  return (
    <div style={{padding: '50px'}} className="col-md-4">
      <div className="row">
        <div className="col-md-4">
          <img style={{width: '90px'}} src={Shiluette} alt="symbol"></img>
        </div>
        <div className="col-md-8">
          <br></br>
          <h3>{props.name}</h3>
        </div>
      </div>
      <br></br>
      <div>
        <h5><strong>Age: </strong>{props.age}</h5>
        <h5><strong>Position: </strong>{props.position}</h5>
        <h5><strong>Team: </strong>{props.team}</h5>
        <h5><strong>Jersey Number: </strong>{props.jerseyNumber}</h5>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  position: PropTypes.string,
  team: PropTypes.string,
  jerseyNumber: PropTypes.number
};

export default Player;
