import { redirect } from 'next/navigation';

const SignOutPage = async () => {
  await redirect(`${process.env.HYDRA_PUBLIC_URL}/oauth2/sessions/logout`);
};

export default SignOutPage;
