
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const CustomToggle = ({ checked, onChange }: { checked: boolean, onChange: (checked: boolean) => void }) => {
  return (
    <button onClick={() => onChange(!checked)} className="relative focus:outline-none" aria-label="Toggle Lights">
      <svg width="60" height="34" viewBox="0 0 60 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-colors duration-300">
        <rect width="60" height="34" rx="17" fill={checked ? "#32D74B" : "rgba(120, 120, 128, 0.36)"} />
        <motion.div
          animate={{ x: checked ? 27 : 1 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            position: 'absolute',
            top: '2px',
            left: '2px',
            width: '30px',
            height: '30px',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: '0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06)',
          }}
        />
      </svg>
    </button>
  );
};

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [activeRoom, setActiveRoom] = useState('Living Room');
  
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowHeader(entry.intersectionRatio < 0.2);
      },
      { threshold: [0, 0.2, 1.0] }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#111111] text-white antialiased">
      <AnimatePresence>
        {showHeader && <Header />}
      </AnimatePresence>

      <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
        <Image
          src="https://picsum.photos/1920/1280"
          alt="Luxurious living room with DUA lighting fixtures"
          fill
          priority
          className="object-cover"
          data-ai-hint="luxury living room lamps"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
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
            className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl p-4 px-8 flex items-center gap-8 text-sm"
          >
            <div className="flex items-center gap-3">
              <span className="text-white/90">Lights on</span>
              <CustomToggle checked={lightsOn} onChange={setLightsOn} />
            </div>
            <div className="w-px h-6 bg-white/20" />
            <div className="flex items-center gap-6">
              {['Living Room', 'Lounge', 'Bedroom'].map((room) => (
                <button
                  key={room}
                  onClick={() => setActiveRoom(room)}
                  className={cn(
                    "transition-all",
                    activeRoom === room ? "text-white font-bold" : "text-white/50 hover:text-white/80"
                  )}
                >
                  {room}
                </button>
              ))}
            </div>
          </motion.div>
        </footer>
      </section>

      <main className="bg-[#111111] z-10 relative">
        <div className="container mx-auto px-4 py-20 md:py-32 space-y-20 md:space-y-32">
          
          <ScrollAnimation>
            <section className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-white/90">
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">THE ARTISANAL TECHNOLOGIST</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling.
                </p>
                <a href="#" className="inline-block mt-6 text-white hover:underline">Our Philosophy →</a>
              </div>
              <div>
                <Image 
                  src="https://picsum.photos/800/1000"
                  alt="Architectural DUA product"
                  width={800}
                  height={1000}
                  className="rounded-lg object-cover"
                  data-ai-hint="architectural lighting black white"
                />
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">Curated Collections</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group relative overflow-hidden rounded-lg">
                  <Image src="https://picsum.photos/800/600?1" alt="Aura Collection" width={800} height={600} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-ai-hint="sculptural pendant dining table" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-semibold">The Aura Collection</h3>
                      <p>Sculptural Pendants</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image src="https://picsum.photos/800/600?2" alt="Terra Collection" width={800} height={600} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-ai-hint="earthen sconce concrete wall" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-semibold">The Terra Collection</h3>
                      <p>Earthen Sconces</p>
                    </div>
                  </div>
                </div>
                <div className="group relative overflow-hidden rounded-lg">
                  <Image src="https://picsum.photos/800/600?3" alt="Zenith Collection" width={800} height={600} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" data-ai-hint="architectural bollard stone path" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-semibold">The Zenith Collection</h3>
                      <p>Architectural Exteriors</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollAnimation>
          
          <section className="relative h-[500px] md:h-[700px] flex items-center justify-center text-white text-center">
             <Image 
                src="https://picsum.photos/1600/900"
                alt="Mandapa Ritz-Carlton lobby"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="luxury resort lobby"
              />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg"></div>
            <div className="relative z-10 p-8">
              <ScrollAnimation>
                <h3 className="text-sm uppercase tracking-widest text-white/80 mb-4">FEATURED PROJECT</h3>
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h2>
                <blockquote className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto mb-8">
                  &quot;DUA&apos;s lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere.&quot;
                </blockquote>
                <Button size="lg" className="bg-white text-black hover:bg-white/80">Explore The Project</Button>
              </ScrollAnimation>
            </div>
          </section>

          <ScrollAnimation>
            <section>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">From The Journal</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                  <Image src="https://picsum.photos/600/400?4" alt="Abstract light and shadows" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="abstract light shadow" />
                  <h3 className="text-xl font-medium pt-2">The Science of Atmosphere: An Introduction to Human-Centric Lighting</h3>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">Read More →</a>
                </div>
                <div className="space-y-4">
                  <Image src="https://picsum.photos/600/400?5" alt="Molten brass" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="molten brass" />
                  <h3 className="text-xl font-medium pt-2">Material Focus: The Living Finish of Hand-Brushed Brass</h3>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">Read More →</a>
                </div>
                <div className="space-y-4">
                  <Image src="https://picsum.photos/600/400?6" alt="Designer sketching" width={600} height={400} className="rounded-lg object-cover" data-ai-hint="designer sketching black white" />
                  <h3 className="text-xl font-medium pt-2">Designer Spotlight: The Mind Behind the Aura Collection</h3>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">Read More →</a>
                </div>
              </div>
            </section>
          </ScrollAnimation>

        </div>
      </main>

      <Footer />
    </div>
  );
}
