
import { Logo } from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Instagram, Facebook } from "lucide-react";

// Pinterest SVG icon component as it's not in lucide-react
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12.4 3.9c-4.4 0-8 3.6-8 8 0 2.9 1.6 5.5 4 6.9.1.1.1.2.1.3l-.2 1c-.1.5.4 1 1 1 .2 0 .4-.1.5-.2l1.6-1.6c.4.1.8.1 1.2.1 4.4 0 8-3.6 8-8s-3.6-8-8-8zm-3.2 10.2c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6z" />
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <path d="M12.4 3.9c-4.4 0-8 3.6-8 8 0 2.9 1.6 5.5 4 6.9.1.1.1.2.1.3l-.2 1c-.1.5.4 1 1 1 .2 0 .4-.1.5-.2l1.6-1.6c.4.1.8.1 1.2.1 4.4 0 8-3.6 8-8s-3.6-8-8-8zm-3.2 10.2c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6z" />
    <path d="M12.4 3.9c-4.4 0-8 3.6-8 8 0 2.9 1.6 5.5 4 6.9.1.1.1.2.1.3l-.2 1c-.1.5.4 1 1 1 .2 0 .4-.1.5-.2l1.6-1.6c.4.1.8.1 1.2.1 4.4 0 8-3.6 8-8s-3.6-8-8-8zm-3.2 10.2c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6zm2.4 0c-.3 0-.6-.3-.6-.6V9.2c0-.3.3-.6.6-.6s.6.3.6.6v4.3c0 .3-.3.6-.6.6z" />
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

          {/* Column 1: Brand */}
          <div className="md:col-span-4">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/60 text-sm max-w-xs">
              Crafting atmospheres through light. Where soul meets science.
            </p>
          </div>

          {/* Column 2: Navigation - Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Company</h4>
            <nav className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Philosophy</a>
              <a href="#" className="hover:text-white transition-colors">Projects</a>
              <a href="#" className="hover:text-white transition-colors">The Journal</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3: Navigation - Collections */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Collections</h4>
            <nav className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Aura Collection</a>
              <a href="#" className="hover:text-white transition-colors">Terra Collection</a>
              <a href="#" className="hover:text-white transition-colors">Zenith Collection</a>
              <a href="#" className="hover:text-white transition-colors">Showrooms</a>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-4">Stay Illuminated</h4>
            <p className="text-sm text-white/60 mb-4">
              Receive occasional insights on design, lighting, and new collections.
            </p>
            <div className="flex w-full items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-white/30 focus:border-white placeholder:text-white/50"
              />
              <Button type="submit" size="icon" className="bg-white text-black hover:bg-white/80 flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4">
          <p>© 2025 Dua Lighting. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Pinterest" className="hover:text-white transition-colors"><PinterestIcon className="w-5 h-5" /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}
