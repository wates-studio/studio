"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const scrollVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ScrollAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={scrollVariants}
    >
      {children}
    </motion.div>
  );
};