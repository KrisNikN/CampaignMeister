import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import { Header, Footer } from 'collections';
import { SessionProvider } from 'next-auth/react';
import { headerProps, footerProps } from 'data';

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>CampaignMeister</title>
        <meta name='description' content='app description goes here' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, user-scalable=no'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <SessionProvider>
        <Header {...headerProps} />
        <Component {...pageProps} />
        <Footer {...footerProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
