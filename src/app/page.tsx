
import { HeroSection } from '@/components/page/hero';
import { CollectionCard } from '@/components/page/collection-card';
import { JournalCard } from '@/components/page/journal-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';

const collections = [
  {
    title: 'Aura Collection',
    description: 'Sculptural forms in metal and glass.',
    image: 'https://picsum.photos/800/600?1',
    alt: 'A minimalist pendant light from the Aura Collection',
    hint: 'pendant light',
  },
  {
    title: 'Terra Collection',
    description: 'Earthen materials meet modern design.',
    image: 'https://picsum.photos/800/600?2',
    alt: 'A ceramic table lamp from the Terra Collection',
    hint: 'ceramic lamp',
  },
  {
    title: 'Zenith Collection',
    description: 'Architectural lighting for ambitious spaces.',
    image: 'https://picsum.photos/800/600?3',
    alt: 'An architectural track lighting system from the Zenith Collection',
    hint: 'track lighting',
  }
];

const journalEntries = [
  {
    title: 'The Soul of an Object: Why Craftsmanship Matters in a Digital Age',
    image: 'https://picsum.photos/600/400?4',
    alt: 'Close-up of an artisan hand-finishing a wooden light fixture',
    hint: 'artisan hands wood',
  },
  {
    title: 'Beyond the Bulb: How Light Temperature Shapes Your Mood and Productivity',
    image: 'https://picsum.photos/600/400?5',
    alt: 'A warm, inviting living room with layered lighting',
    hint: 'warm living room',
  },
  {
    title: 'Material Focus: The Rise of Rammed Earth in Modernist Architecture',
    image: 'https://picsum.photos/600/400?6',
    alt: 'Sunlight casting shadows on a textured rammed earth wall',
    hint: 'rammed earth wall',
  }
];

export default function Home() {
  return (
    <div className="antialiased">
      <HeroSection />

      <main className="z-10 relative">
        <section className="bg-[#111111] text-white py-24 md:py-40">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">The Dua Philosophy</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  We believe light is more than a utility. It is an emotional medium, a sculptural material, a silent narrator of space. Our fixtures are born from a duality: the soul of Balinese craftsmanship and the science of precision engineering.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-[#F4F1ED] text-[#111111] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">Our Collections</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {collections.map((collection) => (
                  <CollectionCard key={collection.title} {...collection} />
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
        
        <section className="bg-[#1A1A1A] text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">Engineered for Atmosphere</h2>
              <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 text-white/80">
                From architectural-grade optics to custom control systems, we engineer every element to create not just light, but a precisely tailored atmosphere.
              </p>
              <Button size="lg" className="bg-white text-black hover:bg-white/80">Discover Our Process</Button>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-[#F4F1ED] text-[#111111] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl text-center font-light mb-12">From The Journal</h2>
              <div className="grid md:grid-cols-3 gap-12">
                {journalEntries.map((entry) => (
                  <JournalCard key={entry.title} {...entry} />
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
        
        <section className="bg-[#111111] text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let's Illuminate a Vision.</h2>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-white/80">
                A great project begins with a conversation. Whether you are defining the atmosphere of a landmark property or curating your own private sanctuary, our team is ready to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/80">Start a Project</Button>
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-black">Trade Portal</Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
