import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Toolbox from './components/Toolbox.jsx'
import Experience from './components/Experience.jsx'
import Strengths from './components/Strengths.jsx'
import Education from './components/Education.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Toolbox />
        <Experience />
        <Strengths />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}