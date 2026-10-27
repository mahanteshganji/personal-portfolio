import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Project from "./components/Project";
import Experience from './components/Experience.jsx'
import  Contact  from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'

const App = () => {
  return (
     <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App