import './App.css'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Preloader from './components/PreLoader'
import ProjectDisplay from './pages/ProjectDisplay'

function App () {
  const [load, upadateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <Router>
        <Preloader load={load} />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App
