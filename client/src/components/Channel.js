import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getChannel } from '../store/channel'

const Channel = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { channel } = useSelector(state => state.channel.id)
  useEffect(() => {
    dispatch(getChannel())
  }, [])

  return (
    <>
      <div>{channel}</div>
    </>
  )
}

export default Channel;