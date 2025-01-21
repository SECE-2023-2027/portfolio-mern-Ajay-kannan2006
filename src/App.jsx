import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home/Home'
import Navbar from './Home/NavBar'
import AboutMe from './AboutMe/About'
import Projects from './Projects/Project'
function App() {

  return (
    <>
      <Home />
      <AboutMe />
      <Projects />
    </>
  )
}

export default App
