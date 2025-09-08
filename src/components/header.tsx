"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'The Journal', href: '/journal' },
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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "advanced-glass" : "bg-transparent"
      )}
    >
      <div className="grid grid-cols-3 items-center h-20">
        <div className="justify-self-start pl-6 md:pl-10">
          <Link href="/" aria-label="Homepage">
            <Logo scrolled={scrolled} />
          </Link>
        </div>

        <div
          className={cn(
            "hidden md:flex justify-self-center transition-all duration-500",
            !scrolled && "col-start-3 justify-self-end"
          )}
        >
          <nav className="flex items-center gap-8 text-sm text-white/80 pr-6 md:pr-10">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="hover:text-white transition-colors whitespace-nowrap">
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="col-start-3 justify-self-end pr-6 md:pr-10">
          <Button 
            variant="outline" 
            className={cn(
              "hidden md:inline-flex bg-transparent text-white border-white/50 hover:bg-white hover:text-black transition-opacity duration-300",
              scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            Book Consultation
          </Button>
        </div>
      </div>
    </header>
  );
}
