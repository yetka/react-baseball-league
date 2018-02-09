import React from 'react';
import Team from './Team';

let masterTeamsList= [
  {
    name: 'Expos',
    manager: 'Kevin',
    players: ['Kevin', 'Kam', 'Brian']
  },
  {
    name: 'Tigers',
    manager: 'Byron',
    players: ['Mike', 'Gosia', 'Tom']
  },
  {
    name: 'Braves',
    manager: 'Eric',
    players: ['Adam', 'Paul', 'Danka']
  },
  {
    name: 'Brewers',
    manager: 'Nat',
    players: ['Nat', 'Sam', 'Thomas']
  },
  {
    name: 'Rage',
    manager: 'Pam',
    players: ['Cindy', 'Emeshea', 'Ana']
  },
  {
    name: 'Titans',
    manager: 'Kimi',
    players: ['Nazar', 'Sylvia', 'Daniel']
  }
];

function TeamsList(){
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px'}}>
      <br></br>
      <h2 style={{textAlign: 'center'}}>Teams</h2>
      <br></br>
      <br></br>
      <div className="row">
        {masterTeamsList.map((team, i) =>
          <Team
            name={team.name}
            manager={team.manager}
            players={team.players}
            key={i}/>
        )}
      </div>
    </div>
  );
}

export default TeamsList;
