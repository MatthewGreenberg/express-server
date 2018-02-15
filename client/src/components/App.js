import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './app.css';

import Header from './Header/Header';
import Landing from './Landing/Landing';
import SignUp from './SignUp/SignUp';
import LogIn from './LogIn/LogIn';
const Dashboard = () => <h2>Dashboard</h2>
const SurveryNew = () => <h2>SurveryNew</h2>

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveryNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);