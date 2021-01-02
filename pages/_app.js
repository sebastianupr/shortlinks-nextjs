import { useState } from 'react'
import Head from 'next/head'
import 'styles/globals.css'
import '../styles/Normal.css'
import Context from 'Context/Context'

export default function MyApp ({ Component, pageProps }) {
  const { Provider } = Context
  const [shortersLinks, setShortesLinks] = useState([])

  const state = {
    shortersLinks,
    setShortesLinks
  }

  return (
    <Provider value={state}>
      <Head>
        <title>Create Next App</title>
        {/* Normalize 8.0.1 */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
        {/* Popins font */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap" rel="stylesheet"></link>
        {/* FontAwesome */}
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin='anonymous'/>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}
