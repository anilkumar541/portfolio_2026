import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Project } from './components/sections/Project'
import { Skills } from './components/sections/Skills'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <hr className="border-none border-t border-gray-100 mx-8 max-w-[1200px] lg:mx-auto" />
        <Experience />
        <hr className="border-none border-t border-gray-100 mx-8 max-w-[1200px] lg:mx-auto" />
        <Project />
        <hr className="border-none border-t border-gray-100 mx-8 max-w-[1200px] lg:mx-auto" />
        <Skills />
        <hr className="border-none border-t border-gray-100 mx-8 max-w-[1200px] lg:mx-auto" />
        <Education />
      </main>
      <Contact />
      <Footer />
    </>
  )
}

export default App
