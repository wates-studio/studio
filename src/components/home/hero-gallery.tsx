'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const slides = [
  {
    projectName: 'Mandapa, a Ritz-Carlton Reserve',
    narrative: 'Where ancient temples meet modern luxury, our Terra Sconces cast a warm, grounded glow, transforming stone into sanctuary.',
    images: { on: 'https://picsum.photos/1920/1080?random=1', off: 'https://picsum.photos/1920/1080?random=2' },
    hints: { on: 'temple luxury', off: 'temple night' },
  },
  {
    projectName: 'Alila Villas Uluwatu',
    narrative: 'Perched on limestone cliffs, the Zenith Bollards trace pathways of light, guiding the journey from sunset to starlight.',
    images: { on: 'https://picsum.photos/1920/1080?random=3', off: 'https://picsum.photos/1920/1080?random=4' },
    hints: { on: 'cliffside villa', off: 'villa night' },
  },
  {
    projectName: 'Private Residence, Canggu',
    narrative: 'Suspended in silence, the Aura Pendant becomes the home\'s beating heart—a single, deliberate statement of form and function.',
    images: { on: 'https://picsum.photos/1920/1080?random=5', off: 'https://picsum.photos/1920/1080?random=6' },
    hints: { on: 'modern interior', off: 'dark interior' },
  },
  {
    projectName: 'Apéritif Restaurant & Bar',
    narrative: 'In a space dedicated to the senses, our custom chandeliers orchestrate an atmosphere of intimacy and drama.',
    images: { on: 'https://picsum.photos/1920/1080?random=7', off: 'https://picsum.photos/1920/1080?random=8' },
    hints: { on: 'restaurant interior', off: 'restaurant evening' },
  },
];

type HeroGalleryProps = {
  forceLightsOff?: boolean;
};

export function HeroGallery({ forceLightsOff = false }: HeroGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightsOn, setLightsOn] = useState(true);

  useEffect(() => {
    // Preload images for smooth transitions
    slides.forEach(slide => {
      const onImg = document.createElement('img');
      onImg.src = slide.images.on;
      const offImg = document.createElement('img');
      offImg.src = slide.images.off;
    });
  }, []);

  useEffect(() => {
    if (forceLightsOff) {
      setLightsOn(false);
    }
  }, [forceLightsOff]);
  
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const effectiveLightsOn = !forceLightsOff && lightsOn;

  return (
    <section className="relative h-full w-full group overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
          aria-hidden={index !== currentSlide}
        >
          <Image
            src={slide.images.off}
            alt={`${slide.projectName} with lights off`}
            fill
            priority={index === 0}
            className="object-cover"
            data-ai-hint={slide.hints.off}
            sizes="100vw"
            quality={80}
          />
          <Image
            src={slide.images.on}
            alt={`${slide.projectName} with lights on`}
            fill
            priority={index === 0}
            className={cn(
              'object-cover transition-opacity duration-500',
              effectiveLightsOn ? 'opacity-100' : 'opacity-0'
            )}
            data-ai-hint={slide.hints.on}
            sizes="100vw"
            quality={80}
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-black/20 z-20" />

      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center p-8">
        <div className="w-full max-w-4xl transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-semibold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {slides[currentSlide].projectName}
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
            {slides[currentSlide].narrative}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-1/2 translate-y-1/2 z-40 flex items-center justify-center">
        <Button
          onClick={() => setLightsOn(prev => !prev)}
          disabled={forceLightsOff}
          className="relative h-16 w-16 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white hover:bg-black/50 transition-transform hover:scale-110 active:scale-100"
          aria-label={effectiveLightsOn ? 'Turn lights off' : 'Turn lights on'}
        >
          <Sun className={cn('absolute h-6 w-6 transition-opacity', effectiveLightsOn ? 'opacity-100' : 'opacity-0')} />
          <Moon className={cn('absolute h-6 w-6 transition-opacity', effectiveLightsOn ? 'opacity-0' : 'opacity-100')} />
        </Button>
      </div>

      <div className="absolute inset-y-0 left-0 z-40 flex items-center">
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="h-24 w-12 md:h-32 md:w-16 bg-gradient-to-r from-black/20 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/30 rounded-none"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 z-40 flex items-center">
        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="h-24 w-12 md:h-32 md:w-16 bg-gradient-to-l from-black/20 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/30 rounded-none"
          aria-label="Next project"
        >
          <ChevronRight className="h-8 w-8" />
        </Button>
      </div>
    </section>
  );
}
