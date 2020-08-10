import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Header, Text, Button } from 'grommet';
import { Add } from 'grommet-icons'

import { joinChannel } from '../store/channel';

const Head = () => {
  const { name, topic, id } = useSelector(state => state.channel);
  const dispatch = useDispatch();

  const handleJoin = () => {
    dispatch(joinChannel(id))
  }
  return (
    //TODO: GET HEADER INTO CHANNEL
    <Header
      style={{ position: "sticky", top: "0px" }}
      background="light-2"
    >
      <Text size="medium">{name}</Text>
      <Text size="medium">{topic}</Text>
      <Button icon={<Add />} label="Join Channel" onClick={handleJoin} plain />
    </Header>
  )
}

export default Head;