'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send, Code } from 'lucide-react';
import Link from 'next/link';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'payaljindal537@gmail.com',
      link: 'mailto:payaljindal537@gmail.com',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: MessageCircle,
      label: 'LinkedIn',
      value: 'linkedin.com/in/payal-31b0ab336',
      link: 'https://www.linkedin.com/in/payal-31b0ab336/',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'github.com/Payal-24',
      link: 'https://github.com/Payal-24',
      color: 'from-gray-600 to-gray-900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Punjab, India',
      link: '#',
      color: 'from-orange-500 to-red-500',
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
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                I&apos;d love to hear from you! Feel free to reach out for collaborations, opportunities, 
                or just to say hello.
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group card-hover rounded-lg p-6 flex gap-4 items-start"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {info.label}
                    </p>
                    <p className="font-semibold text-slate-900 dark:text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass card-hover rounded-xl p-8"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-slate-900 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3 text-slate-900 dark:text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3 text-slate-900 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-slate-900/50 border border-white/20 dark:border-slate-700/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all duration-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <span>✓ Message Sent!</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
