import React from 'react';

const Message = (props) => {
  const { content } = props.message
  return (
    <div>{content}</div>
  )
}

export default Message;
