import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className='font-circular'>
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
