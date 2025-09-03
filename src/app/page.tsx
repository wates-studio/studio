
import { HeroSection } from '@/components/page/hero';
import { CollectionCard } from '@/components/page/collection-card';
import { JournalCard } from '@/components/page/journal-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const collections = [
  {
    title: 'The Aura Collection',
    description: 'Sculptural Pendants',
    image: 'https://picsum.photos/800/600?1',
    alt: 'Aura Collection',
    hint: 'sculptural pendant dining table'
  },
  {
    title: 'The Terra Collection',
    description: 'Earthen Sconces',
    image: 'https://picsum.photos/800/600?2',
    alt: 'Terra Collection',
    hint: 'earthen sconce concrete wall'
  },
  {
    title: 'The Zenith Collection',
    description: 'Architectural Exteriors',
    image: 'https://picsum.photos/800/600?3',
    alt: 'Zenith Collection',
    hint: 'architectural bollard stone path'
  }
];

const journalEntries = [
  {
    title: 'The Science of Atmosphere: An Introduction to Human-Centric Lighting',
    image: 'https://picsum.photos/600/400?4',
    alt: 'Abstract light and shadows',
    hint: 'abstract light shadow'
  },
  {
    title: 'Material Focus: The Living Finish of Hand-Brushed Brass',
    image: 'https://picsum.photos/600/400?5',
    alt: 'Molten brass',
    hint: 'molten brass'
  },
  {
    title: 'Designer Spotlight: The Mind Behind the Aura Collection',
    image: 'https://picsum.photos/600/400?6',
    alt: 'Designer sketching',
    hint: 'designer sketching black white'
  }
];

export default function Home() {
  return (
    <div className="bg-[#111111] text-white antialiased">
      <HeroSection />

      <main className="bg-[#111111] z-10 relative">
        <div className="container mx-auto px-4 py-20 md:py-32 space-y-20 md:space-y-32">
          
          <ScrollAnimation>
            <section className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-white/90">
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">THE ARTISANAL TECHNOLOGIST</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling.
                </p>
                <a href="#" className="inline-block mt-6 text-white hover:underline">Our Philosophy →</a>
              </div>
              <div>
                <Image 
                  src="https://picsum.photos/800/1000"
                  alt="Architectural DUA product"
                  width={800}
                  height={1000}
                  className="rounded-lg object-cover"
                  data-ai-hint="architectural lighting black white"
                />
              </div>
            </section>
          </ScrollAnimation>

          <ScrollAnimation>
            <section>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">Curated Collections</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.title} {...collection} />
                ))}
              </div>
            </section>
          </ScrollAnimation>
          
          <section className="relative h-[500px] md:h-[700px] flex items-center justify-center text-white text-center">
             <Image 
                src="https://picsum.photos/1600/900"
                alt="Mandapa Ritz-Carlton lobby"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="luxury resort lobby"
              />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-lg"></div>
            <div className="relative z-10 p-8">
              <ScrollAnimation>
                <h3 className="text-sm uppercase tracking-widest text-white/80 mb-4">FEATURED PROJECT</h3>
                <h2 className="text-4xl md:text-5xl font-semibold mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h2>
                <blockquote className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto mb-8">
                  &quot;DUA&apos;s lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere.&quot;
                </blockquote>
                <Button size="lg" className="bg-white text-black hover:bg-white/80">Explore The Project</Button>
              </ScrollAnimation>
            </div>
          </section>

          <ScrollAnimation>
            <section>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">From The Journal</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {journalEntries.map((entry) => (
                  <JournalCard key={entry.title} {...entry} />
                ))}
              </div>
            </section>
          </ScrollAnimation>

        </div>
      </main>

      <Footer />
    </div>
  );
}
