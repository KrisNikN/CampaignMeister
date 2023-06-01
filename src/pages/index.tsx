import { NextPage } from 'next';
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokEditable,
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
  story: {
    content: {
      Sections: any[];
    };
  };
}

const Home: NextPage<HomeProps> = ({ story }) => {
  const Sections = story.content.Sections;
  const heroSectionProps: HeroProps = Sections[0];
  const diagramSectionProps: DiagramProps = Sections[1];
  const blocksSectionProps: BlockProps = Sections[2];
  const planSectionProps: PlanProps = Sections[3];
  const startSectionProps: StartProps = Sections[4];
  // console.log(heroSectionProps);
  // console.log(story);
  return (
    <main {...storyblokEditable(story.content)}>
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
  // console.log('getStaticProps executed');
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
