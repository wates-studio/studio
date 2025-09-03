
"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const MotionImage = motion(Image);

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <div className="bg-[#111111] text-white antialiased">
      <AnimatePresence>
        {showHeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={targetRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
            className="relative h-full w-full"
          >
            <MotionImage
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
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-5xl md:text-7xl font-light tracking-tighter"
              >
                Where Soul Meets Science.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-4 text-lg md:text-xl font-extralight text-white/80"
              >
                Handcrafted lighting from Bali, engineered for the world.
              </motion.p>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm px-4">
              <div className="flex items-center justify-center gap-8 text-sm">
                <button 
                  onClick={() => setLightsOn(true)} 
                  className={cn("flex items-center gap-2 transition-colors", lightsOn ? "text-white" : "text-white/50 hover:text-white")}
                >
                  <Sun size={18} /> Lights On
                </button>
                <button 
                  onClick={() => setLightsOn(false)} 
                  className={cn("flex items-center gap-2 transition-colors", !lightsOn ? "text-white" : "text-white/50 hover:text-white")}
                >
                  <Moon size={18} /> Lights Off
                </button>
              </div>
            </div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
            >
              <ArrowDown className="animate-bounce" size={24} />
            </motion.div>

          </motion.div>
        </div>
      </div>

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

    