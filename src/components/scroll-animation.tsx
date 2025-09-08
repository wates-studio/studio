"use client";
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  staggerChildren?: number;
  staggerDirection?: number;
}

export const ScrollAnimation = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
  yOffset = 30, // Reduced from 50 for a subtler effect
  once = true,
  staggerChildren = 0.1, // Default stagger
  staggerDirection = 1,
}: ScrollAnimationProps) => {

  const scrollVariants: Variants = {
    offscreen: {
      opacity: 0,
      y: yOffset,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration,
        delay,
        staggerChildren,
        staggerDirection,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once, amount: 0.2 }} // Increased amount for earlier trigger
      variants={scrollVariants}
    >
      {children}
    </motion.div>
  );
};
