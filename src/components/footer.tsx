
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export function SiteFooter() {
  const baliAddress = "Jl. Bypass Ngurah Rai 87R3+Q8R Kesiman, Sanur Kaja, Denpasar Selatan, Kota Denpasar, Bali, Indonesia 80228";
  const jakartaAddress = "Synthesis Square Tower 2 - Jl. Gatot Subroto No. 177a, Menteng Dalam, Pancoran, Jakarta Selatan, 12180";
  const baliGmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(baliAddress)}`;
  const jakartaGmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(jakartaAddress)}`;

  return (
    <footer className="bg-neutral-900 text-white py-16 relative z-10">
      <div className="container mx-auto px-4">

        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
            Light Matters.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left text-sm">
          
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <Link href="/philosophy" className="text-white/70 hover:text-white transition-colors">The Studio</Link>
            <Link href="/journal" className="text-white/70 hover:text-white transition-colors">Journal</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-white mb-2">Work</h4>
            <Link href="/projects" className="text-white/70 hover:text-white transition-colors">Projects</Link>
            <Link href="/services" className="text-white/70 hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="text-white/70 hover:text-white transition-colors">Bespoke</Link>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-2">Get in Touch</h4>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-medium text-white/90">Bali Office</p>
                  <p className="text-white/70 my-2 leading-relaxed">{baliAddress}</p>
                  <a href={baliGmapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/80 hover:text-white transition-colors font-semibold">
                    <MapPin className="mr-2 h-4 w-4" />
                    View Map
                  </a>
                </div>
                <div>
                  <p className="font-medium text-white/90">Jakarta Office</p>
                  <p className="text-white/70 my-2 leading-relaxed">{jakartaAddress}</p>
                  <a href={jakartaGmapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-white/80 hover:text-white transition-colors font-semibold">
                    <MapPin className="mr-2 h-4 w-4" />
                    View Map
                  </a>
                </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-xs text-white/50 mb-4 md:mb-0">
            © 2025 DUA LIGHTING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">PINTEREST</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
