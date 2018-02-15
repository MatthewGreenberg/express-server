import React from 'react';
import { connect } from 'react-redux';
import '../SignUp/sign-up.css';
import * as actions from '../../actions';

class SignUp extends React.Component {

  handleSubmit() {
    this.props.logIn(this.props.signUp);
  }

  render() {
    return (
      <div className='sign-up'>
        <h1 className='sign-up__header'>Log In</h1>
        <form
          className='sign-up__form'
        >
          <label htmlFor="email">Email</label>
          <input
            type='text'
            name='email'
            onChange={(e) => this.props.setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type='text'
            name='password'
            onChange={(e) => this.props.setPassword(e.target.value)}
          />

          <button onClick={() => this.handleSubmit()}>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ signUp }) {
  return { signUp }
}

export default connect(mapStateToProps, actions)(SignUp);