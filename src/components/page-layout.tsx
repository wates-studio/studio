import { Header } from '@/components/header';
import { SiteFooter } from '@/components/footer';

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#111111] text-white antialiased">
      <Header />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}