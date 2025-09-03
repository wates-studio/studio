
"use client";

import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-black/30 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 text-white">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Collections</a>
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">The Journal</a>
            <a href="#" className="hover:text-white transition-colors">Philosophy</a>
          </nav>
          <div>
            <a href="#" className="hidden md:inline-block text-sm px-4 py-2 border border-white/50 rounded-full hover:bg-white hover:text-black transition-colors">
              Trade Portal
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
