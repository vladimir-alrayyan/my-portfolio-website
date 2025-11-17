/**
 * Header Component - Navigation and Branding
 * 
 * This component provides the main navigation for the portfolio website.
 * It includes responsive navigation, mobile menu, social links, and resume download functionality.
 * The header is fixed at the top and changes appearance on scroll.
 */

import { useEffect, useState } from 'react'
import { Menu, X, Download, Mail, Github, Linkedin } from 'lucide-react'

interface HeaderProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // State for scroll-based styling changes
  const [isScrolled, setIsScrolled] = useState(false)

  /**
   * Handle scroll events for active section detection and header styling
   * Updates active section based on viewport position
   */
  useEffect(() => {
    const handleScroll = () => {
      // Update header appearance based on scroll position
      setIsScrolled(window.scrollY > 50)
      
      // Determine active section based on viewport position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      // Update active section state
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setActiveSection])

  /**
   * Prevent body scroll when mobile menu is open
   * Prevents background scrolling while menu is active
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
    
    // Cleanup function to reset body styles
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = 'unset'
      document.body.style.width = 'unset'
    }
  }, [isMenuOpen])

  /**
   * Handle navigation clicks with smooth scrolling
   * Accounts for fixed header height when calculating scroll position
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      // Calculate header height for offset (responsive)
      const headerHeight = window.innerWidth >= 768 ? 96 : 80
      const elementPosition = element.offsetTop - headerHeight
      
      // Smooth scroll to target section
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      
      // Close mobile menu if open
      setIsMenuOpen(false)
    }
  }

  // Navigation items for the portfolio sections
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ]

  /**
   * Handle resume download with PDF and text fallback
   * Attempts to download PDF first, falls back to text version if not found
   */
  const handleResumeDownload = async () => {
    try {
      // Attempt to fetch PDF resume
      const pdfResponse = await fetch('/resume/Vladimir_Alrayyan_Resume.pdf')
      
      if (pdfResponse.ok) {
        // PDF found - create download link
        const pdfBlob = await pdfResponse.blob()
        const url = URL.createObjectURL(pdfBlob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'Vladimir_Alrayyan_Resume.pdf'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      } else {
        // PDF not found - throw to fallback
        throw new Error('PDF not found')
      }
    } catch (error) {
      // Fallback to text version
      const resumeData = `VLADIMIR ALRAYYAN
Computer Science Student | Aspiring CyberSecurity & Software Engineer
Email: vladrayyan321@icloud.com | LinkedIn: linkedin.com/in/vladimir-alrayyan | GitHub: github.com/vladimir-alrayyan
Location: Debrecen, Hungary

CAREER OBJECTIVE
Aspiring Computer Science professional passionate about software engineering and cybersecurity. I enjoy exploring system vulnerabilities, understanding attack vectors, and building secure solutions that make technology safer for everyone. Looking forward to applying my full-stack developing skills in innovative projects.

EDUCATION
B.S. Computer Science, University of Debrecen - Graduation: January 2027
Related Coursework: Data Structures & Algorithms, Objects & Design, Computer Organization & Programming, Combinatorics, Object-Oriented Programming, Statistics & Applications

EXPERIENCE
Meta Network – Information Technology Assistant (June 2024 – Dec 2024)
• Helped in identifying and resolving software and hardware issues, improving system performance by 20%
• Assisted Full-Stack java and node.js operations, optimizing workflow efficiency and reducing processing time
• Collaborated with the QA team to debug and deploy solutions, ensuring 99% system uptime

Mining Grid Dubai – Technical Intern (July 2025 – Present)
• Developed and deployed a custom ERC-20 token on Ethereum using Remix IDE and MetaMask, implementing smart contracts with Solidity and managing interactions via Postman and Node.js backend
• Containerized and orchestrated the smart contract backend using Docker for scalable deployment and seamless API integration, ensuring secure and efficient contract execution
• Gained hands-on experience in vulnerability scanning and penetration testing of web applications and APIs using tools like OWASP ZAP, Burp Suite, and SQLmap to identify and mitigate security risks

PROJECTS
EZStore (A Secure file management application) - Developer (Dec 2024 – April 2025)
• Developed a full-stack file storage web application using Java, Next.js, React.js, Git
• Integrated appwrite for secure and scalable file uploads, retrievals, and metadata storage
• Implemented OTP authentication for secure user access and designed a responsive UI using React

SKILLS
Programming Languages: Java, JavaScript, TypeScript, C, MATLAB, HTML/CSS, SQL
Frameworks & Libraries: Next.js, Node.js, React.js, Angular, Tailwind CSS
Tools & Platforms: AWS, Webstorm, Visual Studio, IntelliJ, PyCharm, GitHub, Postman, Docker, OWASP ZAP
Soft Skills: Problem-solving, teamwork, adaptability
Languages: English, Russian, Ukrainian, Arabic, French, Hungarian

CERTIFICATES
• NVIDIA Accelerating Data Engineering Pipelines
• NVIDIA Applications of AI for Anomaly Detection
• NVIDIA Computer Vision for Industrial Inspection
• NVIDIA Fundamentals of Accelerated Data Science
• Microsoft Certified: Security, Compliance, and Identity Fundamentals
• IT Specialist – Cybersecurity, Certificate by Certiport
• IT Specialist – Network security, Certificate by Certiport`

      // Create text file download
      const blob = new Blob([resumeData], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Vladimir_Alrayyan_Resume.txt'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-900/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Branding - V.A. initials */}
          <div className="flex items-center space-x-4 min-w-0">
            <h1 className="text-lg sm:text-xl font-bold gradient-text truncate">
              V.A.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm transition-colors duration-200 hover:text-primary-400 ${
                  activeSection === item.id ? 'text-primary-400 font-medium' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-3 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>
            
            <div className="flex items-center space-x-2">
              <a
                href="mailto:vladrayyan321@icloud.com"
                className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/vladimir-alrayyan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/vladimir-alrayyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Tablet Navigation */}
          <nav className="hidden md:flex lg:hidden items-center space-x-4">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-sm transition-colors duration-200 hover:text-primary-400 ${
                  activeSection === item.id ? 'text-primary-400 font-medium' : 'text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Tablet Actions */}
          <div className="hidden md:flex lg:hidden items-center space-x-2">
            <button
              onClick={handleResumeDownload}
              className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </button>
            
            <a
              href="mailto:vladrayyan321@icloud.com"
              className="p-2 text-gray-300 hover:text-primary-400 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 p-2"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile menu panel */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-dark-900/95 backdrop-blur-md border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-semibold gradient-text">V.A.</h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === item.id 
                          ? 'bg-primary-600/20 text-primary-400 border border-primary-500/30' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-primary-400'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        activeSection === item.id ? 'bg-primary-400' : 'bg-gray-500'
                      }`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </a>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={handleResumeDownload}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors duration-200 mb-4"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download Resume (PDF)</span>
                  </button>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <a
                      href="mailto:vladrayyan321@icloud.com"
                      className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="https://github.com/vladimir-alrayyan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vladimir-alrayyan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Header