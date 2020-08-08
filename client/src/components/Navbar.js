import React, { useEffect } from 'react';
import { Sidebar, Box } from 'grommet';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/authentication'

import {
  SidebarHeader,
  MainNavigation,
} from "../Grommet/SidebarElements"

const Navbar = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  });

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