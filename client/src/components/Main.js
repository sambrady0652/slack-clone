import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getChannel(id));
  });

  const token = localStorage.getItem("STACK_TOKEN")
  if (!token) {
    return <Redirect to="/users/signin" />
  }

  return (
    <Grid
      fill
      rows={['flex', 'xsmall']}
      columns={['1/4', 'flex']}
      areas={[
        ['sidebar', 'main'],
        ['sidebar', 'message'],
      ]}
      gap="small"
    >
      <Navbar background="light-5" gridArea="sidebar" />
      <Channel background="light-2" gridArea="main" />
      <MessageComposer background="dark-2" gridArea="message" />
    </Grid>

  )
}

export default Main;
