import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Welcome from './Welcome';
import TeamsList from './TeamsList';
import PlayersList from './PlayersList';
import Schedule from './Schedule';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Baseball from '../assets/images/baseball.jpg';


function App(){
  return (
    <div className="container">
      <style jsx global>{`
        body {
          background-image: url(${Baseball});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover
        }
      `}</style>
      <br></br>
      <br></br>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <NavBar />
      <br></br>
      <br></br>
      <Switch >
        <Route exact path='/' component={Welcome} />
        <Route path='/teams' component={TeamsList} />
        <Route path='/players' component={PlayersList} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
