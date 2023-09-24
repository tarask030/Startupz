import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname)
    }
  }, [])

  return (
    <main>
      <Analytics />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
