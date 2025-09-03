import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-8 text-white">
      <div className="font-semibold text-xl tracking-wider" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
        DUA
      </div>
      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  );
}
