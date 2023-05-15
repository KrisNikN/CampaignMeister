import { NextPage } from 'next'
import { Container } from 'components'
import { Hero, Diagram, Block, Plan, Start } from 'sections'
import {
  HeroSectionProps,
  DiagramSectionProps,
  BlocksSectionProps,
  PlanSectionProps,
} from 'data'

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Hero {...HeroSectionProps} />
        <Diagram {...DiagramSectionProps} />
        <Block {...BlocksSectionProps} />
        <Plan {...PlanSectionProps} />
        <Start />
      </Container>
    </main>
  )
}

export default Home
