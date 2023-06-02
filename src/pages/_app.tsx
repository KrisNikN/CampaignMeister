import type { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import App from 'next/app';
import { theme, GlobalStyles } from 'styles';
import { Header, Footer, HeaderProps, FooterProps } from 'collections';
import { Start, Block, Hero, Plan, Diagram } from 'sections';
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokInit,
  apiPlugin,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';
import Page from 'components/Page/Page';

interface MoreProps {
  data: {
    content: any;
  };
}

const components = {
  hero: Hero,
  page: Page,
  start: Start,
  blocks: Block,
  diagram: Diagram,
  header: Header,
  footer: Footer,
  plan: Plan,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps, data }: AppProps & MoreProps) {
  data = useStoryblokState(data);
  const headerProps = data.content;
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
      <StoryblokComponent blok={headerProps} />
      <Component {...pageProps} />
      {/* <Footer {...footerProps} /> */}
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const storyblokApi = getStoryblokApi();
  const slug = 'header';

  const sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log(data);

  let appProps = {};
  if (typeof App.getInitialProps === 'function') {
    appProps = await App.getInitialProps(appContext);
  }

  return {
    ...appProps,
    header: data ? data.story : null,
  };
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const storyblokApi = getStoryblokApi();
  const slug = 'footer';
  const sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log(data);

  let appProps = {};
  if (typeof App.getInitialProps === 'function') {
    appProps = await App.getInitialProps(appContext);
  }

  return {
    ...appProps,
    footer: data ? data.story : null,
  };
};

export default MyApp;
