import React from 'react';
import Player from './Player';

let masterPlayersList= [
  {
    name: 'Kevin',
    age: 27,
    position: 'Infield',
    team: 'Expos',
    jerseyNumber: 10
  },
  {
    name: 'Mike',
    age: 26,
    position: '0utfield',
    team: 'Brewers',
    jerseyNumber: 3
  },
  {
    name: 'Kam',
    age: 28,
    position: 'Pitcher',
    team: 'Expos',
    jerseyNumber: 12
  },
  {
    name: 'Tyler',
    age: 30,
    position: 'Catcher',
    team: 'Braves',
    jerseyNumber: 16
  },
  {
    name: 'Brian',
    age: 30,
    position: 'Pitcher',
    team: 'Expos',
    jerseyNumber: 5
  },
  {
    name: 'Ana',
    age: 25,
    position: 'Catcher',
    team: 'Expos',
    jerseyNumber: 7
  }
];

function PlayersList(){
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px'}}>
      <div className="row">
        {masterPlayersList.map((player, i) =>
          <Player
            name={player.name}
            age={player.age}
            position={player.position}
            team={player.team}
            jerseyNumber={player.jerseyNumber}
            key={i}/>
        )}
      </div>
    </div>
  );
}

export default PlayersList;
