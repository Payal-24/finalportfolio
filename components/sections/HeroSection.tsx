'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../../profilepicture.png';

const roles = ['C++ Developer', 'Java Learner', 'Web Developer', 'Problem Solver'];

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentRole = roles[currentRoleIndex];
      
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, currentRoleIndex, isDeleting]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-400/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-400/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 section-container text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/30 to-pink-400/30 rounded-full backdrop-blur-md border border-white/30"></div>
            <div className="relative w-full h-full overflow-hidden rounded-full border border-white/40 shadow-2xl shadow-pink-500/20">
              <Image
                src={profilePicture}
                alt="Profile photo of Payal"
                fill
                priority
                sizes="(min-width: 768px) 12rem, 10rem"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I&apos;m <span className="gradient-text">Payal</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 mb-4"
        >
          B.Tech CSE Student | Aspiring Software Developer
        </motion.p>

        {/* Typing Effect */}
        <motion.div
          variants={itemVariants}
          className="h-12 md:h-14 mb-8"
        >
          <div className="text-xl md:text-2xl font-semibold">
            <span className="text-gradient">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about programming, problem solving, web development, and building impactful projects. 
          Currently learning DSA and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <a
            href="/Payal Resume.pdf"
            download="Payal Resume.pdf"
            className="btn-primary group flex items-center gap-2"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </a>
          <Link
            href="#contact"
            className="btn-secondary flex items-center gap-2"
          >
            <Mail size={20} />
            Contact Me
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 dark:text-slate-600"
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
