
"use client";

import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import placeholderImages from '@/lib/placeholder-images.json';

gsap.registerPlugin(ScrollTrigger);

const cardVariants = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
};

export function FeaturedProjectSection() {
    const featuredProjectSectionRef = useRef<HTMLDivElement>(null);
    const featuredProjectImageRef = useRef<HTMLImageElement>(null);
    
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (featuredProjectSectionRef.current && featuredProjectImageRef.current) {
              gsap.fromTo(featuredProjectImageRef.current,
                { yPercent: -10 },
                {
                  yPercent: 10,
                  ease: "none",
                  scrollTrigger: {
                    trigger: featuredProjectSectionRef.current,
                    scrub: true
                  }
                }
              );
            }
        });
        return () => ctx.revert();
    }, []);

    const { featured_project } = placeholderImages;

    return (
        <section ref={featuredProjectSectionRef} className="py-8 md:py-16 px-4 md:px-8">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative w-full h-[80vh] rounded-2xl overflow-hidden"
            >
              <Image
                ref={featuredProjectImageRef}
                src={featured_project.src}
                alt={featured_project.alt}
                fill
                className="object-cover"
                data-ai-hint={featured_project.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <div className="max-w-lg">
                  <h2 className="text-xs font-bold tracking-widest uppercase text-white/80 mb-2">Featured Project</h2>
                  <h3 className="text-3xl md:text-4xl font-semibold">Mandapa, a Ritz-Carlton Reserve</h3>
                  <p className="text-white/80 text-base md:text-lg mt-1">Ubud, Bali</p>
                  <Button asChild size="default" className="mt-6 bg-white text-black hover:bg-white/80">
                      <Link href="/projects/mandapa-ritz-carlton">View Case Study</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
        </section>
    );
}
