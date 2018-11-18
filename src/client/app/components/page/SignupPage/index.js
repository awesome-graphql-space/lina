import React from 'react';

import { Wrapper, Inner, Center } from './styles';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Loci from '../../atoms/Loci';
import LogoImage from '../../atoms/LogoImage';

export const SignupPage = (params) => {
  return (
    <Wrapper>
      <Center>
        <LogoImage />
        <br />
        <Inner>
          <Loci type="H5">Lina Admin Signup</Loci>
          <Input placeholder="Email" id="email" name="email" />
          <Input placeholder="Password" id="password" name="password" />
          <Input placeholder="Confirm Password" id="confirmPassword" name="confirmPassword" />
          <Button block>SIGNUP</Button>
        </Inner>
        <Button link block asLink to="/login">Have an admin account? Login</Button>
      </Center>
    </Wrapper>
  );
}

export default SignupPage;