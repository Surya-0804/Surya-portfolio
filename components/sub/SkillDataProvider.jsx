"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const SkillDataProvider = ({ src, name, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="transition-transform duration-300 group-hover:scale-110">
        <Image src={src} width={width} height={height} alt={name || `Skill ${index}`} />
      </div>
      {name && (
        <span className="text-gray-400 text-[11px] font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {name}
        </span>
      )}
    </motion.div>
  );
};

export default SkillDataProvider;
