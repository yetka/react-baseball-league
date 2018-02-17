import React from 'react';
import Team from './Team';
import PropTypes from 'prop-types';


function TeamsList(props){
  console.log(props)
  return (
    <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px'}}>
      <div className="row">
        {props.teamsList.map((team, i) =>
          <Team
            name={team.name}
            manager={team.manager}
            players={team.players}
            key={i}
            currentRouterPath={props.currentRouterPath}/>
        )}
      </div>
    </div>
  );
}

TeamsList.propTypes = {
  teamsList: PropTypes.array,
  currentRouterPath: PropTypes.array
};


export default TeamsList;
