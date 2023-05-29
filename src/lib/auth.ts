import SpotifyProvider from "next-auth/providers/spotify";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
  debug: true,
  logger: {
    error: console.log,
  },
};
