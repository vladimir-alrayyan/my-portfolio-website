/**
 * Hero Component - Landing Section
 * 
 * This component serves as the main landing section of the portfolio.
 * It displays the personal introduction, contact information, and social links.
 * Features a gradient background with smooth scroll functionality.
 */

import { ChevronDown, Mail, Github, Linkedin } from 'lucide-react'
import { personalInfo } from '../data'

const Hero = () => {
  /**
   * Smooth scroll to target section
   * Used for the "Scroll to explore" button
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      {/* Background gradient with radial overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Personal introduction */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4">
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2">
              {personalInfo.title}
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-6 sm:mb-8">
              <span>📍</span>
              <span className="text-sm sm:text-base">{personalInfo.location}</span>
            </div>
          </div>

          {/* Personal description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            {personalInfo.description}
          </p>

          {/* Call-to-action buttons and social links */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 mb-8 sm:mb-12">
            {/* Contact button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            >
              <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
              <span>Get In Touch</span>
            </a>
            
            {/* Social media links */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 sm:w-6 h-5 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 animate-bounce"
          >
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 sm:w-6 h-5 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero