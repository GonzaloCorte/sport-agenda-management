import NextAuth from "next-auth/next";
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

const handler =  NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
      version: "2.0"
    })
  ]
  // , callbacks: {
  //   async signIn({ session }) {
  //     return session
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl
  //   },
  //   async session({ session, user, token }) {
  //     return session
  //   },
  // }
});
export { handler as GET, handler as POST };