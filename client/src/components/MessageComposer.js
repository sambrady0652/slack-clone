import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Send } from 'grommet-icons';
import { Box, TextInput, Button } from 'grommet';

const MessageComposer = (props) => {
  const { name } = useSelector(state => state.channel)
  const [newMessage, setNewMessage] = useState('');
  const handleSend = (e) => {
    e.preventDefault();
  }

  return (
    <Box gridArea={props.gridArea} pad={{ top: "large", bottom: "small" }}>
      <form onSubmit={handleSend} >
        <Box
          width="large"
          direction="row"
          align="center">
          <TextInput
            placeholder={`Message to ${name}`}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} />
          <Button primary alignSelf="end" plain={false} icon={<Send />} />
        </Box>

      </form>
    </Box>
  )
}

export default MessageComposer;