'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Skill 1', level: 90 },
  { name: 'Skill 2', level: 85 },
  { name: 'Skill 3', level: 80 },
  { name: 'Skill 4', level: 75 },
  { name: 'Skill 5', level: 85 },
  { name: 'Skill 6', level: 70 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-3xl font-bold text-navy-900 mb-12 text-center"
        >
          Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: 'spring', stiffness: 400, damping: 10 },
              }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-navy-900">{skill.name}</span>
                <span className="text-navy-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 50,
                    damping: 20,
                    delay: 0.5,
                  }}
                  className="bg-navy-600 h-2.5 rounded-full origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
