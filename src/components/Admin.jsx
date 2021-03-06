import React from 'react';
import AdminAccessDenied from './AdminAccessDenied';
import AdminAccessAllowed from './AdminAccessAllowed';
import PropTypes from 'prop-types';

class Admin extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      authentication: false,
      currentTeamId: null
    };
    this.handleAuthenticationFormSubmission = this.handleAuthenticationFormSubmission.bind(this);
    this.handleTeamToEdit = this.handleTeamToEdit.bind(this);
  }

  handleAuthenticationFormSubmission(login){
    if ((login.name === 'Admin') && (login.password === 'epicodus')) {
      this.setState({authentication: true});
    }
  }

  handleTeamToEdit(id) {
    this.setState({currentTeamId: id});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.authentication){
      currentlyVisibleContent = <AdminAccessAllowed teamsList={this.props.teamsList} playersList={this.props.playersList} gamesList={this.props.gamesList} onNewTeamCreation={this.props.onNewTeamCreation}
        onNewPlayerCreation={this.props.onNewPlayerCreation}
        onNewGameCreation={this.props.onNewGameCreation}
        currentRouterPath={this.props.currentRouterPath}
        onDeleteTeam={this.props.onDeleteTeam}
        onDeletePlayer={this.props.onDeletePlayer}
        onDeleteGame={this.props.onDeleteGame}
        onTeamEdition={this.props.onTeamEdition}
        onTeamToEdit={this.handleTeamToEdit}
        teamToEditId={this.state.currentTeamId} />;
    } else {
      currentlyVisibleContent = <AdminAccessDenied onAuthenticationFormSubmission={this.handleAuthenticationFormSubmission}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

Admin.propTypes = {
  teamsList: PropTypes.array,
  playersList: PropTypes.array,
  gamesList: PropTypes.array,
  onNewTeamCreation: PropTypes.func,
  onNewPlayerCreation: PropTypes.func,
  onNewGameCreation: PropTypes.func,
  currentRouterPath: PropTypes.string,
  onDeleteTeam: PropTypes.func,
  onDeletePlayer: PropTypes.func,
  onDeleteGame: PropTypes.func,
  onTeamEdition: PropTypes.func
};

export default Admin;
