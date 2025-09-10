
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Scenes } from '@/components/page/scenes';
import { scenes } from '@/data/scenes';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSection() {
  const [lightsOn, setLightsOn] = useState(true);
  const [activeSceneId, setActiveSceneId] = useState(scenes[0].id);

  return (
    <>
      <div className="fixed inset-0 z-0">
        <AnimatePresence>
          {scenes.map((scene) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: scene.id === activeSceneId ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ opacity: lightsOn ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ transformStyle: 'flat' }}
              >
                <Image
                  src={scene.imageOn}
                  alt={`Luxurious ${scene.name} with DUA lighting fixtures on`}
                  fill
                  priority
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
              <motion.div
                animate={{ opacity: lightsOn ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{ transformStyle: 'flat' }}
              >
                <Image
                  src={scene.imageOff}
                  alt={`Luxurious ${scene.name} with DUA lighting fixtures off`}
                  fill
                  priority
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="relative z-10">
        <Scenes 
          lightsOn={lightsOn}
          setLightsOn={setLightsOn}
          activeSceneId={activeSceneId}
          setActiveSceneId={setActiveSceneId}
        />
      </div>
    </>
  );
}
