
import { Logo } from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Logo & Social */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-white/60 max-w-xs">
              Crafting atmospheres through light.
            </p>
            <div className="flex space-x-4">
              {/* Add social icons here */}
            </div>
          </div>

          {/* Col 2: Navigate */}
          <div>
            <h4 className="font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Philosophy</a></li>
            </ul>
          </div>

          {/* Col 3: Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Showrooms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Care & Maintenance</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Illuminated</h4>
            <p className="text-sm text-white/60 mb-4">
              Receive occasional insights on design, lighting, and new collections.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-transparent border-white/30 focus:border-white" />
              <Button type="submit" size="icon" className="bg-white text-black hover:bg-white/80">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between text-sm text-white/60">
          <p>© 2025 Dua Lighting. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
