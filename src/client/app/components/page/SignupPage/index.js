import React from 'react';
import Helmet from 'react-helmet';

import { Wrapper, Inner, Center } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loci from '../../atoms/Loci';
import LogoImage from '../../atoms/LogoImage';

export const SignupPage = (params) => {
  return (
    <Wrapper>
      <Helmet defaultTitle="New Admin" />
      <Center>
        <LogoImage />
        <br />
        <Inner>
          <Loci type="H5">New Admin</Loci>
          <Input placeholder="Email" id="email" name="email" />
          <Input placeholder="Password" id="password" name="password" />
          <Input placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" />
          <Button block="true">SIGNUP</Button>
        </Inner>
        <Button link="true" block="true" asLink="true" to="/login">Have an admin account? Login</Button>
      </Center>
    </Wrapper>
  );
}

export default SignupPage;