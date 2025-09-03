
import { HeroSection } from '@/components/page/hero';
import { JournalCard } from '@/components/page/journal-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Lightbulb, Users, Handshake } from 'lucide-react';

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

const teamMembers = [
  { name: 'Alexandre Dubois', role: 'Lead Designer', image: 'https://picsum.photos/200/200?7', hint: 'male designer portrait' },
  { name: 'Priya Sharma', role: 'Head of Engineering', image: 'https://picsum.photos/200/200?8', hint: 'female engineer portrait' },
  { name: 'Liam Chen', role: 'Master Artisan', image: 'https://picsum.photos/200/200?9', hint: 'male artisan portrait' },
];

export default function Home() {
  return (
    <div className="bg-[#111111] text-white antialiased">
      <HeroSection />

      <div className="relative z-10">
        <main className="bg-[#111111]">
          <div className="container mx-auto px-4 py-20 md:py-32 space-y-20 md:space-y-32">
            
            <ScrollAnimation>
              <section className="grid md:grid-cols-2 gap-16 items-center">
                <div className="text-white/90">
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">NARRATIVE HOOK</h3>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    In the workshops of Bali, a legacy of craft meets the rigor of modern engineering. We believe light is more than illumination—it is a material to be sculpted, an atmosphere to be composed. Each DUA fixture is a dialogue between the hand and the machine, the natural and the technical. The result is not just a lamp, but a feeling.
                  </p>
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
              <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-12">Narrative</h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                  <div className="flex flex-col items-center gap-4">
                    <Lightbulb className="w-12 h-12 text-white/80" />
                    <h3 className="text-2xl font-semibold">Intentional Design</h3>
                    <p className="text-white/70 font-light">
                      Our fixtures are conceived as functional sculptures, honoring the space they inhabit with a quiet confidence.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Handshake className="w-12 h-12 text-white/80" />
                    <h3 className="text-2xl font-semibold">Generational Craft</h3>
                    <p className="text-white/70 font-light">
                      By pairing Balinese craftsmanship with precision components, we create fixtures of uncompromising quality.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <Users className="w-12 h-12 text-white/80" />
                    <h3 className="text-2xl font-semibold">Atmospheric Engineering</h3>
                    <p className="text-white/70 font-light">
                      We shape light to evoke emotion, inspire serenity, and elevate the human experience.
                    </p>
                  </div>
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
                  <h3 className="text-sm uppercase tracking-widest text-white/80 mb-4">WORK AND PORTFOLIO</h3>
                  <h2 className="text-4xl md:text-5xl font-semibold mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h2>
                  <blockquote className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto mb-8">
                    &quot;DUA&apos;s lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere.&quot;
                  </blockquote>
                  <Button size="lg" className="bg-white text-black hover:bg-white/80">Explore The Project</Button>
                </ScrollAnimation>
              </div>
            </section>

            <ScrollAnimation>
              <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-light mb-12">Team Behind</h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                  {teamMembers.map((member) => (
                    <div key={member.name} className="flex flex-col items-center gap-4">
                      <Avatar className="w-32 h-32">
                        <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-white/70">{member.role}</p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation>
              <section className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <Image 
                    src="https://picsum.photos/800/1000?10"
                    alt="Dua Collective Family"
                    width={800}
                    height={1000}
                    className="rounded-lg object-cover"
                    data-ai-hint="team workshop collaboration"
                  />
                </div>
                <div className="text-white/90">
                  <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">DUA COLLECTIVE FAMILY EXPLAINED</h3>
                  <p className="text-2xl md:text-3xl font-light leading-relaxed">
                    We are a family of designers, engineers, and artisans united by a shared passion for light. Our collective model fosters a unique environment of collaboration, allowing us to push the boundaries of what's possible in lighting design.
                  </p>
                  <a href="#" className="inline-block mt-6 text-white hover:underline">Learn More About Our Collective →</a>
                </div>
              </section>
            </ScrollAnimation>
            
            <ScrollAnimation>
              <section>
                <h2 className="text-3xl md:text-4xl text-center font-light mb-12">The Journal</h2>
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
    </div>
  );
}
