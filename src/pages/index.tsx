import { NextPage } from 'next'
import { Container } from 'components'
import { Hero, Diagram, Block, Plan, Start } from 'sections'

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Diagram />
        <Block />
        <Plan />
        <Start />
      </Container>
    </main>
  )
}

export default Home
