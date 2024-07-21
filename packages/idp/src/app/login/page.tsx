import LoginForm from '@/app/features/login/components/LoginForm';
import { hydraAdmin } from '@/app/libs/hydra';
import { OAuth2ApiGetOAuth2LoginRequestRequest } from '@ory/hydra-client';

const LoginPage = async ({
  searchParams,
}: {
  searchParams: { login_challenge: string };
}) => {
  const loginChallenge = searchParams.login_challenge;
  const loginRequest: OAuth2ApiGetOAuth2LoginRequestRequest = {
    loginChallenge: loginChallenge,
  };

  const response = await hydraAdmin.getOAuth2LoginRequest(loginRequest);
  console.log(response.data);

  if (response.data.skip) {
    return (
      <div>
        <LoginForm loginChallenge={loginChallenge} canSkip={true} />
      </div>
    );
  }

  return (
    <div>
      <LoginForm loginChallenge={loginChallenge} canSkip={false} />
    </div>
  );
};

export default LoginPage;
