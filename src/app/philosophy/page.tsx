
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import Image from 'next/image';
import { Lightbulb, Users, Handshake } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

export default function PhilosophyPage() {
  const { philosophy_hero, philosophy_fixture } = placeholderImages;
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

        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="text-white/90">
              <h2 className="text-3xl md:text-4xl font-light mb-6">The Art of Duality</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-6">
                In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. 
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling. We don’t just light rooms; we craft atmospheres that elevate the human experience.
              </p>
            </div>
            <div>
              <Image 
                src={philosophy_fixture.src}
                alt={philosophy_fixture.alt}
                width={800}
                height={1000}
                className="rounded-lg object-cover"
                data-ai-hint={philosophy_fixture.hint}
              />
            </div>
          </div>
        </section>

        <section className="bg-[#1C1C1C] py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-16">Our Core Principles</h2>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-4">
                <Lightbulb className="w-12 h-12 text-white/80" />
                <h3 className="text-2xl font-semibold">Intentional Design</h3>
                <p className="text-white/70 font-light">
                  Our fixtures are conceived as functional sculptures, honoring the space they inhabit with a quiet confidence and minimal aesthetic.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Handshake className="w-12 h-12 text-white/80" />
                <h3 className="text-2xl font-semibold">Generational Craft</h3>
                <p className="text-white/70 font-light">
                  By pairing Balinese craftsmanship with precision components, we create fixtures of uncompromising quality and durability.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Users className="w-12 h-12 text-white/80" />
                <h3 className="text-2xl font-semibold">Atmospheric Engineering</h3>
                <p className="text-white/70 font-light">
                  We meticulously shape light to evoke emotion, inspire serenity, and create a tangible sense of place.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
