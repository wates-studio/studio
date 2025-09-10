
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import Image from 'next/image';
import { JournalCard } from '@/components/page/journal-card';

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
  },
  {
    title: 'Case Study: Lighting the Mandapa Ritz-Carlton',
    image: 'https://picsum.photos/600/400?11',
    alt: 'Luxury hotel lobby',
    hint: 'luxury hotel lobby'
  },
  {
    title: 'The Warmth of 2700K: A Deep Dive into Color Temperature',
    image: 'https://picsum.photos/600/400?12',
    alt: 'Warm interior lighting',
    hint: 'warm interior lighting'
  },
  {
    title: 'From Sketch to Fixture: The DUA Design Process',
    image: 'https://picsum.photos/600/400?13',
    alt: 'Design blueprints and tools',
    hint: 'design blueprints tools'
  }
];

export default function JournalPage() {
  return (
    <div className="bg-white text-[#111111] antialiased">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light">The Journal</h1>
            <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
              Insights on design, material, and the art of atmospheric engineering.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {journalEntries.map((entry) => (
              <JournalCard key={entry.title} {...entry} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
