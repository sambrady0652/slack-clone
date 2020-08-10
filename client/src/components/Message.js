import React from 'react';
import {
  Box,
  Text,
  Avatar,
  Paragraph
} from 'grommet';

const Message = (props) => {
  const { content, User, createdAt } = props.message
  const { imageUrl, firstName, lastName } = User;
  const timestamp = new Date(createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return (

    <Box
      fill
      onClick={() => { return; }}
      hoverIndicator="background"
      focusIndicator={false}
      direction="row-responsive"
      gap="small"
      size="xsmall"
      align="center"
      pad="xsmall"
    >
      <Avatar src={imageUrl} round="xsmall" />
      <Box >
        <Box
          direction="row-responsive"
        >
          <Text
            size="small"
            weight="bold">{firstName} {lastName}</Text>
          <Text
            alignSelf="end"
            size="xsmall"
            margin={{ left: "xsmall" }}>{timestamp}</Text>
        </Box>
        <Paragraph style={{ margin: "0px" }}>{content}</Paragraph>
      </Box>
    </Box>
    // <div  >{content}</div >
  )
}

export default Message;
