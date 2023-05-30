import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from 'styles';
import { Header, Footer } from 'collections';
import { headerProps, footerProps } from 'data';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';
// import { storyblokInit, apiPlugin } from '@storyblok/react';

// storyblokInit({
//   accessToken: process.env.storyblokApiToken,
//   use: [apiPlugin],
// });

function MyApp({ story, Component, pageProps: { ...pageProps } }: AppProps) {
  console.log(story);
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

export default MyApp;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'headerfooter';

  // load the draft version
  let sbParams: ISbStoriesParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  console.log('getStaticProps executed');
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
