
"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'The Journal', href: '/journal' },
  { name: 'Philosophy', href: '/philosophy' },
];

const headerVariants: Variants = {
  unscrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    backdropFilter: 'blur(0px)',
    borderColor: 'rgba(255, 255, 255, 0)',
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  scrolled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(16px)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <motion.div
        className="container mx-auto flex items-center justify-between h-20 px-6 md:px-10 rounded-2xl border"
        variants={headerVariants}
        animate={scrolled ? 'scrolled' : 'unscrolled'}
        initial="unscrolled"
      >
        <Link href="/" aria-label="Homepage">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <Button variant="outline" className="hidden md:inline-flex bg-transparent text-white border-white/50 hover:bg-white hover:text-black">
          Trade Portal
        </Button>
      </motion.div>
    </motion.header>
  );
}
