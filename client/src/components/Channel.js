import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Header, Main, Text } from 'grommet'

import { getChannel } from '../store/channel'
import Message from './Message'

const Channel = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { name, topic, messages } = useSelector(state => state.channel)

  useEffect(() => {
    dispatch(getChannel(id))
  }, [id, dispatch])

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