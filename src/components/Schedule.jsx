import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';


function Schedule(props){
  return (
    <div>
      <div style={{color: 'white', backgroundColor: '#a52a2a', opacity: '0.8', filter: 'alpha(opacity=50)', textAlign: 'center', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', borderColor: 'rgba(1,1,1,1)'}} className="row">
        <div className="col-md-2">
          <h4>Home</h4>
        </div>
        <div className="col-md-1">
          <h4></h4>
        </div>
        <div className="col-md-2">
          <h4>Away</h4>
        </div>
        <div className="col-md-1">
          <h4></h4>
        </div>
        <div className="col-md-3">
          <h4>Date</h4>
        </div>
        <div className="col-md-3">
          <h4>Field</h4>
        </div>
      </div>
      <div>
        {props.gamesList.map((game, i) =>
          <Game
            team1={game.team1}
            team1Score={game.team1Score}
            team2={game.team2}
            team2Score={game.team2Score}
            date={game.date}
            field={game.field}
            key={i}/>
        )}
      </div>
    </div>
  );
}

Schedule.propTypes = {
  gamesList: PropTypes.array
};

export default Schedule;
