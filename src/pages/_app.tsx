import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log('app.tsx')
  return <Component {...pageProps} />
}
