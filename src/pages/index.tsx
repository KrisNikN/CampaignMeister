import { NextPage } from 'next';
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokEditable,
  StoryblokComponent,
  useStoryblokState,
  ISbStoryData,
} from '@storyblok/react';
import { Container } from 'components';
import Image from 'next/image';
import {
  Hero,
  Diagram,
  Block,
  Plan,
  Start,
  HeroProps,
  DiagramProps,
  BlockProps,
  PlanProps,
  StartProps,
} from 'sections';

interface HomeProps {
  story: ISbStoryData<{ Sections: any[] }> | null;
}

const Home: NextPage<HomeProps> = ({ story }) => {
  const _story = useStoryblokState(story);
  return (
    <main>
      <Container>
        {_story && <StoryblokComponent blok={_story.content} />}
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
  // console.log('getStaticProps executed');
  return {
    props: {
      story: data ? data.story : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
