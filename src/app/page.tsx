
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const MotionImage = motion(Image);

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="bg-[#111111] text-white font-body antialiased">
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 1: Hero */}
      <div ref={targetRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y, opacity, scale }}
            className="relative h-full w-full"
          >
            <MotionImage
              src="https://picsum.photos/1920/1280"
              alt="Luxurious living room with DUA lighting fixtures"
              fill
              priority
              className={cn(
                "object-cover transition-all duration-1000",
                lightsOn ? "brightness-100" : "brightness-[0.3]"
              )}
              data-ai-hint="luxury living room"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-light tracking-tighter"
              >
                Where Soul Meets Science.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-4 text-lg md:text-xl font-extralight text-white/80"
              >
                Handcrafted lighting from Bali, engineered for the world.
              </motion.p>
            </div>
            
            {/* Bottom Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
              <div className="flex items-center justify-center gap-8 text-sm">
                <button 
                  onClick={() => setLightsOn(true)} 
                  className={cn("flex items-center gap-2 transition-colors", lightsOn ? "text-white" : "text-white/50 hover:text-white")}
                >
                  <Sun size={18} /> Lights On
                </button>
                <button 
                  onClick={() => setLightsOn(false)} 
                  className={cn("flex items-center gap-2 transition-colors", !lightsOn ? "text-white" : "text-white/50 hover:text-white")}
                >
                  <Moon size={18} /> Lights Off
                </button>
              </div>
            </div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
              <ArrowDown className="animate-bounce" size={24} />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
