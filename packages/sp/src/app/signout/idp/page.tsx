import { options } from '@/app/libs/auth/options';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const IdpSignOutPage = async () => {
  const session = await getServerSession(options);

  if (!session || !session.user || !session.user.idToken) {
    await redirect('/signin');
    return;
  }

  const baseUrl = `${process.env.HYDRA_PUBLIC_URL}/oauth2/sessions/logout`;
  const params = new URLSearchParams({
    post_logout_redirect_uri: `${process.env.NEXT_PUBLIC_URL}/signout`,
    id_token_hint: session.user.idToken,
  });

  const url = new URL(baseUrl);
  url.search = params.toString();

  await redirect(url.toString());
};

export default IdpSignOutPage;
