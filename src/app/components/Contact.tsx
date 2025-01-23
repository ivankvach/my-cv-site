'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="text-3xl font-bold text-navy-900 mb-12 text-center"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <ContactItem
                    icon={FaPhone}
                    title="Phone"
                    content="+491743546822"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ContactItem
                    icon={FaEnvelope}
                    title="Email"
                    content="ivankvach6@gmail.com"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <ContactItem
                    icon={FaMapMarkerAlt}
                    title="Address"
                    content="Kurfürstenstraße 7, 50469 Ense-Ruhne, Deutschland"
                  />
                </motion.div>
              </motion.div>

              <motion.form
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-navy-900 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-navy-900 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-navy-900 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent transition-all duration-300"
                  />
                </motion.div>
                <motion.button
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { type: 'spring', stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-navy-900 text-white py-2 px-6 rounded-lg hover:bg-navy-800 transition-colors"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 360,
          transition: { type: 'spring', stiffness: 400, damping: 10 },
        }}
        className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center"
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <div>
        <h3 className="font-medium text-navy-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
