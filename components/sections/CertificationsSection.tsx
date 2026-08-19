'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Certificate of Git Skills',
    issuer: 'Git Skills',
    date: 'Jun 2026',
    icon: 'Git',
    color: 'from-orange-500 to-red-500',
    certificateUrl: '/certificates/git-skills.pdf',
  },
  {
    title: 'Certificate of Bitathon',
    issuer: 'Online Bitathon Participant',
    date: '2024',
    icon: 'BT',
    color: 'from-blue-500 to-cyan-500',
    certificateUrl: '/certificates/bitathon.pdf',
  },
  {
    title: 'Tata Crucible Quiz Certificate',
    issuer: 'Tata Crucible Quiz',
    date: '2024',
    icon: 'TC',
    color: 'from-purple-500 to-indigo-500',
    certificateUrl: '/certificates/tata-crucible-quiz.pdf',
  },
];

const CertificationsSection = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-purple-400/5 rounded-full filter blur-3xl"></div>
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
            <span className="gradient-text">Certifications</span> & Courses
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group card-hover rounded-xl p-6 relative overflow-hidden"
            >
              {/* Background gradient accent */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br ${cert.color}`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-lg font-bold text-yellow-400">
                  {cert.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-yellow-400 font-semibold mb-3">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600 dark:text-slate-400 badge">
                    {cert.date}
                  </span>
                  <Award size={16} className="text-yellow-400" />
                </div>
              </div>

              {/* Certificate button */}
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 btn-secondary text-xs text-center transition-opacity duration-300"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
