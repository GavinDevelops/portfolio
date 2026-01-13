import { Layout } from '@/components/layout'
import { Hero, About, Skills, Projects, Services, Contact } from '@/components/sections'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </Layout>
  )
}

export default App
