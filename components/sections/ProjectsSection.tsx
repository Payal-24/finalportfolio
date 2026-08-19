'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'cinbot',
      description:
        'An interactive conversational chatbot that helps users search for movies, manage a personalized watchlist, and find out about the latest releases.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      github: 'https://github.com/Payal-24/movieSearchchatBot',
      live: 'https://movie-searchchat-bot.vercel.app',
      image: '🤖',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and dark mode support.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/Payal-24/finalportfolio',
      live: '#',
      image: '🌐',
    },
    {
      id: 3,
      title: 'Romify',
      description:
        'An e-commerce website featuring AR (Augmented Reality) visualization. Users can check in 3D using their camera to see how furniture, like a chair, fits and looks in their home.',
      tech: ['React', 'Next.js', 'Node.js', 'Express', 'Vite'],
      github: 'https://github.com/Payal-24/RomifyProject',
      live: 'https://romify-project.vercel.app',
      image: '🛋️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-purple-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-pink-400/5 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group card-hover rounded-2xl overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full h-48 bg-gradient-to-br from-yellow-400/20 to-pink-400/20 flex items-center justify-center text-6xl rounded-xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.github === '#' ? (
                    <button
                      disabled
                      className="flex-1 btn-secondary flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                    >
                      <Code size={18} />
                      Code
                    </button>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-secondary flex items-center justify-center gap-2 group/btn text-center"
                    >
                      <Code size={18} className="group-hover/btn:animate-bounce" />
                      Code
                    </a>
                  )}
                  {project.live === '#' ? (
                    <button
                      disabled
                      className="flex-1 btn-primary flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </button>
                  ) : (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn text-center"
                    >
                      <ExternalLink size={18} className="group-hover/btn:animate-bounce" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
