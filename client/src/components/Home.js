import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Heading, Text, Anchor } from 'grommet'
const Home = () => {
  return (
    <Box justify="center" align="center" background="brand" fill>
      <Heading>Welcome to Stack!</Heading>
      <Text>don't have an account? <Anchor href="/users/signup" label="sign up here!" color="white" /></Text>
      <Text>already have an account? <Anchor href="/users/signin" label="sign in here!" color="white" /></Text>
    </Box>
  )
}

export default Home;