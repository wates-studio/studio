
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

const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={FADE_IN_VARIANTS}
      className="py-16 md:py-24"
    >
      {children}
    </motion.section>
  );
}


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
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const collections = [
    {
      name: "The Aura Collection",
      description: "Sculptural Pendants",
      image: "https://picsum.photos/800/1200",
      hint: "pendant light"
    },
    {
      name: "The Terra Collection",
      description: "Earthen Sconces",
      image: "https://picsum.photos/800/1200",
      hint: "wall sconce"
    },
    {
      name: "The Zenith Collection",
      description: "Architectural Exteriors",
      image: "https://picsum.photos/800/1200",
      hint: "outdoor lighting"
    }
  ];

  const journalArticles = [
    {
      title: "The Science of Atmosphere: An Introduction to Human-Centric Lighting",
      image: "https://picsum.photos/600/400",
      hint: "light shadows"
    },
    {
      title: "Material Focus: The Living Finish of Hand-Brushed Brass",
      image: "https://picsum.photos/600/400",
      hint: "molten brass"
    },
    {
      title: "Designer Spotlight: The Mind Behind the Aura Collection",
      image: "https://picsum.photos/600/400",
      hint: "designer sketching"
    }
  ];

  return (
    <div className="bg-[#111111] text-white font-body antialiased">
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

      {/* Section 1: Hero */}
      <div ref={targetRef} className="relative h-[200vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ y, opacity, scale }}
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
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Content */}
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
            
            {/* Bottom Controls */}
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
      
      <main className="bg-[#F4F1ED] text-[#111111] z-10 relative">
        {/* Section 3: The Thesis */}
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="text-left">
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">THE ARTISANAL TECHNOLOGIST</h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling.
                </p>
                <a href="#" className="inline-block mt-6 text-base font-medium group">
                  Our Philosophy
                  <span className="block h-[1px] bg-[#111111] max-w-0 group-hover:max-w-full transition-all duration-300"></span>
                </a>
              </div>
              <div className="h-96 md:h-[600px] relative">
                <Image src="https://picsum.photos/800/1000" alt="Architectural DUA product" fill className="object-cover" data-ai-hint="architectural lighting" />
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Section 4: Featured Collections */}
        <AnimatedSection>
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-12">Curated Collections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  variants={FADE_IN_VARIANTS}
                  className="relative group aspect-[2/3] overflow-hidden"
                >
                  <Image src={collection.image} alt={collection.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" data-ai-hint={collection.hint} />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-end justify-center">
                    <div className="text-white text-center p-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <h3 className="text-xl font-medium">{collection.name}</h3>
                      <p className="text-sm text-white/80">{collection.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Section 5: Featured Project */}
        <div className="relative h-[70vh] my-16 md:my-24">
            <Image 
              src="https://picsum.photos/1920/1080"
              alt="Mandapa Ritz-Carlton lobby"
              fill
              className="object-cover"
              data-ai-hint="luxury hotel lobby"
            />
             <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center justify-center text-white text-center px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                variants={FADE_IN_VARIANTS}
                 className="bg-black/20 backdrop-blur-md border border-white/20 p-8 md:p-12 max-w-3xl"
              >
                <h4 className="text-sm uppercase tracking-widest text-white/80 mb-4">FEATURED PROJECT</h4>
                <h3 className="text-3xl md:text-4xl font-medium mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h3>
                <blockquote className="text-lg md:text-xl italic max-w-2xl mx-auto my-6">
                  "DUA's lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere."
                </blockquote>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black mt-6">
                   Explore The Project
                </Button>
              </motion.div>
            </div>
        </div>

        {/* Section 6: The Journal */}
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">From The Journal</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {journalArticles.map((article, index) => (
                <motion.div 
                  key={article.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  variants={FADE_IN_VARIANTS}
                >
                  <div className="aspect-video relative mb-4 overflow-hidden">
                    <Image src={article.image} alt={article.title} fill className="object-cover" data-ai-hint={article.hint} />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                  <a href="#" className="text-sm font-medium group">
                    Read More
                    <span className="block h-[1px] bg-[#111111] max-w-0 group-hover:max-w-full transition-all duration-300 w-1/4"></span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}

    