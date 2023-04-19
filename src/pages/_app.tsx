import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { Layout } from '@/components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Matthew Justice | Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Matthew Justice"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
