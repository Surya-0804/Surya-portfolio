'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CapabilityItem = ({ label, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
        ease: 'easeOut',
      }}
      className="capability-item"
    >
      <span className="capability-check" aria-hidden="true">
        ✓
      </span>
      <span className="capability-label">{label}</span>
    </motion.div>
  );
};

export default CapabilityItem;
