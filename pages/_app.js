import Head from 'next/head'
import { Provider } from 'Context'

import 'normalize.css/normalize.css'

import 'styles/globals.css'
import '../styles/Normal.css'

export default function App ({ Component, pageProps }) {
  return (
    <Provider>
      <Head>
        <title>Short links App - Sebastianupr</title>

        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </Provider>
  )
}
