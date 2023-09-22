import 'styles/globals.css'

import type { AppProps } from 'next/app'

import localFont from 'next/font/local'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='font-circular'>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
