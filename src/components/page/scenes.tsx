
"use client";

import { useRef, useLayoutEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScenesProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

export function Scenes({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: ScenesProps) {
  const mainRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const headlineSplit = new SplitText(headlineRef.current, { type: "words" });
      const subheadlineSplit = new SplitText(subheadlineRef.current, { type: "words" });

      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=50%",
          scrub: 1,
          onUpdate: (self) => {
            // As user scrolls, turn lights off
            if (self.progress > 0.1) {
              setLightsOn(false);
            } else {
              setLightsOn(true);
            }
          },
        }
      });

      heroTl
        .from(headlineSplit.words, {
          opacity: 0,
          yPercent: 100,
          stagger: 0.1,
          ease: "power2.out"
        })
        .from(subheadlineSplit.words, {
          opacity: 0,
          yPercent: 100,
          stagger: 0.05,
          ease: "power2.out"
        }, "-=0.5");

    }, mainRef);

    return () => ctx.revert();
  }, [setLightsOn]);

  return (
    <section ref={mainRef}>
      <div ref={heroRef} className="relative h-[150vh] w-full">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-center">
              <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold tracking-tight">The Art of Duality</h1>
              <p ref={subheadlineRef} className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">Where soul meets science. Handcrafted lighting from Bali, engineered for the world.</p>
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
