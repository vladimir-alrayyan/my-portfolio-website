import { Code, Database, Wrench, Users } from 'lucide-react'
import { skills, languages } from '../data'

const Skills = () => {
  const skillCategories = [
    { icon: Code, category: 'Programming Languages' },
    { icon: Database, category: 'Frameworks & Libraries' },
    { icon: Wrench, category: 'Tools & Platforms' },
    { icon: Users, category: 'Soft Skills' }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skills.map((skillGroup) => {
              const categoryInfo = skillCategories.find(cat => cat.category === skillGroup.category)
              const Icon = categoryInfo?.icon || Code
              
              return (
                <div key={skillGroup.category} className="glass-effect rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-600/20 rounded-lg mr-3">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-primary-500/20 text-primary-300 text-sm rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((language, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg border border-dark-600 hover:border-primary-500/50 transition-colors duration-200"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills