import React from 'react';
import { connect } from 'react-redux';
import './sign-up.css';
import * as actions from '../../actions';

class SignUp extends React.Component {

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    return (
      <div className='sign-up'>
        <h1 className='sign-up__header'>Sign Up</h1>
        <form
          className='sign-up__form'
          method='POST'
        >
          <label htmlFor="username">User Name</label>
          <input
            type='text'
            name='username'
            value={this.props.userName}
            onChange={(e) => this.props.setUserName(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type='text'
            name='password'
          />
          <label htmlFor="email">Email</label>
          <input
            type='text'
            name='email'
          />
          <a href='/api/sign-up'>Sign Up</a>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ signUp }) {
  return { signUp }
}

export default connect(mapStateToProps, actions)(SignUp);