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


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTeamsList: [
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
      ],
      masterPlayersList: [
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
      ],
      masterGamesList: [
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
      ]
    };
    this.handleNewTeamCreation = this.handleNewTeamCreation.bind(this);
    this.handleNewPlayerCreation = this.handleNewPlayerCreation.bind(this);
    this.handleNewGameCreation = this.handleNewGameCreation.bind(this);
  }

  handleNewTeamCreation(newTeam){
    var newMasterTeamsList = this.state.masterTeamsList.slice();
    newTeam.players = newTeam.players.split(', ');
    newMasterTeamsList.push(newTeam);
    this.setState({masterTeamsList: newMasterTeamsList});
  }

  handleNewPlayerCreation(newPlayer){
    var newMasterPlayersList = this.state.masterPlayersList.slice();
    newMasterPlayersList.push(newPlayer);
    this.setState({masterPlayersList: newMasterPlayersList});
  }

  handleNewGameCreation(newGame){
    var newMasterGamesList = this.state.masterGamesList.slice();
    newMasterGamesList.push(newGame);
    this.setState({masterGamesList: newMasterGamesList});
  }

  render(){
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
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/teams' render={()=><TeamsList teamsList={this.state.masterTeamsList} />} />
          <Route path='/players' render={()=><PlayersList playersList={this.state.masterPlayersList} />} />
          <Route path='/schedule' render={()=><Schedule gamesList={this.state.masterGamesList} />} />
          <Route path='/admin' render={()=><Admin teamsList={this.state.masterTeamsList} playersList={this.state.masterPlayersList}
            gamesList={this.state.masterGamesList} onNewTeamCreation={this.handleNewTeamCreation}
            onNewPlayerCreation={this.handleNewPlayerCreation}
            onNewGameCreation={this.handleNewGameCreation} />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
