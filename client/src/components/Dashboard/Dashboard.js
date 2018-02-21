import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1 className='dashboard__header'>Dashboard</h1>
      <Link to='/surveys/new'>
        <div className='dashboard__button'>
          <span className='dashboard__button-icon'>+</span>
        </div>
      </Link>
    </div>
  )
}

export default Dashboard;