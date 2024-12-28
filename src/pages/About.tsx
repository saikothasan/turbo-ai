import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/about/Timeline';
import Team from '../components/about/Team';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Pioneering the future of AI technology with innovation and expertise
          </p>
        </div>
      </section>
      <Timeline />
      <Team />
    </motion.div>
  );
};

export default About;