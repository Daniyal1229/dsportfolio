import { motion } from 'framer-motion';
import { personalInfo, skills, education } from '../data/content';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-dark-800 via-purple-900/10 to-dark-800">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - About Me */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg bg-gray-800 flex items-center justify-center">
                  <img
                    src="/profile.png?v=1"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 'center 20%',
                      minWidth: '100%',
                      minHeight: '100%'
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{personalInfo.name}</h3>
                  <p className="text-purple-400 font-medium">{personalInfo.role}</p>
                  <p className="text-white/70 text-sm">{personalInfo.location}</p>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed text-lg">
                {personalInfo.about}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Email</h4>
                  <p className="text-white/80 text-sm">{personalInfo.email}</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">Phone</h4>
                  <p className="text-white/80 text-sm">{personalInfo.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Education */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Skills</h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-effect p-6 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="text-purple-400 text-sm font-medium">{edu.duration}</span>
                    </div>
                    <p className="text-white/70 mb-1">{edu.institution}</p>
                                          <p className="text-purple-300 text-sm">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 