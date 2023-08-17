import NextAuth from "next-auth"

export const authOptions = {
  providers: [{
      id: 'bj',
      name: 'Bj',
      type: 'oauth',
      authorization: 'Bearer tiL4YmZDXsI50SKcyKvjh44SNxbGC-NSRByqfUuvFOc',
      clientId: process.env.BJ_CLIENT_ID,
      clientSecret: process.env.BJ_CLIENT_SECRET,
      profile(profile) {
        console.log('profile ', profile)
        return {
          id: profile.id,
          name: profile?.name,
        }
      },
    },
  ],
}
export default NextAuth(authOptions)