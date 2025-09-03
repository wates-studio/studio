
import { Logo } from '@/components/logo';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
      <div className="max-w-screen-2xl mx-auto flex items-start justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-white/80 text-sm pt-4">
          <a href="#" className="hover:text-white transition-colors">Profile</a>
          <a href="#" className="hover:text-white transition-colors">Technical</a>
          <a href="#" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="hover:text-white transition-colors">Product</a>
          <a href="#" className="hover:text-white transition-colors">Services</a>
        </nav>
      </div>
    </header>
  );
}
