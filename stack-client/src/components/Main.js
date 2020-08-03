import React from 'react';
import Navbar from './Navbar';
import Channel from './Channel';
import SignoutButton from './Signout';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { setToken } from '../store/authentication';

const Main = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("STACK_TOKEN")
  if (token) dispatch(setToken(token))
  const { needSignIn } = useSelector(state => state.authentication)

  if (needSignIn) return <Redirect to="/signin" />

  return (
    <>
      <Navbar />
      <Channel />
      <div>Main</div>
      <SignoutButton />
    </>
  )
}

export default Main;