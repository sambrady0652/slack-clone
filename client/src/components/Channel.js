import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'grommet'

import Message from './Message';
import { writeMessage } from "../store/message"

const Channel = (props) => {
  const { oldMessages } = useSelector(state => state.channel);
  const newMessages = useSelector(state => state.message)
  const { webSocket } = props
  const dispatch = useDispatch();
  const channelMessages = [...oldMessages, ...newMessages]

  useEffect(() => {
    if (webSocket.current !== null) {
      webSocket.current.onmessage = (e) => {
        const message = JSON.parse(e.data)
        dispatch(writeMessage(message, message.userId))
      }
    }
  }, [channelMessages, dispatch, webSocket]);

  if (!channelMessages) {
    return <div>Loading Messages...</div>;
  }

  return (
    //TODO: GET HEADER INTO CHANNEL
    // <Header pad="small" >
    //   <Text size="medium">{name}</Text>
    //   <Text size="medium">{topic}</Text>
    // </Header>
    <Box gridArea={props.gridArea}
      direction="column-reverse"
      overflow="scroll">
      <Box>
        {channelMessages.map(message => {
          return (
            <Message key={message.id} message={message} />
          )
        })}
      </Box>
    </Box >

  )
}

export default Channel;