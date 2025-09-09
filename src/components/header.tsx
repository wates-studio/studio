
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
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
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {scrolled ? (
          <>
            <div className="flex-1 flex justify-start">
              <Link href="/" aria-label="Homepage">
                <Logo scrolled={scrolled} />
              </Link>
            </div>

            <nav className="hidden md:flex flex-1 justify-center items-center gap-10 text-sm text-white/80">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex-1 flex justify-end">
              <Button 
                variant="outline" 
                className="hidden md:inline-flex bg-transparent text-white border-white/50 hover:bg-white hover:text-black"
              >
                Book Consultation
              </Button>
            </div>
          </>
        ) : (
          <>
            <Link href="/" aria-label="Homepage">
              <Logo scrolled={scrolled} />
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-sm text-white/80">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
                  {item.name}
                </Link>
              ))}
            </nav>
          </>
        )}
      </div>
    </motion.header>
  );
}
