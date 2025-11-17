/**
 * Projects Component - Portfolio Projects Showcase
 * 
 * This component displays the portfolio owner's projects with descriptions,
 * technologies used, and links to GitHub repositories and live demos.
 * Each project is presented in a card format with hover effects.
 */

import { Github, ExternalLink, Calendar, Code } from 'lucide-react'
import { projects } from '../data'

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Project cards */}
          {projects.map((project) => (
            <div key={project.id} className="glass-effect rounded-xl p-6 mb-8 hover:bg-white/5 transition-all duration-300">
              {/* Project header with title and links */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  {project.period && (
                    <div className="flex items-center text-gray-400 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{project.period}</span>
                    </div>
                  )}
                </div>
                
                {/* Project links */}
                <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies used */}
              <div className="flex items-center space-x-2 mb-4">
                <Code className="w-4 h-4 text-primary-400" />
                <span className="text-sm font-medium text-primary-400">Technologies Used:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-action for more projects */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/vladimir-alrayyan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects