import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      accessToken: string;
      refreshToken: string;
      idToken: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    sub: string;
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
  }
}
