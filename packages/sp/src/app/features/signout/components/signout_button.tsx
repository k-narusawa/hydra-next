'use client';
import { Button } from '@/app/components/Button';
// import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const SignOutButton: React.FC = () => {
  const router = useRouter();

  const signOut = async () => {
    // await signOut();
    await router.push('/signout');
  };

  return <Button onClick={signOut} disabled={false}>Logout</Button>;
};

export default SignOutButton;
