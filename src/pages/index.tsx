import { NextPage } from 'next';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';
import { Container } from 'components';
import { Hero, Diagram, Block, Plan, Start } from 'sections';

import {
  heroSectionProps,
  diagramSectionProps,
  blocksSectionProps,
  planSectionProps,
  startSectionProps,
  joinFormProps,
} from 'data';

interface HomeProps {
  story: any; // Replace `any` with the type of your `story` object
}

const Home: NextPage<HomeProps> = ({ story }) => {
  console.log(story);
  return (
    <main>
      <Container>
        <Hero {...heroSectionProps} />
        <Diagram {...diagramSectionProps} />
        <Block {...blocksSectionProps} />
        <Plan {...planSectionProps} />
        <Start {...startSectionProps} />
      </Container>
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = 'home';

  // load the draft version
  let sbParams: ISbStoriesParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
