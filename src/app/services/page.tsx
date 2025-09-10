
import { PageLayout } from '@/components/page-layout';
import { services } from '@/lib/data';

export default function ServicesPage() {
  return (
    <PageLayout>
      <main>
        <section className="container mx-auto px-4 md:px-8 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
              From initial concept to final installation, we offer a comprehensive suite of lighting services designed to bring your vision to life.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-8 pb-20 md:pb-32 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-1">
                  <span className="text-xl font-semibold text-white/50">0{index + 1}</span>
              </div>
              <div className="md:col-span-4">
                  <h2 className="text-3xl font-light leading-tight">{service.title}</h2>
              </div>
              <div className="md:col-span-7">
                  <p className="text-lg font-light leading-relaxed text-white/70">
                      {service.description}
                  </p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </PageLayout>
  );
}
