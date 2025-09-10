
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Journal', href: '/journal' },
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "p-2" : ""
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between pl-4 md:pl-6 pr-8 md:pr-12 transition-all duration-500",
        scrolled ? "advanced-glass rounded-2xl" : ""
      )}>
        <div className="flex-1">
            <Link href="/" aria-label="Homepage">
              <Logo scrolled={scrolled} />
            </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
