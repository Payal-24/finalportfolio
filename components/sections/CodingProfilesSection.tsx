'use client';

import { motion } from 'framer-motion';
import { Code, Trophy } from 'lucide-react';

const CodingProfilesSection = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: Code,
      username: '@payal',
      stats: [
        { label: 'Repositories', value: '15+' },
        { label: 'Contributions', value: '200+' },
      ],
      link: '#',
      color: 'from-gray-600 to-gray-900',
    },
    {
      name: 'LeetCode',
      icon: Code,
      username: '@payal',
      stats: [
        { label: 'Problems Solved', value: '100+' },
        { label: 'Contests', value: '5+' },
      ],
      link: '#',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Codeforces',
      icon: Trophy,
      username: '@payal',
      stats: [
        { label: 'Rating', value: '1200+' },
        { label: 'Contests', value: '8+' },
      ],
      link: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'HackerRank',
      icon: Trophy,
      username: '@payal',
      stats: [
        { label: 'Badges', value: '12' },
        { label: 'Stars', value: '4.5★' },
      ],
      link: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'GeeksforGeeks',
      icon: Code,
      username: '@payal',
      stats: [
        { label: 'Articles', value: '3' },
        { label: 'Problems', value: '80+' },
      ],
      link: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'CodeChef',
      icon: Trophy,
      username: '@payal',
      stats: [
        { label: 'Contests', value: '10+' },
        { label: 'Streak', value: '30 days' },
      ],
      link: '#',
      color: 'from-red-500 to-yellow-500',
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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl"></div>
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
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            return (
              <motion.a
                key={index}
                href={profile.link}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group card-hover rounded-xl p-6 cursor-pointer block"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${profile.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {profile.username}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  {profile.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex justify-between items-center p-3 bg-white/5 dark:bg-slate-800/30 rounded-lg group-hover:bg-white/10 dark:group-hover:bg-slate-800/50 transition-colors duration-300">
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </span>
                      <span className="font-bold text-gradient">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Visit Button */}
                <button className="w-full mt-4 btn-secondary text-sm">
                  Visit Profile
                </button>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
