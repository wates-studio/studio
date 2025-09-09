import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Lightbulb, Users, Handshake } from 'lucide-react';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <section className="text-center my-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a range of services to help you create the perfect atmosphere for your space.
          </p>
        </section>

        <section className="my-24">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader className="items-center">
                <div className="p-4 bg-secondary rounded-full">
                    <Lightbulb className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Design & Curation</h3>
                <p className="text-muted-foreground">
                  We work alongside architects and designers to select the perfect fixtures from our collection, ensuring a cohesive and powerful lighting scheme that honors the vision for the space.
                </p>
              </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center">
                    <div className="p-4 bg-secondary rounded-full">
                        <Handshake className="w-8 h-8 text-primary" />
                    </div>
                </CardHeader>
                <CardContent className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">Technical Specification</h3>
                    <p className="text-muted-foreground">
                    Our team provides comprehensive technical support, from photometric data to integration with control systems, ensuring a flawless execution from blueprint to reality.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="items-center">
                    <div className="p-4 bg-secondary rounded-full">
                        <Users className="w-8 h-8 text-primary" />
                    </div>
                </CardHeader>
                <CardContent className="text-center">
                    <h3 className="text-2xl font-semibold mb-2">Bespoke Creation</h3>
                    <p className="text-muted-foreground">
                    For unique challenges, we offer a fully bespoke service. We collaborate with you to design and fabricate one-of-a-kind lighting solutions that are singular, powerful, and yours alone.
                    </p>
                </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
