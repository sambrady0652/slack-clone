import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getChannel } from '../store/channel'
import Navbar from './Navbar';
import Channel from './Channel';

const Main = () => {
  // getChannel();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, topic, messages, users } = useSelector(state => state.channel)
  console.log(name)
  console.log(messages)
  useEffect(() => {
    dispatch(getChannel(id))
  }, [])
  //TODO: fix render problem (starting 'undefined' then re-rendering)

  return (
    <>
      <div>{name}</div>
      <div>{topic}</div>
      <Navbar />
      <Channel />

    </>
  )
}

export default Main;
