
import { HeroSection } from '@/components/page/hero';
import { JournalCard } from '@/components/page/journal-card';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { AtmosphericEngineeringIcon, GenerationalCraftIcon, IntentionalDesignIcon } from '@/components/icons';

const journalEntries = [
  {
    title: 'Beyond Illumination: How Biophilic Lighting is Redefining Wellness in Architecture',
    image: 'https://picsum.photos/600/400?10',
    alt: 'Light filtering through lush tropical leaves',
    hint: 'light tropical leaves',
    linkText: 'Read The Article →',
  },
  {
    title: 'Material Honesty: The Soul and Science of Rammed Earth in Modern Design',
    image: 'https://picsum.photos/600/400?11',
    alt: 'Macro shot of a rammed-earth wall sconce',
    hint: 'rammed earth texture',
    linkText: 'Read The Article →',
  },
  {
    title: 'The End of the Switch: Why Intuitive Lighting Control is the Future of Smart Homes',
    image: 'https://picsum.photos/600/400?12',
    alt: "Designer's hand adjusting a lighting control interface on a tablet",
    hint: 'lighting control tablet',
    linkText: 'Read The Article →',
  }
];

export default function Home() {
  return (
    <div className="antialiased">
      <HeroSection />

      <main className="z-10 relative">
        {/* 2. THE NARRATIVE HOOK */}
        <section className="bg-[#111111] text-white py-24 md:py-40">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">THE ARTISANAL TECHNOLOGIST</h3>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  In Bali, craft is a living language. We speak it fluently. But we also command the grammar of modern engineering. Each DUA fixture is a dialogue between the timeless skill of the human hand and the unflinching precision of technology. The result is not a lamp, but a feeling given form.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* 3. THE PROMISE */}
        <section className="bg-[#F4F1ED] text-[#111111] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollAnimation>
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 text-center">
                <div className="flex flex-col items-center">
                  <IntentionalDesignIcon className="h-12 w-12 mb-6 text-gray-700" />
                  <h3 className="text-xl font-semibold mb-3">Intentional Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We design with purpose. Our fixtures are conceived as functional sculptures, honoring the space they inhabit with a quiet confidence—whether illuminated or in silence.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <AtmosphericEngineeringIcon className="h-12 w-12 mb-6 text-gray-700" />
                  <h3 className="text-xl font-semibold mb-3">Atmospheric Engineering</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are masters of atmosphere. Using the science of optics and an artist’s eye, we shape light to evoke emotion, inspire serenity, and elevate the human experience.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <GenerationalCraftIcon className="h-12 w-12 mb-6 text-gray-700" />
                  <h3 className="text-xl font-semibold mb-3">Generational Craft</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We build for permanence. By pairing generational Balinese craftsmanship with precision-tooled components, we create fixtures of uncompromising quality, designed to endure.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
        
        {/* 4. THE PROOF */}
        <section className="relative h-[500px] md:h-[700px] flex items-center justify-center text-white text-center bg-black">
          <video
            src="/videos/proof-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 p-8">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-light mb-8">Where Vision Meets Light</h2>
              <h3 className="text-sm uppercase tracking-widest text-white/80 mb-4">FEATURED PROJECT</h3>
              <h4 className="text-3xl md:text-4xl font-semibold mb-4">Mandapa, a Ritz-Carlton Reserve, Bali</h4>
              <blockquote className="text-xl md:text-2xl font-light italic max-w-3xl mx-auto mb-8">
                &quot;DUA&apos;s lighting was not an addition to the space; it was fundamental to its soul. Their work is a masterclass in creating atmosphere.&quot;
              </blockquote>
              <Button size="lg" className="bg-white text-black hover:bg-white/80">Explore Our Portfolio</Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* 5. THE SOUL OF THE MACHINE */}
        <section className="relative h-[500px] md:h-[700px] flex items-center justify-center text-white text-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            <video
                src="/videos/soul-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
          </div>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 p-8">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">The Hand and the Machine</h2>
              <p className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8">
                Our factory is not a place of conflict between craft and code, but of harmony. It is where digital renderings are given warmth by the touch of a human hand, and where ancient materials are shaped with sub-millimeter precision. This is the soul of our machine.
              </p>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">Discover Our Process</Button>
            </ScrollAnimation>
          </div>
        </section>

        {/* 6. THE CONVERSATION */}
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

        {/* 7. THE CONNECTION */}
        <section className="bg-[#1A1A1A] text-white py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <ScrollAnimation>
              <h2 className="text-4xl md:text-5xl font-semibold mb-4">Let's Illuminate a Vision.</h2>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-white/80">
                A great project begins with a conversation. Whether you are defining the atmosphere of a landmark property or curating your own private sanctuary, our team is ready to collaborate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-black hover:bg-white/80">Start a Project</Button>
                <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white hover:text-black">View The Collections</Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
