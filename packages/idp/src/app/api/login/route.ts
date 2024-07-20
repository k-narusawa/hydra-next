import { hydraAdmin } from '@/app/libs/hydra';

type LoginInputData = {
  username: string;
  password: string;
  challenge: string;
};

export async function POST(request: Request) {
  const input: LoginInputData = await request.json();

  const acceptLogin = await hydraAdmin.acceptOAuth2LoginRequest({
    loginChallenge: input.challenge,
    acceptOAuth2LoginRequest: {
      subject: input.username,
      remember: true,
    },
  });

  console.log(acceptLogin);

  if (acceptLogin.status !== 200) {
    return Response.error();
  }

  return Response.json(acceptLogin.data);
}
