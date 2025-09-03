
"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 text-white">
          <Link href="/" aria-label="Homepage">
            <Logo />
          </Link>
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
