import { NextPage } from 'next';
import { getStoryblokApi, ISbStoriesParams } from '@storyblok/react';
import { Container } from 'components';
import { Hero, Diagram, Block, Plan, Start } from 'sections';
import Image from 'next/image';

import {
  heroSectionProps,
  diagramSectionProps,
  blocksSectionProps,
  planSectionProps,
  startSectionProps,
  joinFormProps,
} from 'data';

interface HomeProps {
  story: any;
}

const extractDimensionsFromUrl = (
  url: string,
): { width: number; height: number } | null => {
  const matches = url.match(/\/(\d+)x(\d+)\//);
  if (matches && matches.length === 3) {
    const width = parseInt(matches[1], 10);
    const height = parseInt(matches[2], 10);
    return { width, height };
  }
  return null;
};

const Home: NextPage<HomeProps> = ({ story }) => {
  // console.log(story.content.Sections[0].image.filename);
  const image = story.content.Sections[0].image;
  const src = story.content.Sections[0].image.filename;
  const props = extractDimensionsFromUrl(src);
  return (
    <main>
      <Image
        {...image}
        src={src}
        {...props}
        layout='intrinsic'
        is_external_url='false'
      />
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
