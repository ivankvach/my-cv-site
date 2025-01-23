'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Senior Position',
    company: 'Company Name',
    period: '2020 - Present',
    description:
      'Led major projects and initiatives, resulting in significant improvements in efficiency and productivity.',
  },
  {
    title: 'Mid-Level Position',
    company: 'Previous Company',
    period: '2017 - 2020',
    description:
      'Managed team projects and client relationships while developing innovative solutions.',
  },
  {
    title: 'Junior Position',
    company: 'First Company',
    period: '2015 - 2017',
    description:
      'Gained valuable experience in project management and client relations.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-3xl font-bold text-navy-900 mb-12 text-center"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 transform transition-all duration-300">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-navy-600 mb-4">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
