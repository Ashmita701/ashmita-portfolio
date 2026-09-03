import { LazyMotion, domAnimation } from 'framer-motion'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Certification } from './sections/Certification'
import { Contact } from './sections/Contact'
import { Education } from './sections/Education'
import { Experience } from './sections/Experience'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Navbar />
      <main>
        <Hero />
        {/* <TechnologyShowcase /> */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certification />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  )
}

export default App
