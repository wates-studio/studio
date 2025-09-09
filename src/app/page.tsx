
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Scenes } from '@/components/page/scenes';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Header } from '@/components/header';
import { scenes } from '@/data/scenes';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { InfoCarousel } from '@/components/page/info-carousel';
import { ArrowRight } from 'lucide-react';
import { ReadMoreLink } from '@/components/read-more-link';

const teamMembers = [
  {
    name: 'Anya Sharma',
    title: 'Founder & Creative Director',
    image: 'https://picsum.photos/400/500?random=10',
    hint: 'woman portrait professional',
  },
  {
    name: 'Leo De Wit',
    title: 'Head of Engineering',
    image: 'https://picsum.photos/400/500?random=11',
    hint: 'man portrait professional',
  },
  {
    name: 'Kenji Tanaka',
    title: 'Master Craftsman',
    image: 'https://picsum.photos/400/500?random=12',
    hint: 'craftsman portrait serious',
  },
  {
    name: 'Isabella Rossi',
    title: 'Lead Designer',
    image: 'https://picsum.photos/400/500?random=13',
    hint: 'designer portrait professional',
    }
];

const designers = [
  {
    name: 'Achille Castiglioni',
    quote: "A master of form and wit, Castiglioni saw design as a tool for solving problems with intelligence and grace.",
    description: "A master of form and wit, Castiglioni saw design as a tool for solving problems with intelligence and grace. His belief that an object's purpose must justify its existence is a constant inspiration.",
    image: 'https://picsum.photos/400/500?6',
    hint: 'portrait achille castiglioni'
  },
  {
    name: 'Poul Henningsen',
    quote: "The Danish designer who revolutionized lighting with his PH-lamp series, creating glare-free, uniform illumination.",
    description: "The Danish designer who revolutionized lighting with his PH-lamp series, creating glare-free, uniform illumination that shaped the aesthetics of Danish modernism.",
    image: 'https://picsum.photos/400/500?7',
    hint: 'portrait poul henningsen'
  },
  {
    name: 'Ingo Maurer',
    quote: "Known as the 'poet of light,' Maurer was a German industrial designer who consistently pushed the boundaries of art and technology.",
    description: "Known as the 'poet of light,' Maurer was a German industrial designer who specialized in lamps and light installations, consistently pushing the boundaries of art and technology.",
    image: 'https://picsum.photos/400/500?8',
    hint: 'portrait ingo maurer'
  }
];


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

const services = [
    "Design & Product Development",
    "Architectural Master Planning & Design",
    "Consultancy & Sourcing",
    "Energy Conservation & Safety",
    "Project Management"
];

