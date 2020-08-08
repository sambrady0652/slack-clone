import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Header } from 'grommet'

import Message from './Message'

const Channel = (props) => {
  const { name, topic, messages, users } = useSelector(state => state.channel)
  const members = users.map(user => user.User);

  if (!messages) {
    return <div>Loading Messages...</div>;
  }

  return (
    //TODO: GET HEADER INTO CHANNEL
    // <Header pad="small" >
    //   <Text size="medium">{name}</Text>
    //   <Text size="medium">{topic}</Text>
    // </Header>
    <Box gridArea={props.gridArea}
      direction="column-reverse">
      <Box>
        {messages.map(message => {
          return (
            <Message key={message.id} message={message} />
          )
        })}
      </Box>
    </Box >

  )
}

export default Channel;