import { Provider } from 'next-auth/providers';

export const HydraProvider: Provider = {
  id: process.env.HYDRA_CLIENT_NAME!,
  name: process.env.HYDRA_CLIENT_NAME!,
  type: 'oauth',
  version: '2.0',
  authorization: {
    params: {
      scope: 'openid offline email',
    },
  },
  wellKnown: `${process.env.HYDRA_PUBLIC_URL}/.well-known/openid-configuration`,
  profile: (profile: any) => {
    return {
      id: profile.id ?? '',
    };
  },
  clientId: process.env.HYDRA_CLIENT_ID!,
  clientSecret: process.env.HYDRA_CLIENT_SECRET!,
};
