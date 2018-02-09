import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.css';

class Header extends React.Component {

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
    return (
      <div className='header'>
        {this.renderContent()}
        <Link
          to={this.props.auth ? '/surveys' : '/'}
          className='header__title'
        >
          Quiggly
        </Link>

      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {auth}
}

export default connect(mapStateToProps)(Header);