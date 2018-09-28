import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

class MainNavbar extends React.Component {


  openDropdown() {
    document.getElementById("settings").classList.add("dropdown-visible");
    document.getElementById("dropdown-background").classList.add("dropdown-visible");
  }
  closeDropdown() {
    document.getElementById("settings").classList.remove("dropdown-visible");
    document.getElementById("dropdown-background").classList.remove("dropdown-visible");
  }

  render() {
    return <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-left">
            <Link className="logo-icon" to="/"></Link>
            <div className="user-search">
              <input placeholder="Search" />
            </div>
          </div>
          <div className="navbar-right">
            <div>
              <Link to={`/${this.props.currentUser.userUrl}`}>
                {this.props.currentUser.fname}
              </Link>
            </div>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <a>
                <div className="navbar-friends" />
              </a>
              <a>
                <div className="navbar-messages" />
              </a>
              <a>
                <div className="navbar-notifications" />
              </a>
            </div>
            <div>
              <a>
                <div className="navbar-help" />
              </a>
              <a>
                <div className="navbar-settings" onClick={() => this.openDropdown()} />
              </a>
            </div>
            <div id="dropdown-background" className="dd-background" onClick={() => this.closeDropdown()}>
              <div id="settings" className="settings-dropdown">
                <button onClick={() => this.props.logout()}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

  // <Link to={`/${this.props.currentUser.userUrl}`}>{this.props.currentUser.fname}</Link>

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainNavbar));
