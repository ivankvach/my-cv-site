'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'CLIENTS', href: '#clients' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERTISE', href: '#expertise' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              delay: 0.2,
            }}
            className="text-2xl font-bold text-navy-900"
          >
            Your Name
          </motion.div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{
                  scale: 1.1,
                  transition: { type: 'spring', stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium hover:text-navy-600 transition-colors
                    ${
                      activeSection === item.name
                        ? 'text-navy-600'
                        : 'text-navy-900'
                    }`}
                  onClick={() => setActiveSection(item.name)}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  );
}
