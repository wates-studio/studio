
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-white py-20 relative z-10">
      <div className="container mx-auto px-4 text-center">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Light Matters.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-left mb-20 text-sm">
          
          <div className="flex flex-col gap-3 text-white/70">
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <Link href="/philosophy" className="hover:text-white transition-colors">The Studio</Link>
            <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          
          <div className="flex flex-col gap-3 text-white/70">
            <h4 className="font-semibold text-white mb-2">Work</h4>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Bespoke</Link>
          </div>

          <div className="flex flex-col gap-3 text-white/70">
            <h4 className="font-semibold text-white mb-2">Legal</h4>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>

          <div className="flex flex-col gap-3 text-white/70">
            <h4 className="font-semibold text-white mb-2">Social</h4>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Pinterest</a>
          </div>

        </div>

        <p className="text-xs text-white/50">
          © 2025 DUA LIGHTING
        </p>

      </div>
    </footer>
  );
}
