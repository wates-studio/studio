
import { Logo } from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight, Instagram, Facebook } from "lucide-react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M8.5 20.3c.1-.1.2-.3.2-.5l1-4.7c.3-.9.2-2-.3-2.8-.6-1-1-2.3-1-3.6 0-3.3 2.5-6.2 6.2-6.2 3.4 0 5.5 2.5 5.5 5.5 0 3.8-2 6.6-4.9 6.6-1.5 0-2.8-.9-3.2-1.9l-.8 3c-.3 1.2-1 2.3-2.3 2.8-1.1.4-2.3.2-3.3-.5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white/80 pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-white/60 max-w-xs">
              Crafting atmospheres through light. Where soul meets science.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 tracking-wider">COMPANY</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-white transition-colors">Philosophy</a>
              <a href="#" className="hover:text-white transition-colors">Projects</a>
              <a href="#" className="hover:text-white transition-colors">The Journal</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          {/* Column 3: Collections Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 tracking-wider">COLLECTIONS</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#" className="hover:text-white transition-colors">Aura Collection</a>
              <a href="#" className="hover:text-white transition-colors">Terra Collection</a>
              <a href="#" className="hover:text-white transition-colors">Zenith Collection</a>
              <a href="#" className="hover:text-white transition-colors">View All</a>
            </nav>
          </div>
          
          {/* Column 4: Newsletter Signup */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4 tracking-wider">STAY ILLUMINATED</h4>
            <p className="text-sm text-white/60 mb-4">
              Receive occasional insights on design, lighting, and new collections.
            </p>
            <div className="flex w-full items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-white/30 focus:border-white" 
              />
              <Button type="submit" size="icon" className="bg-white text-black hover:bg-white/80 flex-shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-6">
          <p>© 2025 Dua Lighting. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-white transition-colors" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-white transition-colors" /></a>
            <a href="#" aria-label="Pinterest"><PinterestIcon className="h-5 w-5 hover:text-white transition-colors" /></a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
