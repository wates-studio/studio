
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Scenes } from '@/components/page/scenes';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Lightbulb, Users, Handshake } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { scenes, type Scene } from '@/data/scenes';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
    "Lighting Design & Product Development",
    "Lighting Architectural Master Planning & Design",
    "Lighting Consultancy & Sourcing",
    "Lighting Energy Conservation & Safety",
    "Lighting Project Management"
];

const clientLogos = [
  { name: 'Ritz-Carlton', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">RITZ-CARLTON</text></svg> },
  { name: 'Four Seasons', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">FOUR SEASONS</text></svg> },
  { name: 'Aman', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">AMAN</text></svg> },
  { name: 'St. Regis', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">ST. REGIS</text></svg> },
  { name: 'Hyatt', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">HYATT</text></svg> },
  { name: 'Mandarin Oriental', component: <svg className="w-full h-12" viewBox="0 0 100 20"><text x="50" y="15" textAnchor="middle" fontSize="12" fill="white">MANDARIN ORIENTAL</text></svg> }
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
          {/* Section 2: The Philosophy */}
          <section className="min-h-screen flex items-center justify-center py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.2} className="flex flex-col md:flex-row items-center justify-between gap-16">
                <motion.div variants={cardVariants} className="md:w-1/2 space-y-8">
                  
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
                </motion.div>
                <motion.div variants={cardVariants} className="md:w-1/2 flex justify-center items-center">
                  <div className="relative w-80 h-80">
                    <div className="absolute top-0 left-0 w-48 h-48 border border-white/50 rounded-full flex items-center justify-center">
                      <span className="text-xl">Artistry</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/50 rounded-full flex items-center justify-center">
                      <span className="text-xl">Craftsmanship</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold tracking-widest text-white/80">MEETS</span>
                    </div>
                  </div>
                </motion.div>
              </ScrollAnimation>
            </div>
          </section>

          {/* Section 3: What We Do */}
          <section className="py-20 md:py-32">
              <div className="container mx-auto px-4">
                  <ScrollAnimation staggerChildren={0.2} className="grid md:grid-cols-[1fr_2fr_2fr] gap-16">
                      <motion.div variants={cardVariants}>
                          <p className="text-sm font-bold tracking-widest uppercase text-white/50">WHAT WE DO</p>
                      </motion.div>

                      <motion.div variants={cardVariants} className="flex flex-col gap-4 items-start">
                          {services.map((service, i) => (
                              <div key={i} className="p-4 bg-white/5 border border-white/20 rounded-lg">
                                  {service}
                              </div>
                          ))}
                      </motion.div>

                      <motion.div variants={cardVariants} className="space-y-8">
                          <h3 className="text-4xl leading-tight">
                              The way of DUA is balancing <span className="font-bold">artistry</span> and <span className="font-bold">technical refinement.</span>
                          </h3>
                          <p className="text-xl leading-relaxed text-white/80">
                              It is where light meets space, heritage craftsmanship meets advanced technology, and physical presence meets ethereal absence. We believe the <span className="font-bold">purpose of light</span> is not simply to illuminate, but to transform <span className="font-bold">how a space is felt.</span>
                              <br /><br />
                              This is the balance we pursue. This is DUA.
                          </p>
                          <Link href="/philosophy" className="inline-block text-3xl font-bold hover:underline">
                              READ MORE →
                          </Link>
                      </motion.div>
                  </ScrollAnimation>
              </div>
          </section>

          {/* Our Clients Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.2} className="text-center">
                <motion.h2 variants={cardVariants} className="text-sm font-bold tracking-widest uppercase text-white/50 mb-12">
                  IN GOOD COMPANY
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

          {/* Section 6: The Studio */}
          <section className="py-20 md:py-32 text-center">
              <div className="container mx-auto px-4">
                  <ScrollAnimation staggerChildren={0.2}>
                      <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl mb-8">Behind the Light</motion.h2>
                      <motion.p variants={cardVariants} className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto mb-16">
                          We are a collective of designers, engineers, and craftspeople united by a single belief: that light, when wielded with intention, is the most powerful tool for shaping human experience.
                      </motion.p>
                      <motion.div variants={cardVariants} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                          {teamMembers.map((member, i) => (
                              <motion.div key={i} variants={cardVariants} className="flex flex-col items-center text-center">
                                  <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-4">
                                      <Image
                                          src={member.image}
                                          alt={`Portrait of ${member.name}`}
                                          layout="fill"
                                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                                          data-ai-hint={member.hint}
                                      />
                                  </div>
                                  <h3 className="text-xl font-semibold">{member.name}</h3>
                                  <p className="text-white/70">{member.title}</p>
                              </motion.div>
                          ))}
                      </motion.div>
                  </ScrollAnimation>
              </div>
          </section>

          {/* Section 7: From the Journal */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <ScrollAnimation staggerChildren={0.3} className="p-12 md:p-16 rounded-lg bg-black/20 backdrop-blur-md border border-white/10">
                <motion.div variants={cardVariants} className="max-w-3xl mx-auto text-left space-y-6">
                  <h3 className="text-lg uppercase tracking-widest text-white/60 text-center">Featured Blog</h3>
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

          {/* Section 8: On the Shoulders of Giants */}
          <section className="py-20 md:py-32">
              <div className="container mx-auto px-4 text-center">
                  <ScrollAnimation staggerChildren={0.2} className="max-w-4xl mx-auto">
                      <motion.div variants={cardVariants} className="w-32 h-32 rounded-full mx-auto mb-8 relative overflow-hidden">
                          <Image src="https://picsum.photos/200/200?6" alt="Achille Castiglioni" layout="fill" className="object-cover" data-ai-hint="portrait achille castiglioni" />
                      </motion.div>
                      <motion.blockquote variants={cardVariants} className="text-2xl md:text-3xl italic max-w-3xl mx-auto text-white">
                          "There has to be a reason for every detail. You can't just add a detail to make it look pretty. It has to have a meaning, a function."
                      </motion.blockquote>
                      <motion.p variants={cardVariants} className="mt-8 text-lg font-semibold text-white">Achille Castiglioni</motion.p>
                      <motion.p variants={cardVariants} className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed text-white/70">
                          A master of form and wit, Castiglioni saw design as a tool for solving problems with intelligence and grace. His belief that an object's purpose must justify its existence is a constant inspiration, reminding us to design with intention, always.
                      </motion.p>
                  </ScrollAnimation>
              </div>
          </section>

          {/* Section 9: The Invitation */}
          <section className="py-20 md:py-32">
              <div className="container mx-auto px-4">
                  <ScrollAnimation staggerChildren={0.3} className="flex flex-col md:flex-row justify-between items-center gap-8">
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
