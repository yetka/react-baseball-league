import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddPlayer from './AddPlayer';
import AddTeam from './AddTeam';
import AddGame from './AddGame';

function AdminAccessAllowed() {

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
          <Route exact path='/admin/add-player' component={AddPlayer} />
          <Route exact path='/admin/add-team' component={AddTeam} />
          <Route exact path='/admin/add-game' component={AddGame} />
        </Switch>
      </div>
    </div>
  );
}

export default AdminAccessAllowed;
