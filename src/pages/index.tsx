import { NextPage } from 'next'
import { Container } from 'components'
import { Hero, Diagram } from 'sections'

const Home: NextPage = () => {
  return (
    <main>
      <Container>
        <Hero />
        <Diagram />
      </Container>
    </main>
  )
}

export default Home
