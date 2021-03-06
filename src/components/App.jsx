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
import PropTypes from 'prop-types';


class App extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      masterTeamsList: [
        {
          name: 'Expos',
          manager: 'Kevin',
          players: ['Kevin', 'Kam', 'Brian'],
          id: '1'
        },
        {
          name: 'Tigers',
          manager: 'Byron',
          players: ['Mike', 'Gosia', 'Tom'],
          id: '2'
        },
        {
          name: 'Braves',
          manager: 'Eric',
          players: ['Adam', 'Paul', 'Danka'],
          id: '3'
        },
        {
          name: 'Brewers',
          manager: 'Nat',
          players: ['Nat', 'Sam', 'Thomas'],
          id: '4'
        },
        {
          name: 'Rage',
          manager: 'Pam',
          players: ['Cindy', 'Emeshea', 'Ana'],
          id: '5'
        },
        {
          name: 'Titans',
          manager: 'Kimi',
          players: ['Nazar', 'Sylvia', 'Daniel'],
          id: '6'
        }
      ],
      masterPlayersList: [
        {
          name: 'Kevin',
          age: 27,
          position: 'Infield',
          team: 'Expos',
          jerseyNumber: 10,
          id: '1'
        },
        {
          name: 'Mike',
          age: 26,
          position: '0utfield',
          team: 'Brewers',
          jerseyNumber: 3,
          id: '2'
        },
        {
          name: 'Kam',
          age: 28,
          position: 'Pitcher',
          team: 'Expos',
          jerseyNumber: 12,
          id: '3'
        },
        {
          name: 'Tyler',
          age: 30,
          position: 'Catcher',
          team: 'Braves',
          jerseyNumber: 16,
          id: '4'
        },
        {
          name: 'Brian',
          age: 30,
          position: 'Pitcher',
          team: 'Expos',
          jerseyNumber: 5,
          id: '5'
        },
        {
          name: 'Ana',
          age: 25,
          position: 'Catcher',
          team: 'Expos',
          jerseyNumber: 7,
          id: '6'
        }
      ],
      masterGamesList: [
        {
          team1: 'Expos',
          team1Score: 4,
          team2: 'Braves',
          team2Score: 0,
          date: '01-24-2018',
          field: 'Ballard',
          id: '1'
        },
        {
          team1: 'Expos',
          team1Score: 3,
          team2: 'Tigers',
          team2Score: 7,
          date: '02-24-2017',
          field: 'Edmonds',
          id: '2'
        },
        {
          team1: 'Titans',
          team1Score: 3,
          team2: 'Tigers',
          team2Score: 4,
          date: '01-20-2018',
          field: 'Shoreline',
          id: '3'
        },
        {
          team1: 'Tigers',
          team1Score: 2,
          team2: 'Titans',
          team2Score: 7,
          date: '01-13-2017',
          field: 'Edmonds',
          id: '4'
        },
        {
          team1: 'Rage',
          team1Score: 6,
          team2: 'Titans',
          team2Score: 2,
          date: '07-04-2017',
          field: 'Ballard',
          id: '5'
        },
        {
          team1: 'Tigers',
          team1Score: 2,
          team2: 'Expos',
          team2Score: 4,
          date: '05-05-2017',
          field: 'Safeco',
          id: '6'
        }
      ]
    };
    this.handleNewTeamCreation = this.handleNewTeamCreation.bind(this);
    this.handleNewPlayerCreation = this.handleNewPlayerCreation.bind(this);
    this.handleNewGameCreation = this.handleNewGameCreation.bind(this);
    this.handleDeleteTeam = this.handleDeleteTeam.bind(this);
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
    this.handleTeamEdition = this.handleTeamEdition.bind(this);
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

  handleDeleteTeam(currentTeamId){
    var newMasterTeamsList = [];
    var copyMasterTeamsList = this.state.masterTeamsList.slice();
    copyMasterTeamsList.forEach((team) => {
      if (team.id !== currentTeamId) {
        newMasterTeamsList.push(team);
      }
    });
    this.setState({masterTeamsList: newMasterTeamsList});
  }

  handleDeletePlayer(currentPlayerId){
    var newMasterPlayersList = [];
    var copyMasterPlayersList = this.state.masterPlayersList.slice();
    copyMasterPlayersList.forEach((player) => {
      if (player.id !== currentPlayerId) {
        newMasterPlayersList.push(player);
      }
    });
    this.setState({masterPlayersList: newMasterPlayersList});
  }

  handleDeleteGame(currentGameId){
    var newMasterGamesList = [];
    var copyMasterGamesList = this.state.masterGamesList.slice();
    copyMasterGamesList.forEach((game) => {
      if (game.id !== currentGameId) {
        newMasterGamesList.push(game);
      }
    });
    this.setState({masterGamesList: newMasterGamesList});
  }

  handleTeamEdition(teamToEdit) {
    console.log(teamToEdit);
    var newMasterTeamsList = this.state.masterTeamsList.slice();
    newMasterTeamsList.forEach((team) => {
      if (team.id === teamToEdit.id) {
        if (teamToEdit.name) {
          team.name = teamToEdit.name;
        }
        if (teamToEdit.manager) {
          team.manager = teamToEdit.manager;
        }
        if (teamToEdit.players) {
          team.players = teamToEdit.players.split(', ');
        }
      }
    });
    this.setState({masterTeamsList: newMasterTeamsList});
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
          <Route path='/admin' render={(props)=><Admin teamsList={this.state.masterTeamsList} playersList={this.state.masterPlayersList}
            gamesList={this.state.masterGamesList} onNewTeamCreation={this.handleNewTeamCreation}
            onNewPlayerCreation={this.handleNewPlayerCreation}
            onNewGameCreation={this.handleNewGameCreation}
            currentRouterPath={props.location.pathname}
            onDeleteTeam={this.handleDeleteTeam}
            onDeletePlayer={this.handleDeletePlayer}
            onDeleteGame={this.handleDeleteGame}
            onTeamEdition={this.handleTeamEdition} />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
App.propTypes = {
  location: PropTypes.object
};

export default App;
