
"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { SceneControl } from '@/components/page/scene-control';

gsap.registerPlugin(ScrollTrigger, SplitText);

interface ScenesProps {
  lightsOn: boolean;
  setLightsOn: (on: boolean) => void;
  activeSceneId: string;
  setActiveSceneId: (id: string) => void;
}

export function Scenes({ lightsOn, setLightsOn, activeSceneId, setActiveSceneId }: ScenesProps) {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current || !headlineRef.current || !stickyContainerRef.current) return;

    gsap.set(headlineRef.current, { visibility: 'hidden' });

    const lightTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "+=50%",
      scrub: true,
      onUpdate: (self) => {
        setLightsOn(self.progress < 0.1);
      },
    });

    const split = new SplitText(headlineRef.current, { type: "words, lines" });
    gsap.set(split.words, { opacity: 0, yPercent: 50 });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        pin: stickyContainerRef.current,
        start: "top top",
        end: "+=50%",
        scrub: 1,
      }
    });

    tl.set(headlineRef.current, { visibility: 'visible' })
      .to(split.words, {
        opacity: 1,
        yPercent: 0,
        stagger: 0.05,
        ease: "power2.out",
        duration: 1
      });

    return () => {
      lightTrigger.kill();
      tl.scrollTrigger?.kill();
      split.revert();
      // A safety cleanup for all ScrollTriggers to prevent issues on re-renders
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [setLightsOn]);

  return (
    <section>
      <div ref={heroRef} className="relative h-[150vh] w-full">
        <div ref={stickyContainerRef} className="sticky top-0 h-screen w-full flex flex-col items-center justify-center text-white text-center p-4">
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-center">
              <h1 
                ref={headlineRef}
                className="text-4xl md:text-5xl tracking-tight font-light"
                style={{ visibility: 'hidden' }}
              >
                We <span className="font-bold">breathe life</span> <br /> into <span className="font-bold">spaces</span>
              </h1>
            </div>
          </div>

          <SceneControl 
            lightsOn={lightsOn}
            setLightsOn={setLightsOn}
            activeSceneId={activeSceneId}
            setActiveSceneId={setActiveSceneId}
          />
        </div>
      </div>
      
      <div className="h-24"></div> 
    </section>
  );
}
