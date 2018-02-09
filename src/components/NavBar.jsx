import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/'>About</Link>
          </div>
          <div className="navbar-header">
            <Link to='/teams'>Teams</Link>
          </div>
          <div className="navbar-header">
            <Link to='/players'>Players</Link>
          </div>
          <div className="navbar-header">
            <Link to='/schedule'>Schedule</Link>
          </div>
          <div className="navbar-header">
            <Link to='/admin'>Admin</Link>
          </div>
        </div>
  </nav>
    </div>
  );
}

export default NavBar;
