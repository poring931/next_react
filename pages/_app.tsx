import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next</title>
        <meta name="description" content="Generated by create next app" />
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
