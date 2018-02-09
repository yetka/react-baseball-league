import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <div>
      <nav className="navbar navbar-default">
        <div style={{fontSize: '26px'}} className="container-fluid">
          <div className="navbar-header">
            <Link style={{color: 'white'}} to='/'>About</Link>
          </div>
          <div className="navbar-header">
            <Link style={{color: 'white'}} to='/teams'>Teams</Link>
          </div>
          <div className="navbar-header">
            <Link style={{color: 'white'}} to='/players'>Players</Link>
          </div>
          <div className="navbar-header">
            <Link style={{color: 'white'}} to='/schedule'>Schedule</Link>
          </div>
          <div className="navbar-header">
            <Link style={{color: 'white'}} to='/admin'>Admin</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
