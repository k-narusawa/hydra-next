'use client';
import { signOut } from 'next-auth/react';

const SignOutPage = () => {
  signOut({ callbackUrl: '/' });
};

export default SignOutPage;
