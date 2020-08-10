import React from 'react';
import { useSelector } from 'react-redux';
import { Header, Text } from 'grommet'

const Head = () => {
  const { name, topic } = useSelector(state => state.channel);
  return (
    //TODO: GET HEADER INTO CHANNEL
    <Header
      style={{ position: "sticky", top: "0px" }}
      background="light-2"
    >
      <Text size="medium">{name}</Text>
      <Text size="medium">{topic}</Text>
    </Header>
  )
}

export default Head;