import { hydraAdmin } from '@/app/libs/hydra';
import { redirect } from 'next/navigation';

const ConsentPage = async ({
  searchParams,
}: {
  searchParams: { consent_challenge: string };
}) => {
  const consentChallenge = searchParams.consent_challenge;

  const response = await hydraAdmin.acceptOAuth2ConsentRequest({
    consentChallenge: consentChallenge,
    acceptOAuth2ConsentRequest: {
      grant_scope: ['openid', 'offline'],
      remember: true,
      remember_for: 3600,
    },
  });

  if (response.status !== 200) {
    redirect('/error');
  }

  redirect(response.data.redirect_to);
};

export default ConsentPage;
