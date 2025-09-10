
import Link from 'next/link';
import { cn } from '@/lib/utils';

type TextJournalCardProps = {
  title: string;
  excerpt: string;
  category: string;
  href: string;
  className?: string;
};

export function TextJournalCard({ title, excerpt, category, href, className }: TextJournalCardProps) {
  return (
    <div
      className={cn(
        "flex justify-between items-center flex-col gap-6 p-8 md:p-12 bg-[#1C1C1C] rounded-[25px] h-[400px] md:h-[450px]",
        className
      )}
    >
      <span className="text-white text-xs md:text-[15px] font-bold tracking-widest uppercase opacity-50">
        DUA JOURNAL
      </span>
      <p className="self-stretch text-white text-2xl md:text-4xl text-center leading-tight md:leading-[1.1]">
        {excerpt}
      </p>
      <div className="flex flex-col md:flex-row justify-start items-center gap-2 md:gap-[18px]">
        <span className="text-white text-xs md:text-[15px] font-bold tracking-widest uppercase">
          {category}
        </span>
        <span className="hidden md:inline text-white text-[15px] font-bold tracking-widest">
          |
        </span>
        <Link href={href} className="text-white text-xs md:text-[15px] font-bold tracking-widest hover:underline">
          Read more →
        </Link>
      </div>
    </div>
  );
}
