import React from 'react';

import { Sidebar, Box } from 'grommet';

import {
  SidebarHeader,
  MainNavigation,
} from "../Grommet/SidebarElements"

const Navbar = (props) => {
  return (
    <Box
      gridArea={props.gridArea}
      direction="row">
      <Sidebar
        fill
        background="neutral-2"
        header={<SidebarHeader />}
        pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
      >
        <MainNavigation />
      </Sidebar>
    </Box>
  )
}

export default Navbar;