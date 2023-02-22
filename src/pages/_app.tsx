import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Header from '@/components/Header'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header/>
      <div className='bg-slate-900 min-h-screen text-white'>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
