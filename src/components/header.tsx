
"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'The Journal', href: '/journal' },
  { name: 'Philosophy', href: '/philosophy' },
];

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div
        className={cn(
          "container mx-auto flex items-center justify-between h-20 px-6 md:px-10 transition-all duration-300 rounded-2xl",
          scrolled && "bg-white/5 backdrop-blur-md border border-white/20"
        )}
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
      </div>
    </motion.header>
  );
}