const clientLogos = [
    { name: 'Evergreen', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.33 25.33h3.72v-5.02h2.52v-2.8h-2.52v-3.7c0-.98.3-1.47 1.02-1.47h1.41v-3.1h-2.1c-2.4 0-3.66 1.2-3.66 3.61v4.66H5.2v2.8h2.13v5.02zM16.12 25.33h3.71v-9.7c0-2.58 1.23-3.84 3.48-3.84 2.22 0 3.45 1.26 3.45 3.84v9.7h3.71v-10.1c0-4.47-2.3-6.7-6.2-6.7-3.93 0-6.17 2.23-6.17 6.7v10.1zM34.46 25.33h3.72v-9.38h3.48v-2.8h-3.48v-5.2c0-1.26.45-1.89 1.5-1.89.54 0 .99.1 1.35.2l.6-2.6c-.5-.2-1.2-.3-2.1-.3-2.2 0-3.36 1.2-3.36 3.5v6.28h-2.17v2.8h2.17v9.38zM51.17 25.33h3.5v-9.51c0-2.37-1.17-3.54-3.12-3.54-1.9 0-3.08 1.17-3.08 3.54v9.5h3.5v-9.2c0-1.17.6-1.74 1.44-1.74s1.44.57 1.44 1.74v9.2zM51.32 10.3c0-.96.78-1.74 1.74-1.74s1.74.78 1.74 1.74-.78 1.74-1.74 1.74-1.74-.78-1.74-1.74zM66.56 25.33h3.7v-13.8h-3.7v13.8zM68.4 10.1c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8zM82.2 25.33h3.71v-9.7c0-2.58 1.23-3.84 3.48-3.84 2.22 0 3.45 1.26 3.45 3.84v9.7h3.71v-10.1c0-4.47-2.3-6.7-6.2-6.7-3.93 0-6.17 2.23-6.17 6.7v10.1zM100.86 25.33l2.36-3.8h3.04v3.8h3.7v-13.8h-4.83c-3.2 0-4.85 1.6-4.85 4.3 0 1.9.9 2.9 2.4 2.9h1.9v.8h-1.8c-2.4 0-3.6-1.1-3.6-3.2s1.2-3.2 3.6-3.2h4.55v-2.7h-7.3v13.8h3.7zM118.9 25.33h3.7v-13.8h-3.7v13.8zM120.7 10.1c0-1 .8-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8zM137.9 19.33c.03-3.05-1.9-5.4-5.3-5.4-3.48 0-5.33 2.3-5.33 5.3s1.82 5.3 5.3 5.3c1.7 0 3.0-.5 3.9-1.4l-2.2-2c-.5.5-1.1.8-1.8.8-1.2 0-1.9-.8-1.9-2.1h6.3v-.5zM132.6 18c.1-1.3.8-2.1 1.9-2.1s1.8.8 1.9 2.1h-3.8z"></path></svg> },
    { name: 'Apex', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M7.14 25.04l-5.8-9.4H1.22v9.4H0v-15h2.8l5.8 9.4h.12v-9.4h1.2v15zM22.8 18.04c0-3.4-2.4-5.5-5.9-5.5-3.5 0-5.9 2-5.9 5.5s2.4 5.5 5.9 5.5c3.5 0 5.9-2.1 5.9-5.5zm-10.6 0c0-2.6 1.8-4.3 4.7-4.3s4.7 1.7 4.7 4.3-1.8 4.3-4.7 4.3-4.7-1.7-4.7-4.3zM37.83 25.04l-5.8-9.4h.12v9.4h1.2v-15h-1.34l-5.8 9.4v-9.4h-1.2v15h1.34l5.8-9.4h.12v9.4zM53.1 12.74v12.3h-1.2v-12.3h-3.8v-1.2h8.8v1.2zM64.7 10.04v15h-1.2v-15h-5.2v-1.2h11.6v1.2zM75.2 10.04h1.2v13.8h4.7v1.2h-5.9zM88.7 18.04c0-3.4-2.4-5.5-5.9-5.5-3.5 0-5.9 2-5.9 5.5s2.4 5.5 5.9 5.5c3.5 0 5.9-2.1 5.9-5.5zm-10.6 0c0-2.6 1.8-4.3 4.7-4.3s4.7 1.7 4.7 4.3-1.8 4.3-4.7 4.3-4.7-1.7-4.7-4.3zM103.73 25.04l-5.8-9.4h.12v9.4h1.2v-15h-1.34l-5.8 9.4v-9.4h-1.2v15h1.34l5.8-9.4h.12v9.4zM114.1 10.04h1.2v15h-1.2zM124.6 18.04c0-3.4-2.4-5.5-5.9-5.5-3.5 0-5.9 2-5.9 5.5s2.4 5.5 5.9 5.5c3.5 0 5.9-2.1 5.9-5.5zm-10.6 0c0-2.6 1.8-4.3 4.7-4.3s4.7 1.7 4.7 4.3-1.8 4.3-4.7 4.3-4.7-1.7-4.7-4.3zM135.9 10.04h1.2v15h-1.2zM149.3 15.44h-4.3v-4.2h-1.2v9.6h1.2v-4.2h4.3v5.4h1.2v-12h-1.2z"></path></svg> },
    { name: 'Aura', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.8 15.1L0 25.2V5zM29.5 25.2h-3.3l-5-9.9h-.1v9.9h-2.9V5h3.3l5 9.9h.1V5h2.9v20.2zM45.5 15.1c0 4.1-2.9 6.4-6.6 6.4-3.7 0-6.6-2.3-6.6-6.4s2.9-6.4 6.6-6.4c3.7 0 6.6 2.3 6.6 6.4zm-10.4 0c0 2.8 1.9 4.3 3.8 4.3s3.8-1.5 3.8-4.3-1.9-4.3-3.8-4.3-3.8 1.5-3.8 4.3zM52.3 15.1L57.5 5h3.3v20.2h-3.1V14.8l-5.1 10.4h-3L44.4 15v10.2h-3.1V5h3.1L50 14.7V5h3.1v10.1zM72.9 25.2h-3.3l-5-9.9h-.1v9.9h-2.9V5h3.3l5 9.9h.1V5h2.9v20.2zM88.9 15.1c0 4.1-2.9 6.4-6.6 6.4-3.7 0-6.6-2.3-6.6-6.4s2.9-6.4 6.6-6.4c3.7 0 6.6 2.3 6.6 6.4zm-10.4 0c0 2.8 1.9 4.3 3.8 4.3s3.8-1.5 3.8-4.3-1.9-4.3-3.8-4.3-3.8 1.5-3.8 4.3zM100.8 5h3.1v20.2h-3.1zM113 25.2h-3.3l-5-9.9h-.1v9.9h-2.9V5h3.3l5 9.9h.1V5h2.9v20.2zM129.1 15.1c0 4.1-2.9 6.4-6.6 6.4-3.7 0-6.6-2.3-6.6-6.4s2.9-6.4 6.6-6.4c3.7 0 6.6 2.3 6.6 6.4zm-10.4 0c0 2.8 1.9 4.3 3.8 4.3s3.8-1.5 3.8-4.3-1.9-4.3-3.8-4.3-3.8 1.5-3.8 4.3zM140 5h3.1v20.2h-3.1z"></path></svg> },
    { name: 'Strive', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.3 12.4v12.6H8.9V12.4H0V9h21.2v3.4zM24.8 25V9h3.4v16zM31.8 9h3.4v16h-3.4zM47.7 15c0-4.3-3.1-6.9-7.5-6.9-4.4 0-7.5 2.6-7.5 6.9s3.1 6.9 7.5 6.9c4.4 0 7.5-2.6 7.5-6.9zm-11.6 0c0-2.8 2.1-4.8 4.1-4.8s4.1 2 4.1 4.8-2.1 4.8-4.1 4.8-4.1-2-4.1-4.8zM60.1 25V9h3.4v16zM73.4 9l-4.2 11.1h-.1L64.9 9h-4.1v16h3.2V13.3h.1l3.7 9.7h.9l3.7-9.7h.1v11.7h3.2V9zM88.5 15c0-4.3-3.1-6.9-7.5-6.9-4.4 0-7.5 2.6-7.5 6.9s3.1 6.9 7.5 6.9c4.4 0 7.5-2.6 7.5-6.9zm-11.6 0c0-2.8 2.1-4.8 4.1-4.8s4.1 2 4.1 4.8-2.1 4.8-4.1 4.8-4.1-2-4.1-4.8zM99.9 25V9h3.4v16zM106.9 9h3.4v16h-3.4zM122.9 15c0-4.3-3.1-6.9-7.5-6.9s-7.5 2.6-7.5 6.9 3.1 6.9 7.5 6.9 7.5-2.6 7.5-6.9zm-11.6 0c0-2.8 2.1-4.8 4.1-4.8s4.1 2 4.1 4.8-2.1 4.8-4.1 4.8-4.1-2-4.1-4.8zM135.3 25V9h3.4v16zM150 9v3.4h-5.4v3.1h4.9v3.4h-4.9v6.1h-3.4V9z"></path></svg> },
    { name: 'Momentum', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12.98 25.3V9h4.04l5.92 10.32V9h3.84v16.32h-3.48l-6.48-11.28V25.3zM29.54 17.1c0-4.64 3.4-7.92 8.32-7.92 4.92 0 8.32 3.28 8.32 7.92s-3.4 7.92-8.32 7.92c-4.92 0-8.32-3.28-8.32-7.92zm13.12 0c0-2.8-1.96-4.92-4.8-4.92s-4.8 2.12-4.8 4.92 1.96 4.92 4.8 4.92 4.8-2.12 4.8-4.92zM65.18 25.3V9h3.52v16.32zM71.42 9h3.88l5.88 10.32V9h3.84v16.32h-3.4L75.1 14.16V25.3h-3.68zM89.34 17.1c0-4.64 3.4-7.92 8.32-7.92 4.92 0 8.32 3.28 8.32 7.92s-3.4 7.92-8.32 7.92c-4.92 0-8.32-3.28-8.32-7.92zm13.12 0c0-2.8-1.96-4.92-4.8-4.92s-4.8 2.12-4.8 4.92 1.96 4.92 4.8 4.92 4.8-2.12 4.8-4.92zM110.18 9h3.52v16.32h-3.52zM127.3 19.9l-2.48-2.48c.84-1.04 1.32-2.4 1.32-3.88 0-4.64-3.4-7.92-8.32-7.92-4.92 0-8.32 3.28-8.32 7.92s3.4 7.92 8.32 7.92c1.92 0 3.6-.52 4.92-1.44l2.52 2.52zm-8.12-1.92c-3.12 0-4.8-2.12-4.8-4.92s1.68-4.92 4.8-4.92 4.8 2.12 4.8 4.92-1.68 4.92-4.8 4.92zM133.7 9h3.52v16.32h-3.52z"></path></svg> },
    { name: 'Globex', component: <svg role="img" viewBox="0 0 150 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M17.1 15.1c0-5-3.6-8.5-9-8.5S-.9 10.1-.9 15.1s3.6 8.5 9 8.5 9-3.5 9-8.5zm-14.6 0c0-3.1 2.3-5.7 5.6-5.7s5.6 2.6 5.6 5.7-2.3 5.7-5.6 5.7-5.6-2.6-5.6-5.7zM29.5 23.6h-3.4V9.4h3.4zM34.9 23.6V9.4h8.3c4.1 0 6.3 2.4 6.3 5.4 0 2-1 3.7-2.9 4.6l3.4 4.2h-4l-3-4h-4.7v4zm4.7-7.2h3.2c2.1 0 3.2-1.1 3.2-2.7s-1.1-2.7-3.2-2.7h-3.2zM52.9 23.6V9.4h3.4v14.2zM71.8 15.1c0-5-3.6-8.5-9-8.5s-9 3.5-9 8.5 3.6 8.5 9 8.5 9-3.5 9-8.5zm-14.6 0c0-3.1 2.3-5.7 5.6-5.7s5.6 2.6 5.6 5.7-2.3 5.7-5.6 5.7-5.6-2.6-5.6-5.7zM89.2 15.1c0-5-3.6-8.5-9-8.5s-9 3.5-9 8.5 3.6 8.5 9 8.5 9-3.5 9-8.5zm-14.6 0c0-3.1 2.3-5.7 5.6-5.7s5.6 2.6 5.6 5.7-2.3 5.7-5.6 5.7-5.6-2.6-5.6-5.7zM97.1 23.6V9.4h3.4v14.2zM113.8 23.6h-3.9l-6.1-8.5v8.5h-3.4V9.4h3.9l6.1 8.5V9.4h3.4zM123.8 23.6l-3.2-4.5-3.2 4.5h-4.1l5.2-7.1-5-6.9h4.1l3 4.2 3-4.2h4.1l-5 6.9 5.2 7.1zM140.2 23.6V9.4h3.4v14.2z"></path></svg> }
];

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);
  const [activeSceneId, setActiveSceneId] = useState(scenes[0].id);
  const activeScene = scenes.find((scene) => scene.id === activeSceneId) || scenes[0];

  return (
    <div className="bg-[#111111] text-white antialiased">
      {/* Persistent Background */}
      <div className="fixed inset-0 z-0">
        <AnimatePresence>
          {scenes.map((scene) => (
            <motion.div
              key={scene.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: scene.id === activeSceneId ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{ opacity: lightsOn ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={scene.imageOn}
                  alt={`Luxurious ${scene.name} with DUA lighting fixtures on`}
                  fill
                  priority
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
              <motion.div
                animate={{ opacity: lightsOn ? 0 : 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={scene.imageOff}
                  alt={`Luxurious ${scene.name} with DUA lighting fixtures off`}
                  fill
                  priority
                  className="object-cover"
                  quality={90}
                />
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="relative z-20">
        <Header />
      </div>
      
      <div className="relative z-10">
        <Scenes 
          lightsOn={lightsOn}
          setLightsOn={setLightsOn}
          activeSceneId={activeSceneId}
          setActiveSceneId={setActiveSceneId}
        />

        <main className="bg-transparent">
          {/* Section 2: The Philosophy & Services */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.2} className="flex flex-col gap-28">

                {/* Philosophy Part */}
                <motion.div variants={cardVariants} className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-y-20 gap-x-12 px-12">
                  <div className="md:w-1/2 max-w-xl space-y-8">
                    <h2 className="text-5xl md:text-6xl leading-tight">
                      We breathe life
                      <br />
                      into <span className="font-bold">spaces.</span>
                    </h2>
                    <h2 className="text-5xl md:text-6xl leading-tight">
                      We <span className="font-bold">sculpt soul</span>
                      <br />
                      with light and shadow.
                    </h2>
                    <ReadMoreLink href="/philosophy" size="large" />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="relative w-[190px] h-[330px]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[189px] h-[189px] border border-white/50 rounded-full flex items-center justify-center">
                        <span className="text-xl">Artistry</span>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[189px] h-[189px] border border-white/50 rounded-full flex items-center justify-center">
                        <span className="text-xl">Expertise</span>
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="text-xs font-bold tracking-widest text-white/80">MEETS</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Services Part */}
                <motion.div variants={cardVariants} className="grid md:grid-cols-2 gap-16 items-start px-12">
                  <div className="flex flex-col gap-6 items-start">
                    <p className="text-sm font-bold tracking-widest uppercase text-white/50">our lighting services</p>
                    <div className="w-[354px] flex flex-col gap-2.5 items-start">
                      {services.map((service, i) => (
                        <Link
                          href="/services"
                          key={i}
                          className="group flex items-center justify-between w-full gap-4 py-3 px-5 bg-transparent border border-white/50 rounded-2xl transition-all hover:bg-white/10"
                        >
                          <span className="text-sm">{service}</span>
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="max-w-md space-y-8">
                    <h3 className="text-4xl leading-tight">
                      The way of DUA is balancing <span className="font-bold">artistry</span> and <span className="font-bold">technical refinement.</span>
                    </h3>
                    <p className="text-xl leading-relaxed text-white/80">
                      It is where light meets space, heritage craftsmanship meets advanced technology, and physical presence meets ethereal absence. We believe the <span className="font-bold">purpose of light</span> is not simply to illuminate, but to transform <span className="font-bold">how a space is felt.</span> This is the balance we pursue. This is DUA.
                    </p>
                    <ReadMoreLink href="/philosophy" />
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </section>


          {/* Our Clients Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.2} className="text-center px-12">
                <motion.h2 variants={cardVariants} className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">
                  OUR CLIENTS
                </motion.h2>
                <motion.div 
                  variants={cardVariants} 
                  className="relative overflow-hidden"
                >
                  <div className="flex animate-marquee">
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                      <div key={index} className="flex-shrink-0 w-64 mx-8 text-white/80 hover:text-white transition-colors duration-300">
                        {logo.component}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Featured Project Section */}
          <section className="py-8 md:py-16">
            <ScrollAnimation>
              <div className="relative w-full h-[80vh] flex items-end">
                <Image
                  src="https://picsum.photos/1800/1200?1"
                  alt="Mandapa, a Ritz-Carlton Reserve"
                  fill
                  className="object-cover"
                  data-ai-hint="luxury resort lobby night"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-20">
                  <div className="px-12">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-white/80 mb-4">Featured Project</h2>
                    <h3 className="text-4xl md:text-6xl font-semibold max-w-4xl">Mandapa, a Ritz-Carlton Reserve</h3>
                    <p className="text-white/80 text-lg md:text-xl mt-2">Ubud, Bali</p>
                    <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-white/80">
                        <Link href="/projects/mandapa-ritz-carlton">View Case Study</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </section>

          {/* Our Team Section */}
          <InfoCarousel
            title="Our Team"
            description="We are a collective of designers, engineers, and craftspeople united by a single belief: that light, when wielded with intention, is the most powerful tool for shaping human experience."
            items={teamMembers.map(member => ({
                id: member.name,
                image: member.image,
                hint: member.hint,
                title: member.name,
                subtitle: member.title
            }))}
            renderItem={({ item }) => (
              <>
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <Image
                        src={item.image}
                        alt={`Portrait of ${item.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={item.hint}
                    />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/70">{item.subtitle}</p>
              </>
            )}
          />

          {/* Get Inspired / Lighting Designer Section */}
          <InfoCarousel
            title="Get Inspired"
            description="We look to the masters who saw design as a tool for solving problems with intelligence and grace. Their belief that an object's purpose must justify its existence is a constant inspiration, reminding us to design with intention, always."
            items={designers.map(designer => ({
                id: designer.name,
                image: designer.image,
                hint: designer.hint,
                title: designer.name,
                subtitle: designer.quote
            }))}
            renderItem={({ item }) => (
              <>
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4">
                    <Image
                        src={item.image}
                        alt={`Portrait of ${item.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint={item.hint}
                    />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.subtitle}</p>
              </>
            )}
          />

          {/* Get Inspired / Blog Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.3} className="advanced-glass mx-12">
                <motion.div variants={cardVariants} className="max-w-3xl mx-auto text-left space-y-6 p-12 md:p-16">
                  <h3 className="text-lg uppercase tracking-widest text-white/60 text-center">Get Inspired</h3>
                  <p className="text-2xl md:text-3xl font-bold leading-relaxed text-white text-center">
                    In modern luxury design, the most important element is often what isn't there. We explore how leading architects are using darkness and shadow to create spaces that feel resonant, intimate, and profound.
                  </p>
                  <div className="flex justify-between items-center pt-4">
                    <h2 className="text-lg md:text-xl">The Psychology of Shadow</h2>
                    <Link href="/journal" className="text-white hover:underline text-base">Read the Full Story →</Link>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 md:py-32">
              <div className="container mx-auto px-4">
                  <ScrollAnimation staggerChildren={0.3} className="flex flex-col md:flex-row justify-between items-center gap-8 px-12">
                      <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl text-white max-w-2xl text-center md:text-left">
                          Big company resources, small company care.
                      </motion.h2>
                      <motion.div variants={cardVariants} className="flex-shrink-0">
                          <Button size="lg" className="advanced-glass text-white hover:bg-white/10">Book a Consultation</Button>
                      </motion.div>
                  </ScrollAnimation>
              </div>
          </section>

        </main>
      </div>
      <Footer />
    </div>
  );
}

    
