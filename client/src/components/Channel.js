import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Header, Main, Text } from 'grommet'

import Message from './Message'

const Channel = (props) => {
  const { name, topic, messages } = useSelector(state => state.channel)

  if (!messages) {
    return <div>Loading Messages...</div>;
  }

  return (
    <Box gridArea={props.gridArea}>
      <Box fill >
        <Header pad="small" >
          <Text size="medium">{name}</Text>
          <Text size="medium">{topic}</Text>
        </Header>
        <Main
          direction="column-reverse">
          {messages.map(message => {
            return (
              <Message key={message.id} message={message} />
            )
          })}
        </Main>
      </Box>
    </Box >
  )
}

export default Channel;