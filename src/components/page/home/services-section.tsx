
"use client";

import { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ReadMoreLink } from '@/components/read-more-link';
import { services } from '@/data/home-page';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export function ServicesSection() {
    const servicesSectionRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (servicesSectionRef.current) {
                const mm = gsap.matchMedia(servicesSectionRef.current);
                const serviceTextSplit = new SplitText(servicesSectionRef.current.querySelectorAll('h3, p'), { type: 'words' });
                const serviceItems = servicesSectionRef.current.querySelectorAll('[data-anim="service-item"]');
                gsap.set(serviceItems, { opacity: 0, x: -30 });

                const createServicesTimeline = (start: string) => {
                  const servicesTl = gsap.timeline({
                    scrollTrigger: {
                      trigger: servicesSectionRef.current,
                      start: start,
                      end: 'center center',
                      scrub: 1,
                    }
                  });
        
                  servicesTl.to(serviceItems, {
                      opacity: 1,
                      x: 0,
                      stagger: 0.05,
                      ease: 'power2.out'
                  })
                  .from(serviceTextSplit.words, {
                      opacity: 0.2,
                      y: 10,
                      stagger: 0.01,
                      ease: 'power2.out'
                  }, "-=0.25");
                };
                
                mm.add({
                  isMobile: "(max-width: 767px)",
                  isDesktop: "(min-width: 768px)",
                }, (context) => {
                  let { isMobile } = context.conditions as {isMobile: boolean};
                  createServicesTimeline(isMobile ? "top 60%" : "top 80%");
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto">
                <div ref={servicesSectionRef} className="grid md:grid-cols-2 gap-16 items-start px-4 md:px-12 mt-28">
                    <div className="flex flex-col gap-6 items-start">
                        <p className="text-sm font-bold tracking-widest uppercase text-white/50">our lighting services</p>
                        <div className="w-full max-w-[354px] flex flex-col gap-2.5 items-start">
                        {services.map((service, i) => (
                            <div
                            key={i}
                            data-anim="service-item"
                            className="w-full"
                            >
                            <Link
                                href="/services"
                                className="group flex items-center justify-between w-full gap-4 py-3 px-5 bg-transparent border border-white/50 rounded-2xl transition-all hover:bg-white/10"
                            >
                                <span className="text-sm">{service}</span>
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </Link>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="max-w-md space-y-8">
                        <h3 className="text-3xl md:text-4xl leading-tight">
                        The way of DUA is balancing <span className="font-bold">artistry</span> and <span className="font-bold">technical refinement.</span>
                        </h3>
                        <p className="text-xl leading-relaxed text-white/80">
                        It is where light meets space, heritage craftsmanship meets advanced technology, and physical presence meets ethereal absence. We believe the <span className="font-bold">purpose of light</span> is not simply to illuminate, but to transform <span className="font-bold">how a space is felt.</span> This is the balance we pursue. This is DUA.
                        </p>
                        <ReadMoreLink href="/philosophy" />
                    </div>
                </div>
            </div>
        </section>
    );
}
