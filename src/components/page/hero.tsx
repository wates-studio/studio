
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { CustomToggle } from '@/components/custom-toggle';

const rooms = ['Living Room', 'Lounge', 'Bedroom'];

export function HeroSection() {
  const [lightsOn, setLightsOn] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [activeRoom, setActiveRoom] = useState('Living Room');
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {showHeader && <Header />}
      </AnimatePresence>
      <section ref={heroRef} className="relative h-[150vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
          <Image
            src="https://picsum.photos/1920/1280"
            alt="Luxurious living room with DUA lighting fixtures"
            fill
            priority
            className="object-cover transition-all duration-1000"
            style={{ filter: lightsOn ? 'brightness(1)' : 'brightness(0.4)' }}
            data-ai-hint="luxury living room lamps"
            quality={90}
          />
          <div className={cn(
            "absolute inset-0 bg-black transition-opacity duration-1000",
            lightsOn ? "opacity-40" : "opacity-70"
          )} />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              style={{ opacity: textOpacity }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">The Art of Duality</h1>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">Where soul meets science. Handcrafted lighting from Bali, engineered for the world.</p>
            </motion.div>
          </div>

          <footer className="absolute bottom-8 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 px-8 flex items-center gap-8 text-sm"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/90 w-20">{lightsOn ? 'Lights on' : 'Lights off'}</span>
                <CustomToggle checked={lightsOn} onChange={setLightsOn} />
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="flex items-center gap-6">
                {rooms.map((room) => (
                  <button
                    key={room}
                    onClick={() => setActiveRoom(room)}
                    className={cn(
                      "transition-all",
                      activeRoom === room ? "text-white font-bold" : "text-white/50 hover:text-white/80"
                    )}
                  >
                    {room}
                  </button>
                ))}
              </div>
            </motion.div>
          </footer>
        </div>
      </section>
    </>
  );
}
