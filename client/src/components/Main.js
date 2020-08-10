import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { getChannel } from '../store/channel'
import { Grid } from 'grommet';

import Navbar from './Navbar';
import Channel from './Channel';
import MessageComposer from './MessageComposer';

const Main = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const webSocket = useRef(null);
  const token = localStorage.getItem("STACK_TOKEN")

  useEffect(() => {
    dispatch(getChannel(id));

    const ws = new WebSocket(`ws://localhost:8081`);
    ws.onopen = () => {
      console.log("OPEN");
    }
    ws.onclose = (e) => {
      webSocket.current = null;
    };

    webSocket.current = ws

    return function cleanup() {
      console.log("CLEANING UP")
      if (webSocket.current !== null) {
        webSocket.current.close()
      }
    }
  }, [id, dispatch])

  if (!token) {
    return <Redirect to="/users/signin" />
  }

  return (
    <Grid
      fill
      justifyContent="stretch"
      rows={['auto', 'xsmall']}
      columns={['1/4', 'flex']}
      areas={[
        ['sidebar', 'main'],
        ['sidebar', 'message'],
      ]}
    >
      <Navbar gridArea="sidebar" />
      <Channel gridArea="main" webSocket={webSocket} />
      <MessageComposer gridArea="message" webSocket={webSocket} />
    </Grid>
  )
}

export default Main;
