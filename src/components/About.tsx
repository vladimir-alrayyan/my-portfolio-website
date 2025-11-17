/**
 * About Component - Personal Information and Education
 * 
 * This component displays personal information, education details, and career objectives.
 * It provides a comprehensive overview of the portfolio owner's background and academic journey.
 */

import { User, Calendar, BookOpen, MapPin } from 'lucide-react'
import { personalInfo, education } from '../data'

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          {/* Personal information and education grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Personal information card */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Personal Information</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-primary-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-primary-400" />
                  <span>Graduating January 2027</span>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-primary-400 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-white">{education.degree}</h4>
                <p className="text-primary-400">{education.university}</p>
                <p className="text-gray-300 text-sm">{education.graduationDate}</p>
              </div>
            </div>
          </div>

          {/* Career objective section */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Career Objective</h3>
            <p className="text-gray-300 leading-relaxed text-center">
              {personalInfo.description}
            </p>
          </div>

          {/* Key coursework section */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Key Coursework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.coursework.map((course, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span className="text-gray-300 text-sm">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About