import React from 'react'
import Header from './features/Header/Header'
import Hero from './features/Hero/Hero'
import About from './features/About/About'
import Mascot from './features/Mascot/Mascot'
import Projects from './features/Projects/Projects'
import Services from './features/Services/Services'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Mascot />
        <Projects />
        <Services />
      </main>
    </>
  )
}

export default App
