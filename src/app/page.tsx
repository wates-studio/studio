
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Scenes } from '@/components/page/scenes';
import { JournalCard } from '@/components/page/journal-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Lightbulb, Users, Handshake } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { scenes, type Scene } from '@/data/scenes';
import { cn } from '@/lib/utils';

export default function Home() {
  const [lightsOn, setLightsOn] = useState(true);
  const [activeSceneId, setActiveSceneId] = useState(scenes[0].id);
  const activeScene = scenes.find((scene) => scene.id === activeSceneId) || scenes[0];

  return (
    <div className="bg-[#111111] text-white antialiased">
      {/* Persistent Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src={activeScene.imageOn}
          alt={`Luxurious ${activeScene.name} with DUA lighting fixtures on`}
          fill
          priority
          className={cn("object-cover transition-opacity duration-1000", lightsOn ? "opacity-100" : "opacity-0")}
          quality={90}
        />
        <Image
          src={activeScene.imageOff}
          alt={`Luxurious ${activeScene.name} with DUA lighting fixtures off`}
          fill
          priority
          className={cn("object-cover transition-opacity duration-1000", !lightsOn ? "opacity-100" : "opacity-0")}
          quality={90}
        />
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

        <main className="bg-black text-white">
          {/* Section 2: The Philosophy */}
          <div className="min-h-screen flex items-center justify-center text-center bg-black">
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-2xl md:text-3xl leading-relaxed text-white/90">
                The way of DUA is balancing artistry and technical refinement. It is where light meets space, heritage craftsmanship meets advanced technology, and physical presence meets ethereal absence. We believe the purpose of light is not simply to illuminate, but to transform how a space is felt.
              </p>
              <p className="text-2xl md:text-3xl leading-relaxed mt-8 text-white/90">
                This is the balance we pursue. This is DUA.
              </p>
            </div>
          </div>

          {/* Section 3: DUA Lighting (Our Service) */}
          <div className="bg-[#f0f0f0] text-black py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl mb-16">DUA Lighting</h2>
              <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-4">
                  <Lightbulb className="w-12 h-12 text-black/80" />
                  <h3 className="text-2xl font-semibold mb-2">Design & Curation</h3>
                  <p className="text-black/70 leading-relaxed">
                    We work alongside architects and designers to select the perfect fixtures from our collection, ensuring a cohesive and powerful lighting scheme that honors the vision for the space.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Handshake className="w-12 h-12 text-black/80" />
                  <h3 className="text-2xl font-semibold mb-2">Technical Specification</h3>
                  <p className="text-black/70 leading-relaxed">
                    Our team provides comprehensive technical support, from photometric data to integration with control systems, ensuring a flawless execution from blueprint to reality.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <Users className="w-12 h-12 text-black/80" />
                  <h3 className="text-2xl font-semibold mb-2">Bespoke Creation</h3>
                  <p className="text-black/70 leading-relaxed">
                    For unique challenges, we offer a fully bespoke service. We collaborate with you to design and fabricate one-of-a-kind lighting solutions that are singular, powerful, and yours alone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Selected Works */}
          <div className="py-20 md:py-32 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl text-center mb-16 text-white">Selected Works</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="relative group aspect-[4/5]">
                  <Image src="/hero1-on.png" alt="The Valhalla Residence" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-end p-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="text-xl font-semibold">The Valhalla Residence, Oslo</p>
                      <p className="text-white/80">Bespoke Pendants</p>
                    </div>
                  </div>
                </div>
                <div className="relative group aspect-[4/5]">
                  <Image src="/hero1-on.png" alt="Noma, Copenhagen" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-end p-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="text-xl font-semibold">Noma, Copenhagen</p>
                      <p className="text-white/80">Architectural Integration</p>
                    </div>
                  </div>
                </div>
                <div className="relative group aspect-[4/5] md:col-span-2 lg:col-span-1">
                  <Image src="/hero1-on.png" alt="Aēsop, Kyoto" layout="fill" className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 flex items-end p-6 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="text-xl font-semibold">Aēsop, Kyoto</p>
                      <p className="text-white/80">Atmospheric Curation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <Link href="/projects" className="text-white hover:underline text-lg">Explore All Projects →</Link>
              </div>
            </div>
          </div>

          {/* Section 5: In Good Company */}
          <div className="py-20 md:py-32 bg-[#f0f0f0] text-black">
            <h2 className="text-4xl md:text-5xl text-center mb-16">In Good Company</h2>
            <div className="w-full overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                <span className="text-4xl mx-8 text-gray-500">GENSLER</span>
                <span className="text-4xl mx-8 text-gray-500">HOK</span>
                <span className="text-4xl mx-8 text-gray-500">FOUR SEASONS</span>
                <span className="text-4xl mx-8 text-gray-500">AMAN</span>
                <span className="text-4xl mx-8 text-gray-500">SKIDMORE, OWINGS & MERRILL</span>
                <span className="text-4xl mx-8 text-gray-500">KPF</span>
                <span className="text-4xl mx-8 text-gray-500">DAVID CHIPPERFIELD</span>
                <span className="text-4xl mx-8 text-gray-500">HERZOG & DE MEURON</span>
                <span className="text-4xl mx-8 text-gray-500">TADAO ANDO</span>
                <span className="text-4xl mx-8 text-gray-500">RITZ-CARLTON</span>
              </div>
            </div>
          </div>

          {/* Section 6: The Studio */}
          <div className="py-20 md:py-32 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="aspect-[4/5] relative">
                  <Image src="/hero1-on.png" alt="DUA team in their studio" layout="fill" className="object-cover" />
                </div>
                <div className="max-w-lg">
                  <h2 className="text-4xl md:text-5xl mb-8">The Hands Behind the Light</h2>
                  <p className="text-xl leading-relaxed text-white/80">
                    We are a collective of designers, engineers, and craftspeople united by a single belief: that light, when wielded with intention, is the most powerful tool for shaping human experience. Our studio is where precision meets passion, and a shared obsession with detail informs everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: From the Journal */}
          <div className="py-20 md:py-32 bg-black text-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="max-w-lg">
                  <h3 className="text-lg uppercase tracking-widest text-white/60 mb-4">Featured Study</h3>
                  <h2 className="text-4xl md:text-5xl mb-6">The Psychology of Shadow: How Absence Defines Luxury</h2>
                  <p className="text-xl leading-relaxed text-white/80 mb-8">
                    In modern luxury design, the most important element is often what isn't there. We explore how leading architects are using darkness and shadow to create spaces that feel resonant, intimate, and profound.
                  </p>
                  <Link href="/journal" className="text-white hover:underline text-lg">Read the Full Story →</Link>
                </div>
                <div className="aspect-[4/5] relative">
                  <Image src="/hero1-off.png" alt="Abstract photograph of light refracting through glass" layout="fill" className="object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: On the Shoulders of Giants */}
          <div className="bg-[#222] text-white/80 py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-8 relative">
                <Image src="/hero1-off.png" alt="Achille Castiglioni" layout="fill" className="object-cover rounded-full" />
              </div>
              <blockquote className="text-2xl md:text-3xl italic max-w-3xl mx-auto text-white">
                "There has to be a reason for every detail. You can't just add a detail to make it look pretty. It has to have a meaning, a function."
              </blockquote>
              <p className="mt-8 text-lg font-semibold text-white">Achille Castiglioni</p>
              <p className="text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
                A master of form and wit, Castiglioni saw design as a tool for solving problems with intelligence and grace. His belief that an object's purpose must justify its existence is a constant inspiration, reminding us to design with intention, always.
              </p>
            </div>
          </div>

          {/* Section 9: The Invitation */}
          <div className="bg-black py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl mb-6 text-white max-w-4xl mx-auto">Big company resources, small company care.</h2>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-white/80 leading-relaxed">
                You get access to a world-class supply chain and state-of-the-art technology, guided by a dedicated team that treats your project with the focus and passion it deserves. Let's begin the conversation.
              </p>
              <Button size="lg" variant={"outline"}>Book a Consultation</Button>
            </div>
          </div>

        </main>
      </div>
      <Footer />
    </div>
  );
}
