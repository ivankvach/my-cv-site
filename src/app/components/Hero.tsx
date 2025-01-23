'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

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
      damping: 10,
    },
  },
};

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  return (
    <section className="min-h-screen pt-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        // className="absolute inset-0 bg-[url('https://sjc.microlink.io/PV3WffgigD84dHAdtW_YF9Ix8SWQ33htnXVAxI0pH8QyFrwXj1xczinNZ2q6Hs-JmNPiKXddCSMf_2cu6ZYL7Q.jpeg')] bg-cover bg-center"
        className="absolute inset-0 bg-gray-50 bg-cover bg-center"
      />

      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <div className="md:flex items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2,
              }}
              className="md:w-1/2 p-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Image
                  src="/logo.png"
                  alt="Professional headshot"
                  width={400}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="md:w-1/2 p-8 flex flex-col justify-center"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold text-navy-900 mb-2"
              >
                Ivan Kvach
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-xl text-navy-600 mb-6"
              >
                Software-Ingenieur / Fullstack Entwickler
              </motion.h2>

              <motion.div variants={containerVariants} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-navy-900">
                    Phone:
                  </h3>
                  <p className="text-navy-600">+491743546822</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-navy-900">
                    Email:
                  </h3>
                  <p className="text-navy-600">ivankvach6@gmail.com</p>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <h3 className="text-sm font-semibold text-navy-900">
                    Address:
                  </h3>
                  <p className="text-navy-600">
                    Kurfürstenstraße 7
                    <br />
                    59469 Ense-Ruhne, Deutschland
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                className="flex space-x-4 mt-8"
              >
                <SocialIcon
                  Icon={FaLinkedin}
                  href="javascript:void(0)"
                  delay={0.6}
                />
                <SocialIcon
                  Icon={FaFacebookF}
                  href="javascript:void(0)"
                  delay={0.7}
                />
                <SocialIcon
                  Icon={FaTwitter}
                  href="javascript:void(0)"
                  delay={0.8}
                />
                <SocialIcon
                  Icon={FaInstagram}
                  href="javascript:void(0)"
                  delay={0.9}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  Icon,
  href,
  delay,
}: {
  Icon: any;
  href: string;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay,
      }}
      whileHover={{
        scale: 1.2,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
}
