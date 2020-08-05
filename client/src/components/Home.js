import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div>
        don't have an account? <NavLink to="/users/signup"> sign up here!</NavLink>
      </div>
      <div>already have an account? <NavLink to="/users/signin">sign in here</NavLink> </div>
      <Navbar />
    </>
  )
}

export default Home;