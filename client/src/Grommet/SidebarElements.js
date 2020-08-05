import React from 'react';
import { useDispatch } from 'react-redux';
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

const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

export const SidebarHeader = () => (
  <Box align="center" gap="small" direction="row" margin={{ bottom: 'small' }}>
    <Stack alignSelf="start" align="center" anchor="top-right">
      <Avatar src={src} />
      <Box pad="xsmall" background="orange" round responsive={false} />
    </Stack>
    <Text>Shimrit Yacobi</Text>
  </Box>
);

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
