import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormNavbar from './login_form_navbar';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <LoginFormNavbar />
        <div className="landing-page-container">
          <div className="recent-logins"></div>
          <SignupFormContainer />
        </div>
      </div>
    )
  }
}

export default LandingPage;