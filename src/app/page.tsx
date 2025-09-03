
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { cn } from '@/lib/utils';

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);

  return (
    <div className="bg-[#111111] text-white min-h-screen flex flex-col font-body antialiased">
      <div className="relative w-full h-screen">
        <Image
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
        <div className="absolute inset-0 bg-black/10" />
        
        <Header />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
          <Footer lightsOn={lightsOn} onLightsToggle={setLightsOn} />
        </div>
      </div>
    </div>
  );
}
