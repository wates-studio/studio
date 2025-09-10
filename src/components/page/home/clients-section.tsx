
"use client";

import { useRef, useLayoutEffect } from 'react';
import { clientLogos } from '@/data/home-page';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ClientsSection() {
    const clientsSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (clientsSectionRef.current) {
                const clientsTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: clientsSectionRef.current,
                        start: 'top 80%',
                        end: 'center 80%',
                        scrub: 1,
                    }
                });
                clientsTl.from(clientsSectionRef.current.querySelector('h2'), {
                    opacity: 0,
                    y: 20,
                })
                .from(clientsSectionRef.current.querySelector('[data-anim="marquee"]'), {
                    opacity: 0,
                    y: 30,
                }, "-=0.3");
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section ref={clientsSectionRef} className="py-20 md:py-32">
            <div className="container mx-auto">
              <div className="text-center px-4 md:px-12">
                <h2 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">
                  OUR CLIENTS
                </h2>
                <div 
                  data-anim="marquee"
                  className="relative overflow-hidden"
                >
                  <div className="flex animate-marquee">
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                      <div key={index} className="flex-shrink-0 w-64 mx-4 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-300">
                        {logo.component}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </section>
    );
}
