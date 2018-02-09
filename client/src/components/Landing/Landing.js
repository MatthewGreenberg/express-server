import React from 'react';
import './landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className='landing'>
        <h1 className='landing__title'>Quiggly!</h1>
        <p>The best HR Solution in town!</p>
      </div>
    )
  }
}

export default Landing;