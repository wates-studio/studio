
"use client";

import { useState, useEffect } from 'react';
import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Profile', href: '/' },
  { name: 'Technical', href: '/' },
  { name: 'Portfolio', href: '/' },
  { name: 'Product', href: '/' },
  { name: 'Services', href: '/' }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Add event listener only on the client side
    window.addEventListener('scroll', handleScroll);
    
    // Call handler once to set initial state
    handleScroll();

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

    