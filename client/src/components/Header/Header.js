import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css';

class Header extends React.Component {

  handleGoogleAuthClick() {
    console.log(this.props);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <a
            href='/auth/google'
            className='header__button'
          >
            Sign In With Google
          </a>
        );
      default:
        return (
          <a
            href='/api/logout'
            className='header__button'
          >
            Log Out
          </a>
        )
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <div className='header'>
        {this.renderContent()}
        <h1 className='header__title'>Quiggly</h1>

      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {auth}
}

export default connect(mapStateToProps)(Header);