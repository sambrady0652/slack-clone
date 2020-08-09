import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Box } from 'grommet'

import Message from './Message'

const Channel = (props) => {
  const { oldMessages } = useSelector(state => state.channel);
  const { webSocket } = props
  const [messages, setMessages] = useState([...oldMessages]);
  console.log("PROPS", props.messages)

  useEffect(() => {
    if (webSocket.current !== null) {
      webSocket.current.onmessage = (e) => {
        const message = JSON.parse(e.data)
        setMessages([...oldMessages, message])
      }
    }
  }, [oldMessages]);

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
      direction="column-reverse"
      overflow="scroll">
      <Box>
        {oldMessages.map(message => {
          return (
            <Message key={message.id} message={message} />
          )
        })}
      </Box>
    </Box >

  )
}

export default Channel;