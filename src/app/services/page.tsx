
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';

const services = [
  {
    title: "Lighting Design & Product Development",
    description: "DUA provides a full design service. We work with some of the most respected lighting luminaries in the industry from concept designs creating distinguished light fixtures from an exclusive collection of valued materials which endure. We enjoy creation and product development with an appreciation for form, proportion, material, color, texture and technology. We offer value added solutions as lighting professionals with insightful alternatives. Whether you are a multinational merchandising firm, a seasoned purchasing company with strict specifications or a creative designer, diligent owner, consultant or contractor – DUA understands how to work with you."
  },
  {
    title: "Lighting Architectural Master Planning & Design",
    description: "Be assured that DUA CAD professionals and 3D Graphics artists create layered architectural, decorative & landscape lighting master planning. We design & visualize in 3D, we feel the 4th dimension and we sculpt space with the delicate interplay of light and shadow. We offer you that ethereal (je ne sait pas quoi) spark of creation that comes from walking your property sensing the elements and features to illuminate. We are intuitive to our Client’s intent and sensibilities. We team play with Owners, Architects, Interior Designers, ME Engineers, Consultants & Contractors. For most dramatic integrated lighting effects and efficiency it is essential to engage lighting design as far upstream concurrently with all other valued design disciplines (civil, architectural, interior and landscape….)."
  },
  {
    title: "Lighting Consultancy & Sourcing",
    description: "DUA is a quality manufacturer with its own 2000M2 production facilities, skilled workers and artisans from a vast range of hand crafted and machine tooled traditions. We offer an extensive network of outsource ‘OEM’, represent several outstanding brands and are experieinced in prequalified sourcing worldwide. DUA can be contracted for expert impartial lighting consultancy for clients projects that value upstream lighting design, procurement and co-ordinated project realization."
  },
  {
    title: "Lighting Energy Conservation & Safety",
    description: "We are part of an evolving solution. DUA is available to conduct lighting energy consumption minimization and safety audits for your entire property. This saves you energy and operational costs. Full support and the right product for every stage of your project development, specification, supply & service. We care about the environment and optimized selected energy efficient lighting. Please enquire further."
  },
  {
    title: "Lighting Project Management",
    description: "Lighting project management – we would be happy to help with our network resources. Our reputation for excellence is earned by delivering the finest products and services on budget and on time. We pride ourselves on offering an efficient, personal and friendly service with very competitive prices."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#111111] text-white antialiased">
      <Header />
      <main>
        <section className="container mx-auto px-6 md:px-4 py-20 md:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-light mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
              From initial concept to final installation, we offer a comprehensive suite of lighting services designed to bring your vision to life.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 md:px-4 pb-20 md:pb-32 space-y-16">
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
      <SiteFooter />
    </div>
  );
}
