import React from 'react';
import AdminAccessDenied from './AdminAccessDenied';
import AdminAccessAllowed from './AdminAccessAllowed';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authentication: false
    };
    this.handleAuthenticationFormSubmission = this.handleAuthenticationFormSubmission.bind(this);
  }

  handleAuthenticationFormSubmission(login){
    if ((login.name === 'Admin') && (login.password === 'epicodus')) {
      this.setState({authentication: true});
    }
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.authentication){
      currentlyVisibleContent = <AdminAccessAllowed />;
    } else {
      currentlyVisibleContent = <AdminAccessDenied onAuthenticationFormSubmission={this.handleAuthenticationFormSubmission}/>;
    }
    return (
      <div style={{backgroundColor: 'white', opacity: '0.8', filter: 'alpha(opacity=50)', padding: '20px', textAlign: 'center'}}>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default Admin;
