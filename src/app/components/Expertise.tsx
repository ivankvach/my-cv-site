'use client';

import { motion } from 'framer-motion';

const expertise = [
  {
    title: 'Area of Expertise 1',
    description:
      'Detailed description of your expertise in this particular area.',
  },
  {
    title: 'Area of Expertise 2',
    description:
      'Detailed description of your expertise in this particular area.',
  },
  {
    title: 'Area of Expertise 3',
    description:
      'Detailed description of your expertise in this particular area.',
  },
  {
    title: 'Area of Expertise 4',
    description:
      'Detailed description of your expertise in this particular area.',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-navy-900 mb-12 text-center"
        >
          Expertise
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
