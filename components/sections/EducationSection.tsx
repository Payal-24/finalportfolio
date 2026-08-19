'use client';

import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Chitkara University',
      period: 'Jul 2023 - Present',
      year: '3rd Year (Current)',
      cgpa: '9.01',
      highlights: [
        'Focus on Core CS Fundamentals',
        'Data Structures & Algorithms',
        'Web Development Projects',
        'Competitive Programming',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-32 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < education.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-yellow-400 to-pink-400"></div>
              )}

              {/* Timeline dot */}
              <div className="flex gap-6">
                <div className="relative flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass card-hover rounded-xl p-6 flex-1 mb-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-lg text-yellow-400 font-semibold">
                        {item.institution}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-3xl font-bold gradient-text">{item.cgpa}</div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">CGPA</p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4">
                    <Calendar size={18} />
                    <span className="font-medium">{item.period}</span>
                    <span className="badge ml-auto">{item.year}</span>
                  </div>

                  {/* Highlights */}
                  <div className="grid md:grid-cols-2 gap-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Coursework', value: 'DSA, DBMS, OS, OOP' },
            { label: 'Activities', value: 'Coding Clubs, Hackathons' },
            { label: 'Focus', value: 'Problem Solving & Web Dev' },
          ].map((info, index) => (
            <div key={index} className="glass card rounded-xl text-center p-6 hover:glass-light transition-all duration-300">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{info.label}</p>
              <p className="font-semibold text-slate-900 dark:text-white">{info.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
