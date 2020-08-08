import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Send } from 'grommet-icons';
import { Box, TextInput, Button } from 'grommet';

import { writeMessage } from "../store/message";

const MessageComposer = (props) => {
  const { name, id } = useSelector(state => state.channel)
  const { userId } = useSelector(state => state.user)
  const [newMessage, setNewMessage] = useState('');
  const dispatch = useDispatch();
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(writeMessage(newMessage, id, userId))
  }

  return (
    <Box gridArea={props.gridArea}
      pad={{ left: "xsmall" }}
      alignSelf="end"
    >
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