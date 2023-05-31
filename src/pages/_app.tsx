import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import { theme, GlobalStyles } from 'styles';
import { Header, Footer, HeaderProps, FooterProps } from 'collections';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';

function MyApp({ Component, pageProps, data }: AppProps & { data: any }) {
  const headerProps: HeaderProps = data.content.Blocks[0];
  const footerProps: FooterProps = data.content.Blocks[1];
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
      <Header {...headerProps} />
      <Component {...pageProps} />
      <Footer {...footerProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const storyblokApi = getStoryblokApi();
  const slug = 'headerfooter';
  const sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  // console.log('getInitialProps executed');

  let appProps = {};
  if (typeof App.getInitialProps === 'function') {
    appProps = await App.getInitialProps(appContext);
  }

  return {
    ...appProps,
    data: data ? data.story : null,
  };
};

export default MyApp;
