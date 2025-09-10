
import { PageLayout } from '@/components/page-layout';
import { ProjectCard } from '@/components/page/project-card';
import { projects } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <PageLayout>
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
    </PageLayout>
  );
}
