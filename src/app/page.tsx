
"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { HeroSection } from '@/components/page/home/hero-section';
import { PhilosophySection } from '@/components/page/home/philosophy-section';
import { ServicesSection } from '@/components/page/home/services-section';
import { ClientsSection } from '@/components/page/home/clients-section';
import { FeaturedProjectSection } from '@/components/page/home/featured-project-section';
import { TeamSection } from '@/components/page/home/team-section';
import { InspirationSection } from '@/components/page/home/inspiration-section';
import { JournalSection } from '@/components/page/home/journal-section';
import { CTASection } from '@/components/page/home/cta-section';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(content.current, 
          { opacity: 0 }, 
          { 
            opacity: 1,
            scrollTrigger: {
              trigger: document.body,
              start: 'top 80%',
              end: 'top 20%',
              scrub: true,
            }
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#111111] text-white antialiased overflow-hidden">
      <HeroSection />
      <Header />
      <div ref={contentRef} className="relative z-10">
        <main className="bg-transparent">
          <PhilosophySection />
          <ServicesSection />
          <ClientsSection />
          <FeaturedProjectSection />
          <TeamSection />
          <InspirationSection />
          <JournalSection />
          <CTASection />
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
