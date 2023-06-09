import { NextPage } from 'next';
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
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const session = useSession();
  console.log(session);

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
