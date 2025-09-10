
"use client";

import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';

interface SceneControlProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

export function SceneControl({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: SceneControlProps) {
  return (
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
  );
}
