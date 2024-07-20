import { hydraAdmin } from '@/app/libs/hydra';
import { redirect } from 'next/navigation';

const LogoutPage = async ({
  searchParams,
}: {
  searchParams: { logout_challenge: string };
}) => {
  const logoutChallenge = searchParams.logout_challenge;

  const resp1 = await hydraAdmin.getOAuth2LogoutRequest({ logoutChallenge });
  console.log(resp1);

  const resp2 = await hydraAdmin.acceptOAuth2LogoutRequest({ logoutChallenge });

  if (resp2.status !== 200) {
    console.error('Failed to accept logout request');
    await redirect('/error');
  }

  const redirectTo = resp2.data.redirect_to;
  await redirect(redirectTo);
  return;
};

export default LogoutPage;
