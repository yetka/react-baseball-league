import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddPlayer from './AddPlayer';
import AddTeam from './AddTeam';
import AddGame from './AddGame';
import PropTypes from 'prop-types';

function AdminAccessAllowed(props) {

  return (
    <div className="row">
      <div className="col-md-2">
        <h5><strong>Players:</strong></h5>
        <p><Link to='/admin/add-player'>Add player</Link></p>
        <hr></hr>
        <h5><strong>Teams:</strong></h5>
        <p><Link to='/admin/add-team'>Add team</Link></p>
        <hr></hr>
        <h5><strong>Games:</strong></h5>
        <p><Link to='/admin/add-game'>Add game</Link></p>
      </div>
      <div className="col-md-10">
        <Switch>
          <Route exact path='/admin/add-player'render={()=><AddPlayer playersList={props.playersList} />} />
          <Route exact path='/admin/add-team'render={()=><AddTeam teamsList={props.teamsList} />} />
          <Route exact path='/admin/add-game'render={()=><AddGame gamesList={props.gamesList} />} />
        </Switch>
      </div>
    </div>
  );
}

AdminAccessAllowed.propTypes = {
  teamsList: PropTypes.array,
  playersList: PropTypes.array,
  gamesList: PropTypes.array
};

export default AdminAccessAllowed;
