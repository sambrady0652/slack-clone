import React, { useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Form, Button } from 'grommet';

import { signIn } from '../store/authentication';
import { FormFieldLabel } from '../Grommet/FormElements';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const { needSignIn } = useSelector(state => state.authentication)
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signIn(email, password));
  }
  if (!needSignIn) {
    return <Redirect to="/channels/1" />
  }

  return (
    <Box align="center" pad="large">
      <div>
        don't have an account? <NavLink to="/users/signup"> sign up here!</NavLink>
      </div>
      <Form onSubmit={handleSubmit}>
        <FormFieldLabel
          required
          name="email"
          label="Email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <FormFieldLabel
          required
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <Button
          type="submit"
          plain={false}
          primary>
          sign in</Button>
      </Form>
    </Box>
  );
}


// const LabelFormField = () => (

//   <Box align="center" pad="large">
//     <Form>
//       <FormFieldLabel name="firstName" label="FirstName" required />
//       <FormFieldLabel name="LastName" label="LastName" required />
//       <FormFieldLabel name="email" label="Email" />
//       <Button type="submit" label="Submit" primary />
//       <Text margin={{ left: 'small' }} size="small" color="status-critical">
//         * Required Field
//         </Text>
//     </Form>
//   </Box>

// );


export default Signin;