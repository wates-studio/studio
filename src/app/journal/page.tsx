
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { JournalCard } from '@/components/page/journal-card';
import placeholderImages from '@/lib/placeholder-images.json';

const journalEntries = [
  {
    title: 'The Science of Atmosphere: An Introduction to Human-Centric Lighting',
    image: placeholderImages.journal_atmosphere.src,
    alt: placeholderImages.journal_atmosphere.alt,
    hint: placeholderImages.journal_atmosphere.hint,
  },
  {
    title: 'Material Focus: The Living Finish of Hand-Brushed Brass',
    image: placeholderImages.journal_brass.src,
    alt: placeholderImages.journal_brass.alt,
    hint: placeholderImages.journal_brass.hint,
  },
  {
    title: 'Designer Spotlight: The Mind Behind the Aura Collection',
    image: placeholderImages.journal_designer.src,
    alt: placeholderImages.journal_designer.alt,
    hint: placeholderImages.journal_designer.hint,
  },
  {
    title: 'Case Study: Lighting the Mandapa Ritz-Carlton',
    image: placeholderImages.journal_mandapa.src,
    alt: placeholderImages.journal_mandapa.alt,
    hint: placeholderImages.journal_mandapa.hint,
  },
  {
    title: 'The Warmth of 2700K: A Deep Dive into Color Temperature',
    image: placeholderImages.journal_warmth.src,
    alt: placeholderImages.journal_warmth.alt,
    hint: placeholderImages.journal_warmth.hint,
  },
  {
    title: 'From Sketch to Fixture: The DUA Design Process',
    image: placeholderImages.journal_sketch.src,
    alt: placeholderImages.journal_sketch.alt,
    hint: placeholderImages.journal_sketch.hint,
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
