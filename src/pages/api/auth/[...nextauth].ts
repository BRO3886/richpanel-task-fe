import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { putToken } from "../../../lib/api"

export default NextAuth({
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  debug: true,
  callbacks: {
    async signIn(user, account, profile) {
      // if (user.email) {
      //   putToken(user.email, account.accessToken)
      // }
      return true
    },
    // async jwt(token, user, account, profile, isNewUser) {
    //   if (account) {
    //     token.accountId = account.id
    //     token.accessToken = account.accessToken
    //   }
    //   return token
    // },
    async session(session, token) {
      if (token) {
        session.accountId = token.accountId
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  session: { jwt: true },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
})
