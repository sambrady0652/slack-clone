import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getChannel } from '../store/channel'

const Channel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, topic, messages, users } = useSelector(state => state.channel)

  useEffect(() => {
    dispatch(getChannel(id))
  }, [])
  if (!messages) {
    return <div>Messages Loading...</div>;
  }
  return (
    <>
      <div>{name}</div>
      <div>{topic}</div>
      <div>
        {messages.map(message => {
          return (
            <div key={message.id}> {message.content} </div>
          )
        })}
      </div>
    </>
  )
}

export default Channel;