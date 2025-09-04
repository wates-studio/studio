"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';

export function Scenes() {
  const [lightsOn, setLightsOn] = useState(true);
  const [activeSceneId, setActiveSceneId] = useState(scenes[0].id);
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const activeScene = scenes.find((scene) => scene.id === activeSceneId) || scenes[0];

  return (
    <section ref={heroRef} className="relative h-[150vh] w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
        <motion.div 
          className="absolute inset-0"
          style={{ scale: imageScale }}
        >
          <Image
            src={activeScene.imageOn}
            alt={`Luxurious ${activeScene.name} with DUA lighting fixtures on`}
            fill
            priority
            className={cn("object-cover transition-opacity duration-1000", lightsOn ? "opacity-100" : "opacity-0")}
            quality={90}
          />
          <Image
            src={activeScene.imageOff}
            alt={`Luxurious ${activeScene.name} with DUA lighting fixtures off`}
            fill
            priority
            className={cn("object-cover transition-opacity duration-1000", !lightsOn ? "opacity-100" : "opacity-0")}
            quality={90}
          />
        </motion.div>
        
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
          </motion.div>
        </footer>
      </div>
    </section>
  );
}