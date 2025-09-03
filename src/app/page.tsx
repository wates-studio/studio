
"use client";

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/home/hero';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

function ThesisSection() {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <h2 className="text-sm tracking-widest text-[#A3A3A3] uppercase mb-4">
              THE ARTISANAL TECHNOLOGIST
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-white mb-6">
              In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling.
            </p>
            <a href="#" className="text-white hover:underline flex items-center group">
              Our Philosophy <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative aspect-[4/5]">
            <Image 
              src="https://picsum.photos/800/1000"
              alt="Artisanal DUA lighting fixture"
              fill
              className="object-cover rounded-lg"
              data-ai-hint="lighting fixture monochrome"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const collections = [
  {
    name: 'The Aura Collection',
    description: 'Sculptural Pendants',
    image: 'https://picsum.photos/600/800?random=1',
    hint: 'pendant light dining'
  },
  {
    name: 'The Terra Collection',
    description: 'Earthen Sconces',
    image: 'https://picsum.photos/600/800?random=2',
    hint: 'wall sconce texture'
  },
  {
    name: 'The Zenith Collection',
    description: 'Architectural Exteriors',
    image: 'https://picsum.photos/600/800?random=3',
    hint: 'exterior lighting pathway'
  },
];

function CollectionsSection() {
  return (
    <section className="bg-[#F4F1ED] text-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Curated Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.name} className="group relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={collection.image}
                alt={`Image of ${collection.name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={collection.hint}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <h3 className="text-2xl font-semibold">{collection.name}</h3>
                  <p>{collection.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white bg-black">
      <Image
        src="https://picsum.photos/1920/1280"
        alt="Mandapa Ritz-Carlton Reserve lobby with DUA lighting"
        fill
        className="object-cover opacity-40"
        data-ai-hint="luxury hotel lobby"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center p-8 bg-black/30 backdrop-blur-sm rounded-lg">
        <h3 className="text-sm tracking-widest uppercase mb-2">Featured Project</h3>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h2>
        <blockquote className="text-lg md:text-xl italic my-6">
          &quot;DUA&apos;s lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere.&quot;
        </blockquote>
        <Button size="lg">Explore The Project</Button>
      </div>
    </section>
  );
}

const journalArticles = [
  {
    title: 'The Science of Atmosphere: An Introduction to Human-Centric Lighting',
    image: 'https://picsum.photos/600/400?random=4',
    hint: 'light shadows abstract'
  },
  {
    title: 'Material Focus: The Living Finish of Hand-Brushed Brass',
    image: 'https://picsum.photos/600/400?random=5',
    hint: 'molten metal brass'
  },
  {
    title: 'Designer Spotlight: The Mind Behind the Aura Collection',
    image: 'https://picsum.photos/600/400?random=6',
    hint: 'designer sketching workshop'
  },
];

function JournalSection() {
  return (
    <section className="bg-[#F4F1ED] text-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">From The Journal</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {journalArticles.map((article) => (
            <div key={article.title} className="flex flex-col items-start group">
              <div className="relative w-full aspect-[3/2] overflow-hidden rounded-lg mb-6">
                <Image
                  src={article.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={article.hint}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{article.title}</h3>
              <a href="#" className="text-muted-foreground hover:text-foreground flex items-center">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showHeader = scrollY > (typeof window !== 'undefined' ? window.innerHeight * 0.9 : 900);

  return (
    <div className="bg-[#111111]">
      <Header show={showHeader} />
      <main>
        <Hero />
        <ThesisSection />
        <CollectionsSection />
        <FeaturedProjectSection />
        <JournalSection />
      </main>
      <Footer />
    </div>
  );
}
