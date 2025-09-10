"use client";

import { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(SplitText, Flip);

export function CTASection() {
    const ctaSectionRef = useRef<HTMLDivElement>(null);
    const ctaHeadlineRef = useRef<HTMLHeadingElement>(null);
    const ctaButtonRef = useRef<HTMLDivElement>(null);
    const ctaWrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          const mm = gsap.matchMedia();
          const headline = ctaHeadlineRef.current;
          const button = ctaButtonRef.current;
          const wrapper = ctaWrapperRef.current;
          const section = ctaSectionRef.current;

          if (!headline || !button || !wrapper || !section) return;

          // Mobile animation (screens up to 767px)
          mm.add("(max-width: 767px)", () => {
            const split = new SplitText(headline, { type: "words" });
            
            gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 90%',
                scrub: 1,
              }
            })
            .from(split.words, {
              opacity: 0,
              y: 30,
              duration: 0.8,
              stagger: 0.05,
              ease: 'power3.out',
            })
            .from(button, {
              opacity: 0,
              y: 30,
              duration: 1,
              ease: 'power3.out',
            }, "-=0.6");
          });

          // Desktop animation (screens 768px and wider)
          mm.add("(min-width: 768px)", () => {
            if (ctaSectionRef.current && ctaWrapperRef.current && ctaHeadlineRef.current && ctaButtonRef.current) {
              const split = new SplitText(headline, { type: "words" });
              
              gsap.set(button, { position: 'absolute', opacity: 0 });
      
              const state = Flip.getState(split.words);
      
              wrapper.classList.remove('justify-center', 'text-center');
              wrapper.classList.add('justify-between', 'text-left');
              headline.classList.remove('text-center');
              headline.classList.add('text-left');
              
              const ctaTl = gsap.timeline({
                  scrollTrigger: {
                      trigger: ctaSectionRef.current,
                      start: 'top 50%',
                      end: 'bottom 80%',
                      scrub: 1,
                  }
              });
      
              ctaTl.add(Flip.from(state, {
                  duration: 1,
                  stagger: 0.05,
                  ease: 'power2.inOut'
              }))
              .to(button, {
                  position: 'relative',
                  opacity: 1,
                  duration: 0.5,
                  ease: 'power2.inOut'
              }, "-=0.75");
            }
          });
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={ctaSectionRef} className="py-20 md:py-40">
            <div className="container mx-auto">
                <div 
                  ref={ctaWrapperRef}
                  className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-12 text-center"
                >
                    <h2 
                      ref={ctaHeadlineRef}
                      className="text-4xl md:text-7xl text-white max-w-2xl text-center"
                    >
                        Big company <span className="font-bold">resources,</span> small company <span className="font-bold">care.</span>
                    </h2>
                    <div ref={ctaButtonRef} className="flex-shrink-0">
                        <Button size="lg" className="bg-transparent advanced-glass text-white hover:bg-white hover:text-black">Book a Consultation</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
