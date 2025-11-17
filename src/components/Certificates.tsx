import { Award, Calendar, ExternalLink } from 'lucide-react'
import { certificates } from '../data'

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding bg-dark-800/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Certificates
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div key={cert.id} className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-600/20 rounded-lg">
                      <Award className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{cert.name}</h3>
                      <p className="text-primary-400 font-medium">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-200"
                      aria-label="View Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates