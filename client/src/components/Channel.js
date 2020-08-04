import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getChannel } from '../store/channel'

const Channel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannel())
  }, [])

  return (
    <>
      <div>Channel</div>
    </>
  )
}

export default Channel;