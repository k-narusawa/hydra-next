'use client';
import { signIn } from 'next-auth/react';

const SignIn = () => {
  signIn('hydra');
  return <></>;
};

export default SignIn;
