"use client";

import { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/header';
import { HeroGallery } from '@/components/home/hero-gallery';
import { cn } from '@/lib/utils';

function ThesisSection({ opacity }: { opacity: number }) {
  return (
    <div
      className="absolute inset-0 bg-[#111111] flex items-center justify-center transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div className="max-w-3xl text-center text-white p-8">
        <h1
          className="text-3xl md:text-4xl font-semibold tracking-widest uppercase transition-opacity duration-1000"
          style={{ opacity }}
        >
          THE ARTISANAL TECHNOLOGIST
        </h1>
        <p
          className="mt-8 text-lg md:text-xl leading-relaxed text-[#A3A3A3] transition-opacity duration-1000 delay-300"
          style={{ opacity }}
        >
          In the heart of Bali, where ancient craft is a living language, we found our purpose. We don&apos;t just make lights; we engineer atmosphere. Each piece is a dialogue between the timeless skill of the human hand and the unflinching precision of modern technology. The result is not simply a lamp, but a feeling given form. This is the soul of our machine.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setVh(window.innerHeight);

    handleResize();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const animationMetrics = useMemo(() => {
    if (vh === 0) return { heroOpacity: 1, forceLightsOff: false, thesisOpacity: 0, bodyBgClass: 'bg-[#111111]' };

    const scrollProgress = scrollY / vh;

    // --- Hero Animation ---
    // Start fading out hero section after 0.75 viewports scrolled
    const heroFadeStart = 0.75;
    const heroFadeEnd = 1.25;
    const heroOpacity = 1 - Math.min(1, Math.max(0, (scrollProgress - heroFadeStart) / (heroFadeEnd - heroFadeStart)));
    const forceLightsOff = scrollProgress > 0.65;

    // --- Thesis Animation ---
    // Start fading in thesis after 1.25 viewports scrolled
    const thesisFadeInStart = 1.25;
    const thesisFadeInEnd = 1.75;
    const thesisVisibleStart = 1.75;
    const thesisFadeOutStart = 2.25;
    const thesisFadeOutEnd = 2.75;

    const thesisOpacity = scrollProgress < thesisVisibleStart
      ? Math.min(1, Math.max(0, (scrollProgress - thesisFadeInStart) / (thesisFadeInEnd - thesisFadeInStart)))
      : 1 - Math.min(1, Math.max(0, (scrollProgress - thesisFadeOutStart) / (thesisFadeOutEnd - thesisFadeOutStart)));

    // --- Background Transition ---
    const bgTransitionStart = 2.5;
    const bodyBgClass = scrollProgress > bgTransitionStart ? 'bg-[#F4F1ED]' : 'bg-[#111111]';

    return { heroOpacity, forceLightsOff, thesisOpacity, bodyBgClass };
  }, [scrollY, vh]);

  return (
    <div className={cn('transition-colors duration-1000', animationMetrics.bodyBgClass)}>
      <Header />
      <main>
        <div style={{ height: '300vh' }} className="relative">
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: animationMetrics.heroOpacity, willChange: 'opacity' }}
            >
              <HeroGallery forceLightsOff={animationMetrics.forceLightsOff} />
            </div>
            <ThesisSection opacity={animationMetrics.thesisOpacity} />
          </div>
        </div>

        <section className="min-h-screen p-8 md:p-16 lg:p-24 text-[#111111]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold">The Unveiling</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              As we transition from philosophy to the tangible, our collections emerge. The subsequent sections will showcase our featured products, projects, and stories from the journal.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
