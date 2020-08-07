import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Form, Button } from 'grommet';

import { signUp } from '../store/authentication';
import { FormFieldLabel } from '../Grommet/FormElements';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [profPic, setProfPic] = useState("")

  const dispatch = useDispatch();
  const { needSignIn } = useSelector(state => state.authentication)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(firstName, lastName, email, password, title, profPic));
  }

  if (!needSignIn) {
    return <Redirect to="/channels/1" />;
  }

  return (
    <Box align="center" pad="large">
      <div>already have an account? <NavLink to="/users/signin">sign in here</NavLink> </div>
      <Form onSubmit={handleSubmit} encType="multipart/form-data" className="sign-up-form">
        <FormFieldLabel
          required
          name="firstName"
          type="text"
          label="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)} />
        <FormFieldLabel
          required
          name="lastName"
          type="text"
          label="Last Name"
          value={lastName}
          onChange={e => setLastname(e.target.value)} />
        <FormFieldLabel
          required
          name="email"
          type="text"
          label="Email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <FormFieldLabel
          required
          name="password"
          type="password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <FormFieldLabel
          name="title"
          type="text"
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <input
          name="profPic"
          type="file"
          label="Profile Picture"
          onChange={e => setProfPic(e.target.files[0])} />
        <Button primary plain={false} type="submit">Signup</Button>
      </Form>
    </Box>
  );
}

export default Signup;