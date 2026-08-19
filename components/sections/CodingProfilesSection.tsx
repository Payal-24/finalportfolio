'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy } from 'lucide-react';

type GithubStats = {
  username: string;
  profileUrl: string;
  repositories: number;
  contributions: number;
  contributionLabel: string;
};

type LeetcodeStats = {
  username: string;
  profileUrl: string;
  solved: number;
  contests: number;
  rating: number;
};

type GeeksforgeeksStats = {
  username: string;
  profileUrl: string;
  solved: number;
  score: number;
};

type HackerrankStats = {
  username: string;
  profileUrl: string;
  badges: number;
  solved: number;
};

const CodingProfilesSection = () => {
  const [githubStats, setGithubStats] = useState<GithubStats | null>(null);
  const [leetcodeStats, setLeetcodeStats] = useState<LeetcodeStats | null>(null);
  const [geeksforgeeksStats, setGeeksforgeeksStats] = useState<GeeksforgeeksStats | null>(null);
  const [hackerrankStats, setHackerrankStats] = useState<HackerrankStats | null>(null);

  useEffect(() => {
    let isActive = true;

    fetch('/api/github')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GithubStats | null) => {
        if (isActive && data) {
          setGithubStats(data);
        }
      })
      .catch(() => {
        // Keep fallback values
      });

    fetch('/api/leetcode')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: LeetcodeStats | null) => {
        if (isActive && data) {
          setLeetcodeStats(data);
        }
      })
      .catch(() => {
        // Keep fallback values
      });

    fetch('/api/geeksforgeeks')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: GeeksforgeeksStats | null) => {
        if (isActive && data) {
          setGeeksforgeeksStats(data);
        }
      })
      .catch(() => {
        // Keep fallback values
      });

    fetch('/api/hackerrank')
      .then((response) => (response.ok ? response.json() : null))
      .then((data: HackerrankStats | null) => {
        if (isActive && data) {
          setHackerrankStats(data);
        }
      })
      .catch(() => {
        // Keep fallback values
      });

    return () => {
      isActive = false;
    };
  }, []);

  const profiles = [
    {
      name: 'GitHub',
      icon: Code,
      username: githubStats?.username ?? '@Payal-24',
      stats: [
        {
          label: 'Repositories',
          value: githubStats ? String(githubStats.repositories) : 'Loading',
        },
        {
          label: githubStats?.contributionLabel ?? 'Contributions',
          value: githubStats ? String(githubStats.contributions) : 'Loading',
        },
      ],
      link: githubStats?.profileUrl ?? 'https://github.com/Payal-24',
      color: 'from-gray-600 to-gray-900',
    },
    {
      name: 'LeetCode',
      icon: Code,
      username: leetcodeStats?.username ?? '@Payal2007',
      stats: [
        {
          label: 'Problems Solved',
          value: leetcodeStats ? String(leetcodeStats.solved) : 'Loading',
        },
        {
          label: 'Contests',
          value: leetcodeStats ? String(leetcodeStats.contests) : 'Loading',
        },
      ],
      link: leetcodeStats?.profileUrl ?? 'https://leetcode.com/u/Payal2007/',
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'HackerRank',
      icon: Trophy,
      username: hackerrankStats?.username ?? '@payaljindal537',
      stats: [
        {
          label: 'Badges',
          value: hackerrankStats ? String(hackerrankStats.badges) : 'Loading',
        },
        {
          label: 'Solved',
          value: hackerrankStats ? String(hackerrankStats.solved) : 'Loading',
        },
      ],
      link: hackerrankStats?.profileUrl ?? 'https://www.hackerrank.com/profile/payaljindal537',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'GeeksforGeeks',
      icon: Code,
      username: geeksforgeeksStats?.username ?? '@payaljin10d9',
      stats: [
        {
          label: 'Total Score',
          value: geeksforgeeksStats ? String(geeksforgeeksStats.score) : 'Loading',
        },
        {
          label: 'Problems Solved',
          value: geeksforgeeksStats ? String(geeksforgeeksStats.solved) : 'Loading',
        },
      ],
      link: geeksforgeeksStats?.profileUrl ?? 'https://www.geeksforgeeks.org/profile/payaljin10d9?tab=activity',
      color: 'from-purple-500 to-pink-500',
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
                target={profile.link === '#' ? undefined : '_blank'}
                rel={profile.link === '#' ? undefined : 'noopener noreferrer'}
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
                <span className="block w-full mt-4 btn-secondary text-sm text-center">
                  Visit Profile
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
