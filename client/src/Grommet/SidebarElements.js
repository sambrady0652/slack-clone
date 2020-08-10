import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signOut } from '../store/authentication'

import {
  Avatar,
  Button,
  Box,
  Nav,
  Stack,
  Text,
} from 'grommet';

import {
  Analytics,
  Clock,
  Configure,
  Projects,
  Split,
  StatusInfoSmall,
  Logout
} from 'grommet-icons';

export const SidebarHeader = () => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signOut());
  }

  const { imageUrl, firstName, lastName } = useSelector(state => state.user)
  return (
    <>
      <Box align="center" gap="small" direction="row" margin={{ bottom: 'small' }}>
        <Stack alignSelf="start" align="center" anchor="top-right">
          <Avatar src={imageUrl} />
          {/* <Box pad="xsmall" background="orange" round responsive={false} /> */}
        </Stack>
        <Text>{firstName} {lastName}</Text>
      </Box>
      <Button
        plain
        size="small"
        hoverIndicator={{ color: "brand" }}
        onClick={handleSignout}>
        Signout
      </Button>
    </>
  )
};

export const SidebarButton = ({ icon, label, ...rest }) => {
  return (
    <Box pad="small"
      fill="horizontal"
      onClick={() => { return }}
      hoverIndicator={{ color: "brand" }}>
      <Button
        fill
        pad="xlarge"
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        {...rest}
      />
    </Box>
  )
};

export const MainNavigation = () => {
  const { channels } = useSelector(state => state.user)

  if (!channels) {
    return (
      <Nav gap="small" fill="horizontal" responsive={false}>
        <SidebarButton icon={<StatusInfoSmall />} label="Focus" />
        <SidebarButton icon={<Projects />} label="Services" />
        <SidebarButton icon={<Clock />} label="Glances" />
        <SidebarButton icon={<Split />} label="Flows" />
        <SidebarButton icon={<Analytics />} label="Analytics" />
        <SidebarButton icon={<Configure />} label="Configure" />
      </Nav>
    )
  }
  return (
    <Nav gap="small" fill="horizontal" responsive={false}>
      {channels.map(channel => {
        return (
          <SidebarButton icon={<Configure />} key={channel.id} label={channel.Channel.name} onClick={() => <Redirect to={`channels/${channel.Channel.id}`} />} />
        )
      })}
      {/* <SidebarButton icon={<StatusInfoSmall />} label="Focus" />
      <SidebarButton icon={<Projects />} label="Services" />
      <SidebarButton icon={<Clock />} label="Glances" />
      <SidebarButton icon={<Split />} label="Flows" />
      <SidebarButton icon={<Analytics />} label="Analytics" />
      <SidebarButton icon={<Configure />} label="Configure" /> */}
    </Nav>
  );
}
