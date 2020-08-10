import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Main } from 'grommet'

import Message from './Message';
import { writeMessage } from "../store/message"

const Channel = (props) => {
  const { oldMessages } = useSelector(state => state.channel);
  const newMessages = useSelector(state => state.message)
  const { webSocket } = props
  const dispatch = useDispatch();
  const channelMessages = [...oldMessages, ...newMessages]

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    if (webSocket.current !== null) {
      webSocket.current.onmessage = (e) => {
        const message = JSON.parse(e.data)
        dispatch(writeMessage(message, message.userId))
      }
    }
    scrollToBottom();
  }, [channelMessages, dispatch, webSocket]);

  if (!channelMessages) {
    return <div>Loading Messages...</div>;
  }

  return (

    <Main
      direction="column-reverse"
      height="medium"
    >
      <Box>
        {channelMessages.map(message => {
          return (
            <Message key={message.id} message={message} />
          )
        })}
        <div ref={messagesEndRef} />
      </Box>
    </Main >

  )
}

export default Channel;