import React from 'react';
import Helmet from 'react-helmet';

import { Wrapper, Inner, Center } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loci from '../../atoms/Loci';
import LogoImage from '../../atoms/LogoImage';

export const LoginPage = (params) => {
  return (
    <Wrapper>
      <Helmet defaultTitle="Admin Login" />
      <Center>
        <LogoImage />
        <br />
        <Inner>
          <Loci type="H5">Admin Login</Loci>
          <Input placeholder="Email" id="email" name="email" />
          <Input placeholder="Password" id="password" name="password" />
          <Button block>LOGIN</Button>
        </Inner>
        <Button link="true" block="true" asLink="true" to="/signup">Don't an admin account? Signup</Button>
      </Center>
    </Wrapper>
  );
}

export default LoginPage;