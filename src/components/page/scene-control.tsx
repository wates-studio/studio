
"use client";

import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import { CustomToggle } from '@/components/custom-toggle';
import { scenes } from '@/data/scenes';
import { useIsMobile } from '@/hooks/use-mobile';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

interface SceneControlProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

export function SceneControl({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: SceneControlProps) {
  const isMobile = useIsMobile();
  const activeScene = scenes.find(s => s.id === activeSceneId);

  const renderSceneSelector = () => {
    if (isMobile) {
      return (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white w-32 justify-between">
              {activeScene?.name}
              <ChevronUp className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 bg-black/50 backdrop-blur-md border-white/20 text-white p-2 mb-2" side="top" align="center">
            <div className="flex flex-col gap-1">
              {scenes.map((scene) => (
                <button
                  key={scene.id}
                  onClick={() => {
                    setActiveSceneId(scene.id)
                    // Consider closing popover on select. Need to manage open state.
                  }}
                  className={cn(
                    "text-left p-2 rounded-md transition-colors w-full",
                    activeSceneId === scene.id ? "bg-white/20 font-bold" : "text-white/80 hover:bg-white/10"
                  )}
                >
                  {scene.name}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      );
    }

    return (
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
    );
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
      className={cn(
        "advanced-glass",
        "absolute bottom-8 z-10 p-2 md:p-4 md:px-8 flex items-center gap-4 md:gap-8 text-sm"
      )}
    >
      <div className="flex items-center gap-3">
        <span className="text-white/90 w-20 hidden md:inline">{lightsOn ? 'Lights on' : 'Lights off'}</span>
        <CustomToggle checked={lightsOn} onChange={setLightsOn} />
      </div>
      <div className="w-px h-6 bg-white/20" />
      {renderSceneSelector()}
    </motion.footer>
  );
}
