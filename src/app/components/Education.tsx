'use client';

import { motion } from 'framer-motion';

const education = [
  {
    degree: "Master's Degree",
    field: 'Relevant Field',
    school: 'University Name',
    year: '2015',
    description:
      'Graduated with honors, specialized in key areas of expertise.',
  },
  {
    degree: "Bachelor's Degree",
    field: 'Related Field',
    school: 'University Name',
    year: '2013',
    description: "Dean's List, participated in multiple research projects.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-navy-900 mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {edu.degree}
              </h3>
              <p className="text-navy-600 mb-2">{edu.field}</p>
              <p className="text-gray-600 mb-4">
                {edu.school} | {edu.year}
              </p>
              <p className="text-gray-600">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
