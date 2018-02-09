import React from 'react';
import Game from './Game';

let masterGamesList= [
  {
    team1: 'Expos',
    team1Score: 4,
    team2: 'Braves',
    team2Score: 0,
    date: '01-24-2018',
    field: 'Ballard'
  },
  {
    team1: 'Expos',
    team1Score: 3,
    team2: 'Tigers',
    team2Score: 7,
    date: '02-24-2017',
    field: 'Edmonds'
  },
  {
    team1: 'Titans',
    team1Score: 3,
    team2: 'Tigers',
    team2Score: 4,
    date: '01-20-2018',
    field: 'Shoreline'
  },
  {
    team1: 'Tigers',
    team1Score: 2,
    team2: 'Titans',
    team2Score: 7,
    date: '01-13-2017',
    field: 'Edmonds'
  },
  {
    team1: 'Rage',
    team1Score: 6,
    team2: 'Titans',
    team2Score: 2,
    date: '07-04-2017',
    field: 'Ballard'
  },
  {
    team1: 'Tigers',
    team1Score: 2,
    team2: 'Expos',
    team2Score: 4,
    date: '05-05-2017',
    field: 'Safeco'
  }
];

function Schedule(){
  return (
    <div>
      <div style={{color: 'white', backgroundColor: '#990000', opacity: '0.8', filter: 'alpha(opacity=50)', textAlign: 'center', borderStyle: 'solid', borderWidth: '1px 1px 1px 1px', borderColor: 'rgba(1,1,1,1)'}} className="row">
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
        {masterGamesList.map((game, i) =>
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

export default Schedule;
