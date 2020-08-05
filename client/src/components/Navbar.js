import React from 'react';

import { Sidebar, Box } from 'grommet';

import {
  SidebarHeader,
  SidebarButton,
  SidebarFooter,
  MainNavigation,
  Labels
} from "../Grommet/SidebarElements"

const Navbar = () => {
  return (
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
  )

}

export default Navbar;