import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import { Header, Footer } from 'collections';
import { Start, Block, Hero, Plan, Diagram } from 'sections';
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokInit,
  apiPlugin,
  StoryblokComponent,
  useStoryblokState,
  ISbStoryData,
} from '@storyblok/react';
import Page from 'components/Page/Page';

interface MoreProps {
  header: ISbStoryData<any> | null;
  footer: ISbStoryData<any> | null;
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
  accessToken: process.env.storyblokApiToken || '',
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps, header, footer }: AppProps & MoreProps) {
  const _header = useStoryblokState(header);
  const _footer = useStoryblokState(footer);
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
      {_header?.content && <StoryblokComponent blok={_header.content} />}
      <Component {...pageProps} />
      {_footer?.content && <StoryblokComponent blok={_footer.content} />}
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const storyblokApi = getStoryblokApi();

  const sbParams: ISbStoriesParams = {
    version: 'draft',
  };

  const fetchData = async () => {
    try {
      const slug1 = 'header';
      const { data: data1 } = await storyblokApi.get(
        `cdn/stories/${slug1}`,
        sbParams,
      );

      const slug2 = 'footer';
      const { data: data2 } = await storyblokApi.get(
        `cdn/stories/${slug2}`,
        sbParams,
      );

      return {
        data1: data1 ? data1.story : null,
        data2: data2 ? data2.story : null,
      };
    } catch (error) {
      console.error('Error:', error);
      return {
        data1: null,
        data2: null,
      };
    }
  };

  const { data1, data2 } = await fetchData();

  let appProps = {};
  if (typeof App.getInitialProps === 'function') {
    appProps = await App.getInitialProps(appContext);
  }

  return {
    ...appProps,
    header: data1,
    footer: data2,
  };
};

export default MyApp;
