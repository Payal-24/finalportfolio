'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    'B.Tech Computer Science Engineering Student',
    'Passionate about Software Development',
    'Learning Data Structures & Algorithms',
    'Exploring Web Development Technologies',
    'Solving Coding Problems Regularly',
    'Committed to Continuous Learning'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -left-32 w-96 h-96 bg-pink-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-32 w-96 h-96 bg-purple-400/5 rounded-full filter blur-3xl"></div>
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass card-hover rounded-2xl">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
                I&apos;m a 3rd-year B.Tech Computer Science Engineering student from Punjab, India, 
                with a passion for technology and problem-solving. My journey in tech started with a 
                curiosity about how things work, which has evolved into a commitment to mastering 
                software development.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Currently, I&apos;m focused on strengthening my foundations in Data Structures and Algorithms,
                exploring modern web development frameworks, and building real-world projects that solve 
                meaningful problems. I believe in continuous learning and love the challenge of competitive 
                programming.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass card rounded-lg p-4 flex items-center gap-3 hover:glass-light transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <span className="font-medium text-slate-700 dark:text-slate-300">{highlight}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: 'Year', value: '3rd' },
            { label: 'CGPA', value: '8.94' },
            { label: 'Projects', value: '5+' },
            { label: 'Learning', value: 'DSA & Web' },
          ].map((stat, index) => (
            <div key={index} className="glass card rounded-xl text-center p-6 hover:glass-light transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
