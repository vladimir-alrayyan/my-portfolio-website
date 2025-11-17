/**
 * Portfolio Application - Main Component
 * 
 * This is the root component of Vladimir Alrayyan's portfolio website.
 * It manages the overall application state and renders all sections.
 */

import { useState } from 'react'
import { Toaster } from 'sonner'
import About from './components/About'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  // Track the currently active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Fixed header with navigation */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main content with responsive padding to account for fixed header */}
      <main className="pt-20 md:pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      
      {/* Footer with contact information */}
      <Footer />
      
      {/* Toast notifications for user feedback */}
      <Toaster position="top-right" />
    </div>
  )
}

export default App