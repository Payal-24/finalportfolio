'use client';

import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'C++', level: 85 },
        { name: 'Java', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
      ],
    },
    {
      title: 'Core Subjects',
      icon: '📚',
      skills: [
        { name: 'Data Structures', level: 80 },
        { name: 'Algorithms', level: 75 },
        { name: 'OOP Concepts', level: 85 },
        { name: 'DBMS', level: 70 },
        { name: 'Operating Systems', level: 72 },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Linux', level: 75 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'React/Next.js', level: 80 },
      ],
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
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-pink-400/5 rounded-full filter blur-3xl"></div>
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass card-hover rounded-2xl p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-yellow-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <motion.div
                      className="w-full h-2 bg-white/10 dark:bg-slate-800/50 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: skillIndex * 0.1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        style={{ transformOrigin: 'left' }}
                      ></motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass card rounded-2xl"
        >
          <h3 className="text-xl font-bold mb-6">Tech Stack & Frameworks</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'MongoDB',
              'REST APIs',
              'Git',
              'Figma',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="badge"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
