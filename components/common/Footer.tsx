'use client';

import { motion } from 'framer-motion';
import { Code, Mail, MessageCircle, Heart, ArrowUp } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Code, href: '#', label: 'GitHub' },
    { icon: MessageCircle, href: '#', label: 'LinkedIn' },
    { icon: Heart, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900/50 to-slate-950/50 dark:from-slate-950 dark:to-slate-900 backdrop-blur-md border-t border-white/10 dark:border-slate-700/30">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400 to-pink-400 flex items-center justify-center">
                <span className="font-bold text-slate-900">P</span>
              </div>
              <span className="font-bold text-xl gradient-text">Payal</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              B.Tech CSE Student | Aspiring Software Developer
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Resources</h4>
            <ul className="space-y-2">
              {['GitHub', 'LeetCode', 'Blog', 'Resume'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">Get In Touch</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Let&apos;s collaborate and build something amazing together!
            </p>
            <a
              href="mailto:payaljindal537@gmail.com"
              className="btn-secondary text-sm block text-center"
            >
              Send Email
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="divider my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-slate-600 dark:text-slate-400"
          >
            © {currentYear} Payal. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-icon"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="btn-icon"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
