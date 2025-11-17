/**
 * Experience Component - Professional Experience Timeline
 * 
 * This component displays professional experience in a timeline format.
 * Each experience includes job title, company, duration, location, and key responsibilities.
 */

import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data'

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline line - connects experiences */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-primary-500/30" />
              )}
              
              {/* Experience card */}
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline dot with briefcase icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                {/* Experience details */}
                <div className="flex-1 glass-effect rounded-xl p-6">
                  {/* Job title and company */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                      <p className="text-primary-400 font-medium">{exp.company}</p>
                    </div>
                    
                    {/* Duration and location */}
                    <div className="text-sm text-gray-400 mt-2 sm:mt-0">
                      <div className="flex items-center space-x-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Job responsibilities */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 text-sm leading-relaxed flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies used */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs rounded-full border border-primary-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience