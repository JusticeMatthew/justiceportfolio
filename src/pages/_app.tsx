import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matthew Justice | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Portfolio website for Matthew Justice"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Matthew Justice Portfolio" />
        <meta
          property="og:description"
          content="Front-End Developer/UI & UX designer Matthew Justice's portfolio website"
        />
        <meta property="og:image" content="/opengraphimg.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
