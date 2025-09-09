
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
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      layout
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "top-4 left-4 right-4 advanced-glass border border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
        <div className="flex-1 flex justify-start">
          <Link href="/" aria-label="Homepage">
            <Logo scrolled={scrolled} />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm text-white/80">
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
      </div>
    </motion.header>
  );
}
