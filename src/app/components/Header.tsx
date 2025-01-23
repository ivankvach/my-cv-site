import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-800"
        >
          Your Name
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-4"
        >
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <FaEnvelope size={24} />
          </a>
        </motion.div>
      </div>
    </motion.header>
  );
}
