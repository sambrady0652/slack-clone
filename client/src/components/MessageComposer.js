import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Send } from 'grommet-icons';
import { Box, TextInput, Button } from 'grommet';;

const MessageComposer = (props) => {
  const { name, id } = useSelector(state => state.channel)
  const { userId } = useSelector(state => state.user)
  const [newMessage, setNewMessage] = useState('');
  const { webSocket } = props

  const handleSend = async (e) => {
    e.preventDefault();
    const msg = {
      userId,
      channelId: id,
      content: newMessage
    }
    const jsonNewMessage = JSON.stringify(msg);
    webSocket.current.send(jsonNewMessage);
    setNewMessage("")
  }

  return (

    <form onSubmit={handleSend} style={{ position: "sticky", bottom: "0px" }} >
      <Box
        background="light-1"
        width="large"
        direction="row"
        align="center">
        <TextInput
          placeholder={`Message to ${name}`}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} />
        <Button type="submit" primary alignSelf="end" plain={false} icon={<Send />} />
      </Box>
    </form>

  )
}

export default MessageComposer;