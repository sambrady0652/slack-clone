import React from 'react';

import Navbar from './Navbar';
import Channel from './Channel';
import SignoutButton from './Signout';

const Main = () => {
  return (
    <>
      <Navbar />
      <Channel />
      <div>Main</div>
      <SignoutButton />
    </>
  )
}

export default Main;