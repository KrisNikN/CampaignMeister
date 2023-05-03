import { NextPage } from 'next'
import { Container } from 'components'
import { Hero, Diagram, Block, Plan } from 'sections'

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Diagram />
        <Block />
        <Plan />
      </Container>
    </main>
  )
}

export default Home
