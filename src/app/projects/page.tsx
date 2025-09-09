
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
  {
    name: 'Mandapa, a Ritz-Carlton Reserve',
    location: 'Ubud, Bali',
    description: 'A complete lighting solution for a world-renowned luxury resort, enhancing its connection to the natural landscape.',
    image: 'https://picsum.photos/1200/800?1',
    hint: 'luxury resort lobby night',
    slug: '/projects/mandapa-ritz-carlton'
  },
  {
    name: 'The Legian Seminyak',
    location: 'Seminyak, Bali',
    description: 'Bespoke fixtures that complement the hotel\'s timeless elegance and beachfront location.',
    image: 'https://picsum.photos/1200/800?2',
    hint: 'modern hotel suite ocean view',
    slug: '/projects/legian-seminyak'
  },
  {
    name: 'Apéritif Restaurant & Bar',
    location: 'Ubud, Bali',
    description: 'Atmospheric lighting for a fine-dining experience, balancing intimacy with 1920s-inspired grandeur.',
    image: 'https://picsum.photos/1200/800?3',
    hint: 'fine dining restaurant interior',
    slug: '/projects/aperitif-ubud'
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-[#111111] text-white antialiased">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light">Our Work</h1>
            <p className="mt-4 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              A selection of projects where our lighting has shaped exceptional atmospheres.
            </p>
          </div>
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.name} className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <Image 
                    src={project.image}
                    alt={project.name}
                    width={1200}
                    height={800}
                    className="rounded-lg object-cover"
                    data-ai-hint={project.hint}
                  />
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-semibold">{project.name}</h2>
                  <p className="text-white/60 text-lg mb-4">{project.location}</p>
                  <p className="text-white/80 text-xl font-light leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <Button asChild size="lg" className="bg-white text-black hover:bg-white/80">
                    <Link href={project.slug}>View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
