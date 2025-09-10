
"use client";

import { useRef, useLayoutEffect } from 'react';
import { ReadMoreLink } from '@/components/read-more-link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function PhilosophySection() {
    const philosophySectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          if (philosophySectionRef.current) {
            const philosophySplit = new SplitText(philosophySectionRef.current.querySelectorAll('h2'), { type: 'words,chars' });
            const artistryEl = philosophySectionRef.current.querySelector('[data-anim="artistry"]');
            const expertiseEl = philosophySectionRef.current.querySelector('[data-anim="expertise"]');
            const meetsEl = philosophySectionRef.current.querySelector('[data-anim="meets"]');
    
            const mm = gsap.matchMedia(philosophySectionRef.current);
            mm.add({
              isMobile: "(max-width: 767px)",
              isDesktop: "(min-width: 768px)",
            }, (context) => {
              let { isMobile } = context.conditions as {isMobile: boolean};
              const philosophyTl = gsap.timeline({
                scrollTrigger: {
                  trigger: philosophySectionRef.current,
                  start: isMobile ? 'top 60%' : 'top 80%',
                  end: 'bottom 90%',
                  scrub: 1,
                }
              });
              philosophyTl.from(philosophySplit.chars, {
                  opacity: 0.2,
                  y: 20,
                  stagger: 0.02,
                  ease: 'power2.out',
              })
              .from([artistryEl, expertiseEl], {
                  autoAlpha: 0,
                  y: (i) => (i === 0 ? -40 : 40),
                  stagger: 0.1,
                  ease: 'power3.out'
              }, "-=0.7")
              .from(meetsEl, {
                  autoAlpha: 0,
                  scale: 0.5,
                  ease: 'power3.out'
              }, "-=0.4");
            });
          }
        });
        return () => ctx.revert();
      }, []);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto">
                <div ref={philosophySectionRef} className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-20 gap-x-12 px-4 md:px-12">
                    <div className="md:w-1/2 max-w-xl space-y-8">
                    <h2 className="text-4xl md:text-6xl leading-tight">
                        We breathe life
                        <br />
                        into <span className="font-bold">spaces.</span>
                    </h2>
                    <h2 className="text-4xl md:text-6xl leading-tight">
                        We <span className="font-bold">sculpt soul</span>
                        <br />
                        with light and shadow.
                    </h2>
                    <ReadMoreLink href="/philosophy" size="large" />
                    </div>
                    <div className="flex justify-center items-center" data-anim="artistry-expertise">
                        <div className="relative w-[190px] h-[330px]">
                            <div data-anim="artistry" className="absolute top-0 left-1/2 -translate-x-1/2 w-[189px] h-[189px] border border-white/50 rounded-full flex items-center justify-center">
                                <span className="text-xl">Artistry</span>
                            </div>
                            <div data-anim="expertise" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[189px] h-[189px] border border-white/50 rounded-full flex items-center justify-center">
                                <span className="text-xl">Expertise</span>
                            </div>
                            <div data-anim="meets" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <span className="text-xs font-bold tracking-widest text-white/80">MEETS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
