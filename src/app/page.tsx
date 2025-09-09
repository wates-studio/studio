
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
              <ScrollAnimation staggerChildren={0.2} className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
                <motion.div variants={cardVariants} className="md:w-1/2 max-w-xl space-y-8">
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
                   <Link href="/philosophy" className="inline-block text-3xl md:text-4xl font-bold hover:underline">
                      READ MORE →
                  </Link>
                </motion.div>
                <motion.div variants={cardVariants} className="md:w-auto flex justify-center items-center">
                  <div className="relative w-48 h-64">
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
                              <Link
                                href="/services"
                                key={i}
                                className="group flex items-center justify-between gap-4 p-4 bg-white/5 border border-white/20 rounded-lg transition-all hover:bg-white/10 hover:border-white/30"
                              >
                                <span>{service}</span>
                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                              </Link>
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
                <div className="relative z-10 container mx-auto px-4 pb-12 md:pb-20 text-white">
                  <h2 className="text-sm font-bold tracking-widest uppercase text-white/80 mb-4">Featured Project</h2>
                  <h3 className="text-4xl md:text-6xl font-semibold max-w-4xl">Mandapa, a Ritz-Carlton Reserve</h3>
                  <p className="text-white/80 text-lg md:text-xl mt-2">Ubud, Bali</p>
                  <Button asChild size="lg" className="mt-8 bg-white text-black hover:bg-white/80">
                      <Link href="/projects/mandapa-ritz-carlton">View Case Study</Link>
                  </Button>
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
              <ScrollAnimation staggerChildren={0.3} className="p-12 md:p-16 rounded-lg bg-black/20 backdrop-blur-md border border-white/10">
                <motion.div variants={cardVariants} className="max-w-3xl mx-auto text-left space-y-6">
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
