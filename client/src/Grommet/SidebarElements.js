import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const { imageUrl, firstName, lastName } = useSelector(state => state.user)
  return (
    <Box align="center" gap="small" direction="row" margin={{ bottom: 'small' }}>
      <Stack alignSelf="start" align="center" anchor="top-right">
        <Avatar src={imageUrl} />
        <Box pad="xsmall" background="orange" round responsive={false} />
      </Stack>
      <Text>{firstName} {lastName}</Text>
    </Box>
  )
};

export const SidebarButton = ({ icon, label, ...rest }) => {
  return (
    <Box pad="small">
      <Button
        fill="horizontal"
        pad="xlarge"
        gap="medium"
        alignSelf="start"
        plain
        icon={icon}
        label={label}
        {...rest}
        hoverIndicator={{ color: "purple" }}
      />
    </Box>
  )
};

export const MainNavigation = () => {

  //TODO: Retrieve Joined Channels, create NavLink for each channel
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signOut());
  }

  return (
    <Nav gap="small" fill="horizontal" responsive={false}>
      <SidebarButton icon={<StatusInfoSmall />} label="Focus" />
      <SidebarButton icon={<Projects />} label="Services" />
      <SidebarButton icon={<Clock />} label="Glances" />
      <SidebarButton icon={<Split />} label="Flows" />
      <SidebarButton icon={<Analytics />} label="Analytics" />
      <SidebarButton icon={<Configure />} label="Configure" />
      <SidebarButton icon={<Logout />} label="Signout" onClick={handleSignout} />
    </Nav>
  );
}
