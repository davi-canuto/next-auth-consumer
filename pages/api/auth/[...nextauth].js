import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    {
      id: "bj",
      name: "BJ",
      type: "oauth",
      authorization: "http://api.lvh.me:3000/oauth/authorize",
      token: "http://api.lvh.me:3000/oauth/token/info",
      clientId: process.env.BJ_CLIENT_ID,
      clientSecret: process.env.BJ_CLIENT_SECRET,
    },
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
export default NextAuth(authOptions);
