
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Hero() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-screen w-full relative flex items-center justify-center text-white text-center overflow-hidden">
      {/* Background Image - Placeholder for video */}
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Atmospheric lighting in a serene space"
        fill
        priority
        className="object-cover brightness-50"
        data-ai-hint="dark hotel lounge"
        quality={80}
      />

      {/* Content */}
      <div
        className={cn(
          'relative z-10 p-8 transition-opacity duration-1000',
          textVisible ? 'opacity-100' : 'opacity-0'
        )}
      >
        <h1 className="text-5xl md:text-7xl font-serif font-medium" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
          Where Soul Meets Science.
        </h1>
        <p className="mt-4 text-lg md:text-xl" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
          Handcrafted lighting from Bali, engineered for the world.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </div>
    </section>
  );
}
