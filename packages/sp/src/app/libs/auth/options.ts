import { HydraProvider } from '@/app/libs/auth/providers/hydra';
import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [HydraProvider],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (account) {
        token.sub = user.id;
        token.accessToken = account?.access_token;
        token.refreshToken = account?.refresh_token;
        token.idToken = account?.id_token;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (token.accessToken && token.refreshToken && token.idToken) {
        return {
          ...session,
          user: {
            ...session.user,
            id: token.sub,
            accessToken: token.accessToken,
            refreshToken: token.refreshToken,
            idToken: token.idToken,
          },
        };
      }
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
};
