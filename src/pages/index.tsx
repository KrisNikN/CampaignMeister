import { NextPage } from 'next'
import { Container } from 'components'
import { Hero, Diagram, Block } from 'sections'

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Diagram />
        <Block />
      </Container>
    </main>
  )
}

export default Home
