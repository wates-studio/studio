
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { ProjectCard } from '@/components/page/project-card';
import placeholderImages from '@/lib/placeholder-images.json';

const projects = [
  {
    name: 'Mandapa, a Ritz-Carlton Reserve',
    location: 'Ubud, Bali',
    image: placeholderImages.project_mandapa.src,
    hint: placeholderImages.project_mandapa.hint,
    slug: '/projects/mandapa-ritz-carlton'
  },
  {
    name: 'The Legian Seminyak',
    location: 'Seminyak, Bali',
    image: placeholderImages.project_legian.src,
    hint: placeholderImages.project_legian.hint,
    slug: '/projects/legian-seminyak'
  },
  {
    name: 'Apéritif Restaurant & Bar',
    location: 'Ubud, Bali',
    image: placeholderImages.project_aperitif.src,
    hint: placeholderImages.project_aperitif.hint,
    slug: '/projects/aperitif-ubud'
  },
  {
    name: 'St. Regis Bali Resort',
    location: 'Nusa Dua, Bali',
    image: 'https://picsum.photos/seed/stregis/1000/1200',
    hint: 'luxury resort reception',
    slug: '/projects/st-regis-bali'
  }
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
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
