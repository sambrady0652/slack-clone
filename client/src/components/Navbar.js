import React, { useEffect } from 'react';
import { Sidebar, Box } from 'grommet';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/authentication'

import {
  SidebarHeader,
  MainNavigation,
} from "../Grommet/SidebarElements"

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser())
  });

  return (
    <Box
      direction="row"
      height="medium"
      style={{ position: "sticky", top: "0px", height: "100%" }}>
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