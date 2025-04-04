import React from 'react'
import './styles/global.css'

import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import SideProjects from './components/sections/SideProjects'
import AboutMe from './components/sections/AboutMe'
import Contact from './components/sections/Contact'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <SideProjects />
      <AboutMe />
      <Contact />
    
    </>
  )
}

export default App
