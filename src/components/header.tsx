
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Journal', href: '/journal' },
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <motion.header
      layout
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "top-4 left-4 right-4 advanced-glass" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between pl-4 md:pl-6 pr-8 md:pr-12">
        <div className={cn("flex flex-1 justify-start")}>
            <Link href="/" aria-label="Homepage">
              <Logo scrolled={scrolled} />
            </Link>
        </div>

        <nav className={cn(
            "hidden md:flex flex-1 items-center gap-10 text-sm text-white/80",
            scrolled ? "justify-center" : "justify-end"
        )}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
              {item.name}
            </Link>
          ))}
        </nav>
        
        {scrolled && <div className="flex-1" />}
      </div>
    </motion.header>
  );
}
