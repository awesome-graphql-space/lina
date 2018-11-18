import React from 'react';

import { Wrapper, Inner, Center } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loci from '../../atoms/Loci';
import LogoImage from '../../atoms/LogoImage';

export const LoginPage = (params) => {
  return (
    <Wrapper>
      <Center>
        <LogoImage />
        <br />
        <Inner>
          <Loci type="H5">Lina Admin Login</Loci>
          <Input placeholder="Email" id="email" name="email" />
          <Input placeholder="Password" id="password" name="password" />
          <Button block>LOGIN</Button>
        </Inner>
        <Button link block asLink to="/signup">Don't an admin account? Signup</Button>
      </Center>
    </Wrapper>
  );
}

export default LoginPage;