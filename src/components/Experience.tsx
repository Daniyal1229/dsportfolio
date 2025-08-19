import { motion } from 'framer-motion';
import { experience } from '../data/content';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section-padding" style={{ background: 'linear-gradient(to bottom right, #0f172a, rgba(147, 51, 234, 0.05), #0f172a)' }}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            My professional journey in software development, showcasing the projects and technologies I've worked with.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-purple-300 hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 hidden lg:block" style={{ borderColor: '#0f172a' }}></div>

                <div className={`lg:ml-16 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-24'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect p-8 rounded-xl card-hover"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-purple-400 font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 lg:mt-0">
                        <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 text-white/80"
                          >
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <h4 className="text-purple-400 font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-white/80 rounded-full text-sm font-medium border border-white/20"
                              style={{ backgroundColor: '#334155' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-white/70 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 