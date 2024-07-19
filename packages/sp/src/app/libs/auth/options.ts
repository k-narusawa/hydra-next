import { HydraProvider } from '@/app/libs/auth/providers/hydra';
import type { NextAuthOptions } from 'next-auth';

export const options: NextAuthOptions = {
  debug: true,
  session: { strategy: 'jwt' },
  providers: [HydraProvider],
  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      // 注意: トークンをログ出力してはダメです。
      console.log('in jwt', { user, token, account, profile });

      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      console.log('in session', { session, token });
      token.accessToken;
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
  },
};
