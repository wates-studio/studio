import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function ContactPage() {
  const { contact_map } = placeholderImages;
  return (
    <>
      <Header />
      <main className="container mx-auto py-12 px-4">
        <section className="text-center my-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-semibold">Get in Touch</h2>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h3 className="text-xl font-semibold">Our Studio</h3>
                    <p className="text-muted-foreground">Jl. Raya Kerobokan No.88, Kerobokan Kelod, Kec. Kuta Utara, Kabupaten Badung, Bali 80361, Indonesia</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-muted-foreground">hello@dualighting.com</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+62 812-3456-7890</p>
                </div>
                <div className="mt-8">
                    <Image 
                      src={contact_map.src} 
                      alt={contact_map.alt} 
                      width={600} 
                      height={400} 
                      className="rounded-lg" 
                      data-ai-hint={contact_map.hint}
                    />
                </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-3xl font-semibold">Send a Message</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="name" className="text-lg font-medium">Name</label>
                <Input id="name" placeholder="Enter your name" className="mt-2" />
              </div>
              <div>
                <label htmlFor="email" className="text-lg font-medium">Email</label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
              </div>
              <div>
                <label htmlFor="message" className="text-lg font-medium">Message</label>
                <Textarea id="message" placeholder="Enter your message" className="mt-2" />
              </div>
              <Button size="lg">Send Message</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
