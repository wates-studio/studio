
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
  return (
    <div className={cn("cursor-pointer px-4 transition-all duration-300", scrolled ? "py-4" : "py-6")}>
      <Image
        src="/logo.svg"
        alt="Dua Collective Logo"
        width={scrolled ? 60 : 120}
        height={scrolled ? 38 : 75}
        priority
        className="transition-all duration-300"
      />
    </div>
  );
}
