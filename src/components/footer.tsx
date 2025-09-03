
import { Instagram, Linkedin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.5 12c0-2.3-1.4-5-4.9-5-3.6 0-4.6 2.3-4.6 4.2 0 1.2.7 2.8 1.8 3.3l.6-2.5s-.2-.4-.2-1c0-1.4 1-2.5 2.3-2.5 1.2 0 1.8.9 1.8 2 0 1.2-.8 3-1.2 4.6-.3 1.3 1 2.3 2.3 2.3 2.8 0 4.9-3.4 4.9-6.3 0-2.5-1.8-4.4-4.2-4.4-3 0-4.8 2.2-4.8 4.5 0 .8.3 1.5.7 1.9l-1.5 6C7.2 21.3 7 22 7.7 22c.7 0 1.4-1 1.4-1.5l1.3-5.2s.6-2.4.9-2.9c.4-1 .9-2 1.9-2s2.5 1.2 2.5 3.3c0 2.8-1.7 5.1-4.1 5.1-3.3 0-5.6-2.5-5.6-5.8 0-3.1 2.3-5.5 5.2-5.5 2.8 0 4.4 2 4.4 4.1 0 1.1-.4 2.1-.9 2.8l-1.1 4.3c-.2 1 .3 1.9 1.2 1.9.9 0 1.7-.6 2-1.4 1.1-2.9 1.7-6.2 1.7-8.5C22 5.5 17.8 2 12.5 2 7.2 2 3 5.5 3 10.3c0 2.4 1 4.5 2.4 5.4.3.2.4.1.5-.1l.3-1c.1-.5.1-.6-.2-.8-1.4-1-2.1-2.4-2.1-4 0-3.3 2.5-6.5 7-6.5 3.9 0 6.5 2.8 6.5 5.8 0 2.8-1.5 5.5-3.8 5.5-1 0-1.8-.8-1.5-1.8z"/>
    </svg>
)


export function Footer() {
    return (
        <footer className="bg-[#1C1C1C] text-white">
            <div className="max-w-7xl mx-auto py-16 px-8">
                <div className="grid md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-2xl tracking-wider">DUA</h3>
                        <p className="text-[#A3A3A3] text-sm">Crafting atmospheres through light.</p>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Instagram" className="text-[#A3A3A3] hover:text-white"><Instagram className="h-5 w-5" /></a>
                            <a href="#" aria-label="Pinterest" className="text-[#A3A3A3] hover:text-white"><PinterestIcon className="h-5 w-5" /></a>
                            <a href="#" aria-label="LinkedIn" className="text-[#A3A3A3] hover:text-white"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Navigate</h4>
                        <ul className="space-y-3 text-sm text-[#A3A3A3]">
                            <li><a href="#" className="hover:text-white">Collections</a></li>
                            <li><a href="#" className="hover:text-white">Projects</a></li>
                            <li><a href="#" className="hover:text-white">The Journal</a></li>
                            <li><a href="#" className="hover:text-white">Philosophy</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-3 text-sm text-[#A3A3A3]">
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white">Showrooms</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Care & Maintenance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Stay Illuminated</h4>
                        <p className="text-sm text-[#A3A3A3] mb-4">Receive occasional insights on design, lighting, and new collections.</p>
                        <form className="flex items-center">
                            <Input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-[#333] border-[#555] text-white rounded-r-none h-10 focus:ring-white focus:border-white" 
                            />
                            <Button type="submit" size="icon" className="h-10 w-10 rounded-l-none bg-white text-black hover:bg-white/90">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[#333] text-center text-xs text-[#A3A3A3] flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                    <p>&copy; {new Date().getFullYear()} Dua Lighting. All Rights Reserved.</p>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
