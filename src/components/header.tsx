
"use client";

import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      exit={{ y: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 text-white">
          <div className="p-2">
             <Link href="/" aria-label="Homepage">
              <Logo />
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/journal" className="hover:text-white transition-colors">The Journal</Link>
            <Link href="/philosophy" className="hover:text-white transition-colors">Philosophy</Link>
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
