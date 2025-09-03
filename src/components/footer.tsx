
import { Logo } from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Logo and Tagline */}
        <div className="mb-12">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <p className="text-white/60">
            Crafting atmospheres through light. Where soul meets science.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-sm text-white/80">
          <a href="#" className="hover:text-white transition-colors">Collections</a>
          <a href="#" className="hover:text-white transition-colors">Projects</a>
          <a href="#" className="hover:text-white transition-colors">The Journal</a>
          <a href="#" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Showrooms</a>
        </nav>

        {/* Newsletter Signup */}
        <div className="w-full max-w-md mb-12">
          <h4 className="font-semibold text-lg mb-2">Stay Illuminated</h4>
          <p className="text-sm text-white/60 mb-4">
            Receive occasional insights on design, lighting, and new collections.
          </p>
          <div className="flex w-full items-center space-x-2">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-transparent border-white/30 focus:border-white text-center md:text-left" 
            />
            <Button type="submit" size="icon" className="bg-white text-black hover:bg-white/80 flex-shrink-0">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/60 gap-4">
          <p>© 2025 Dua Lighting. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
