import Header from './components/ui/header'
import './App.css'
//import Hero from './components/hero'
import Page1 from './pages/page1'
import Parallax from './components/parallax/parallax'
import Skills from './components/skills'
import Projects from './components/projects'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Contact from './components/contact/contact'
import Footer from './components/footer'
import GradientCursor from './components/cursorStyle'

function App() {
  return (

    <div>
      <section id="Homepage">
        <Header />
        <Page1 />
      </section>
      <section id='About'><Page2 /></section>
      <section><Page3 /></section>

      <section id="Skills"><Parallax type="skills" /></section>
      <section><Skills /></section>
      <section id="Projects"><Parallax type="Projects" /></section>
      <Projects />
      <section id="Contact"><Contact /></section>
      <Footer />
      <GradientCursor />

    </div>
  )
}

export default App
