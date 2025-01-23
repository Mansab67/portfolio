import { useState } from 'react'
import './App.css'

import { Navbar } from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import ContactForm from './Components/Contact'
import Footer from './Components/Footer'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Git from './Components/stat'
function App() {

  return (
    <>
   <Navbar/>
  <Hero/>
  <About  />
  <Skills/>
  <Git/>
  <Projects/>
  <ContactForm/>
  <Footer/>
    </>
  )
}

export default App
