
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import Image from 'next/image';
import { Lightbulb, Users, Handshake } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

const principles = [
  {
    title: 'Intentional Design',
    description: 'Our fixtures are conceived as functional sculptures, honoring the space they inhabit with a quiet confidence and minimal aesthetic.',
    image: placeholderImages.philosophy_design,
  },
  {
    title: 'Generational Craft',
    description: 'By pairing Balinese craftsmanship with precision components, we create fixtures of uncompromising quality and durability.',
    image: placeholderImages.philosophy_craft,
  },
  {
    title: 'Atmospheric Engineering',
    description: 'We meticulously shape light to evoke emotion, inspire serenity, and create a tangible sense of place.',
    image: placeholderImages.philosophy_atmosphere,
  },
];


export default function PhilosophyPage() {
  const { philosophy_hero } = placeholderImages;
  return (
    <div className="bg-[#111111] text-white antialiased">
      <Header />
      <main className="pt-20">
        <section className="relative h-[60vh] flex items-center justify-center text-center">
          <Image
            src={philosophy_hero.src}
            alt={philosophy_hero.alt}
            fill
            className="object-cover"
            data-ai-hint={philosophy_hero.hint}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Where Soul Meets Science</h1>
            <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl">
              A dialogue between generational craft and precision engineering.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-light mb-6">The Duality of Light</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling. We don’t just light rooms; we craft atmospheres that elevate the human experience.
              </p>
            </div>
        </section>
        
        <section className="container mx-auto px-4 py-20 md:py-32 space-y-32">
          {principles.map((principle, index) => (
            <div key={principle.title} className="grid md:grid-cols-2 gap-16 items-center">
              <div className={`relative h-[80vh] ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <Image 
                  src={principle.image.src}
                  alt={principle.image.alt}
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint={principle.image.hint}
                />
              </div>
              <div className={`text-white/90 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-4">Principle 0{index + 1}</h3>
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">{principle.title}</h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
