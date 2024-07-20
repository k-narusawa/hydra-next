import { Provider } from 'next-auth/providers';

export const HydraProvider: Provider = {
  id: process.env.HYDRA_CLIENT_NAME!,
  name: process.env.HYDRA_CLIENT_NAME!,
  clientId: process.env.HYDRA_CLIENT_ID!,
  clientSecret: process.env.HYDRA_CLIENT_SECRET!,
  type: 'oauth',
  version: '2.0',
  authorization: {
    params: {
      scope: 'openid offline',
      redirect_uri: `${process.env.NEXT_PUBLIC_URL}/api/auth/callback/hydra`,
    },
  },
  wellKnown: `${process.env.HYDRA_PUBLIC_URL}/.well-known/openid-configuration`,

  profile: (profile: any) => {
    return {
      id: profile.sub,
    };
  },
};
