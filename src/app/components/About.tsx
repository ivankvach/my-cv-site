'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            Hello! I'm Your Name
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed">
            I'm a professional with extensive experience in my field. I believe
            in delivering exceptional results through dedication, expertise, and
            innovative solutions. My approach combines traditional methodologies
            with cutting-edge techniques to achieve optimal outcomes for my
            clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
