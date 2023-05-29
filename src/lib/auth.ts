import SpotifyProvider from "next-auth/providers/spotify";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.SECRET,
  callbacks: {
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
