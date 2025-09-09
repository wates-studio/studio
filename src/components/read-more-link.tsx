
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReadMoreLinkProps {
  href: string;
  size?: 'default' | 'large';
  className?: string;
}

export function ReadMoreLink({ href, size = 'default', className }: ReadMoreLinkProps) {
  const isLarge = size === 'large';
  
  const containerClasses = cn(
    "inline-flex items-center group font-bold",
    isLarge ? "text-4xl" : "text-3xl",
    className
  );

  const arrowContainerClasses = cn(
    isLarge ? "ml-4" : "ml-3"
  );

  const arrowClasses = cn(
    isLarge ? "w-10 h-10" : "w-8 h-8"
  );
  
  const animationDistance = isLarge ? 5 : 4;

  return (
    <Link href={href} className={containerClasses}>
      <span>READ MORE</span>
      <motion.div
        animate={{ x: [0, animationDistance, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className={arrowContainerClasses}
      >
        <ArrowRight className={arrowClasses} />
      </motion.div>
    </Link>
  );
}
