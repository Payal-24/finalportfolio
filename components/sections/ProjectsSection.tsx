'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Student Management System',
      description:
        'A comprehensive desktop application for managing student records with features like enrollment, grade management, and report generation.',
      tech: ['C++', 'Data Structures', 'File Handling'],
      github: '#',
      live: '#',
      image: '📊',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and dark mode support.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      github: '#',
      live: '#',
      image: '🌐',
    },
    {
      id: 3,
      title: 'Movie Search Application',
      description:
        'A web application that allows users to search for movies, view details, and save favorites using the TMDB API.',
      tech: ['JavaScript', 'React', 'REST API'],
      github: '#',
      live: '#',
      image: '🎬',
    },
    {
      id: 4,
      title: 'Weather App',
      description:
        'A real-time weather application that displays current weather conditions and forecasts for any location worldwide.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: '#',
      live: '#',
      image: '🌤️',
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
                  <button className="flex-1 btn-secondary flex items-center justify-center gap-2 group/btn">
                    <Code size={18} className="group-hover/btn:animate-bounce" />
                    Code
                  </button>
                  <button className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn">
                    <ExternalLink size={18} className="group-hover/btn:animate-bounce" />
                    Demo
                  </button>
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
