import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/authentication'

import {
  Avatar,
  Button,
  Box,
  grommet,
  Grommet,
  Nav,
  Stack,
  Text,
  Sidebar
} from 'grommet';

import {
  Analytics,
  Chat,
  Clock,
  Configure,
  Help,
  Projects,
  Split,
  StatusInfoSmall,
  Logout
} from 'grommet-icons';

const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

export const SidebarHeader = () => (
  <Box align="center" gap="small" direction="row" margin={{ bottom: 'large' }}>
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

export const SidebarFooter = () => (
  <Nav>
    <SidebarButton icon={<Chat />} label="Chat" />
    <SidebarButton icon={<Help />} label="Support" />
  </Nav>
);

export const MainNavigation = () => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(signOut());
  }

  return (
    <Nav gap="large" responsive={false}>
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

export const Labels = () => (
  <Grommet theme={grommet} full>
    <Box direction="row" height={{ min: '100%' }}>
      <Sidebar
        responsive={false}
        background="neutral-2"
        header={<SidebarHeader />}
        footer={<SidebarFooter />}
        pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
      >
        <MainNavigation />
      </Sidebar>
    </Box>
  </Grommet>
);