
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  show: boolean;
};

export function Header({ show }: HeaderProps) {
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      )}
    >
      <div className="p-4 md:p-6 bg-black/30 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
          <div className="font-semibold text-xl tracking-wider">
            DUA
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white/80 transition-colors">Collections</a>
            <a href="#" className="hover:text-white/80 transition-colors">Projects</a>
            <a href="#" className="hover:text-white/80 transition-colors">The Journal</a>
            <a href="#" className="hover:text-white/80 transition-colors">Philosophy</a>
          </nav>
          <div>
            <Button variant="outline" className="text-white border-white/50 hover:bg-white hover:text-black h-9 px-4 rounded-full text-sm bg-transparent">
              Trade Portal
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
