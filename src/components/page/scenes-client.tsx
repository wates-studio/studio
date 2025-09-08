
"use client";

import { useRef, useLayoutEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

interface ScenesProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

export function ScenesClient({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: ScenesProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  // Scroll-based animation for lights on/off
  useLayoutEffect(() => {
    if (!heroRef.current) return;
    
    const trigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=50%",
      scrub: true,
      onUpdate: (self) => {
        setLightsOn(self.progress < 0.1);
      },
    });

    return () => trigger.kill();
  }, [setLightsOn]);

  // GSAP animation for hero text
  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const heading = headingRef.current;
    const phrases = ["we breathe life into spaces", "we sculpt soul into spaces"];

    // Master timeline
    const tl = gsap.timeline({ 
      repeat: -1, 
      repeatDelay: 1.5 
    });

    // 1. Initial Animation: Fade in and move up
    tl.from(heading, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
    });
    
    // 2. Typing Animation Part 1: Type out the second phrase
    tl.to(heading, {
      delay: 1.5, // Pause before typing
      text: phrases[1],
      duration: 1.5,
      ease: "none",
    });

    // 3. Typing Animation Part 2: Type back to the first phrase
    tl.to(heading, {
      delay: 1.5, // Pause before typing back
      text: phrases[0],
      duration: 1.5,
      ease: "none",
    });

    return () => {
      tl.kill(); // Cleanup the timeline on component unmount
    }
  }, []);

  return (
    <section>
      <div ref={heroRef} className="relative h-[150vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-center">
              <h1
                ref={headingRef}
                className="text-5xl md:text-7xl font-bold tracking-tight"
              >
                {/* Initial text is set here, GSAP will take over */}
                we breathe life into spaces
              </h1>
            </div>
          </div>

          <motion.footer 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={cn(
              "advanced-glass",
              "absolute bottom-8 z-10 p-4 px-8 flex items-center gap-8 text-sm"
            )}
          >
            <div className="flex items-center gap-3">
              <span className="text-white/90 w-20">{lightsOn ? 'Lights on' : 'Lights off'}</span>
              <CustomToggle checked={lightsOn} onChange={setLightsOn} />
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
