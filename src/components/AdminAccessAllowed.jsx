import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddPlayer from './AddPlayer';
import AddTeam from './AddTeam';
import AddGame from './AddGame';
import EditPlayer from './EditPlayer';
import EditTeam from './EditTeam';
import EditGame from './EditGame';
import PropTypes from 'prop-types';

function AdminAccessAllowed(props) {
  console.log(props);
  return (
    <div className="row">
      <div style={{backgroundColor: '#a52a2a', padding: '20px',fontSize: '18px', textAlign: 'center'}} className="col-md-2">
        <h5><strong>Players:</strong></h5>
        <p><Link style={{color: 'white'}} to='/admin/add-player'>Add player</Link></p>
        <p><Link style={{color: 'white'}} to='/admin/edit-player'>Edit player</Link></p>
        <hr></hr>
        <h5><strong>Teams:</strong></h5>
        <p><Link style={{color: 'white'}} to='/admin/add-team'>Add team</Link></p>
        <p><Link style={{color: 'white'}} to='/admin/edit-team'>Edit team</Link></p>
        <hr></hr>
        <h5><strong>Games:</strong></h5>
        <p><Link style={{color: 'white'}} to='/admin/add-game'>Add game</Link></p>
        <p><Link style={{color: 'white'}} to='/admin/edit-game'>Edit game</Link></p>
      </div>
      <div className="col-md-10">
        <Switch>
          <Route exact path='/admin/add-player'render={()=><AddPlayer playersList={props.playersList}
            onNewPlayerCreation={props.onNewPlayerCreation} />} />
          <Route exact path='/admin/add-team'render={()=><AddTeam teamsList={props.teamsList} onNewTeamCreation={props.onNewTeamCreation}  />} />
          <Route exact path='/admin/add-game'render={()=><AddGame gamesList={props.gamesList}
            onNewGameCreation={props.onNewGameCreation} />} />
          <Route exact path='/admin/edit-player'render={()=><EditPlayer playersList={props.playersList}
            currentRouterPath={props.currentRouterPath} onDeletePlayer={props.onDeletePlayer} />} />
          <Route exact path='/admin/edit-team'render={()=><EditTeam teamsList={props.teamsList}
            currentRouterPath={props.currentRouterPath} onDeleteTeam={props.onDeleteTeam} />} />
          <Route exact path='/admin/edit-game'render={()=><EditGame gamesList={props.gamesList}
            currentRouterPath={props.currentRouterPath} onDeleteGame={props.onDeleteGame} />} />
        </Switch>
      </div>
    </div>
  );
}

AdminAccessAllowed.propTypes = {
  teamsList: PropTypes.array,
  playersList: PropTypes.array,
  gamesList: PropTypes.array,
  onNewTeamCreation: PropTypes.func,
  onNewPlayerCreation: PropTypes.func,
  onNewGameCreation: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onDeleteTeam: PropTypes.func,
  onDeletePlayer: PropTypes.func,
  onDeleteGame: PropTypes.func
};

export default AdminAccessAllowed;
