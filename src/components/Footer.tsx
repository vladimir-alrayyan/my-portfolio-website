import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-800/50 border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:vladrayyan321@icloud.com"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/vladimir-alrayyan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vladimir-alrayyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="text-gray-400 text-sm">
              <p className="mb-2">
                Built with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> and modern web technologies
              </p>
              <p>
                © {currentYear} Vladimir Alrayyan. All rights reserved.
              </p>
            </div>

            <div className="text-xs text-gray-500">
              <p>Computer Science Student | University of Debrecen</p>
              <p>Aspiring CyberSecurity & Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer