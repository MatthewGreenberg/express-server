import React from 'react';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <h1 className='header__title'>Quiggly</h1>
        <button className='header__button'>Sign In With Google</button>
      </div>
    );
  }
}