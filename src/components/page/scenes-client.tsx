
"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';

interface ScenesProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

const phrases = [
    "we breathe life into spaces",
    "we sculpt soul into spaces"
];

export function ScenesClient({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: ScenesProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // For scroll-based animation
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "center start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setLightsOn(latest < 0.1);
  });
  
  // For text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <section>
      <div ref={heroRef} className="relative h-[150vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-center h-24 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={phraseIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="text-5xl md:text-7xl font-bold tracking-tight absolute"
                    >
                        {phrases[phraseIndex]}
                    </motion.h1>
                </AnimatePresence>
            </div>
          </div>

          <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={cn(
              "absolute bottom-8 z-10 p-4 px-8 flex items-center gap-8 text-sm",
              "bg-black/20 backdrop-blur-md rounded-full border border-white/10"
            )}
          >
            <div className="flex items-center gap-3">
              <motion.span 
                className="text-white/90 w-20"
                key={lightsOn ? 'on' : 'off'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {lightsOn ? 'Lights on' : 'Lights off'}
              </motion.span>
              <CustomToggle checked={lightsOn} onChange={(checked) => setLightsOn(checked)} />
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-6">
              {scenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => setActiveSceneId(scene.id)}
                  className={cn(
                    "transition-all",
                    activeSceneId === scene.id ? "text-white font-bold" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {scene.name}
                </button>
              ))}
            </div>
          </motion.footer>
        </div>
      </div>
      
      {/* Spacer to push content down */}
      <div className="h-24"></div> 
    </section>
  );
}
