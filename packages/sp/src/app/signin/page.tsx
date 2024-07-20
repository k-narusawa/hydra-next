import SignIn from '@/app/features/signin/components/signin';
import { options } from '@/app/libs/auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    return <SignIn />;
  }

  redirect('/');
};

export default SignInPage;
