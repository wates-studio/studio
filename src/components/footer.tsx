
'use client';

import { useState } from 'react';
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { cn } from '@/lib/utils';

type FooterProps = {
  lightsOn: boolean;
  onLightsToggle: (on: boolean) => void;
};

export function Footer({ lightsOn, onLightsToggle }: FooterProps) {
  const [activeRoom, setActiveRoom] = useState('Living Room');
  const rooms = ['Living Room', 'Lounge', 'Bedroom'];

  return (
    <footer className="w-full">
      <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl p-3">
        <div className="flex items-center justify-between text-white text-sm">
          {/* Lights Toggle */}
          <div className="flex items-center gap-3 px-4">
            <label htmlFor="lights-toggle" className="cursor-pointer">Lights on</label>
            <Switch
              id="lights-toggle"
              checked={lightsOn}
              onCheckedChange={onLightsToggle}
              className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-600"
            />
          </div>
          
          <div className="h-6 w-px bg-white/20" />
          
          {/* Brightness Slider */}
          <div className="flex-1 px-6">
            <Slider
              defaultValue={[80]}
              max={100}
              step={1}
              className={cn("w-full transition-opacity", !lightsOn && "opacity-50 cursor-not-allowed")}
              disabled={!lightsOn}
            />
          </div>
          
          <div className="h-6 w-px bg-white/20" />
          
          {/* Room Selector */}
          <div className="flex items-center gap-2 p-1 bg-black/20 rounded-full">
            {rooms.map(room => (
              <button
                key={room}
                onClick={() => setActiveRoom(room)}
                className={cn(
                  "px-4 py-1.5 rounded-full transition-colors duration-300",
                  activeRoom === room ? "bg-white/90 text-black font-medium" : "text-white/70 hover:bg-white/10"
                )}
              >
                {room}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
