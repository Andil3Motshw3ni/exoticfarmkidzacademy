import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Exotic Farm Kidz Academy - Farm-based early learning programs for children ages 2-8. Fun outdoor activities, animal interactions, and safe play." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&family=Nunito:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <title>Exotic Farm Kidz Academy</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
