'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillPill = ({ label, index, variant = 'domain' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const variantClass =
    variant === 'model' ? 'skill-pill-model' : 'skill-pill-domain';

  return (
    <motion.span
      ref={ref}
      variants={pillVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        delay: index * 0.07,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`skill-pill ${variantClass}`}
    >
      {label}
    </motion.span>
  );
};

export default SkillPill;
