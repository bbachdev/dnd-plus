import NextAuth from "next-auth"
import DiscordProvider from "next-auth/providers/discord"

export const authOptions = {
  // Provider List
  providers: [
    DiscordProvider({
      clientId: String(process.env.DISCORD_CLIENT_ID),
      clientSecret: String(process.env.DISCORD_CLIENT_SECRET)
    })
  ],
  pages: {
    signIn: '/auth/signin',
  }
}

export default NextAuth(authOptions)