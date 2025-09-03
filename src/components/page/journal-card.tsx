
import Image from 'next/image';
import Link from 'next/link';

type JournalCardProps = {
  title: string;
  image: string;
  alt: string;
  hint: string;
};

export function JournalCard({ title, image, alt, hint }: JournalCardProps) {
  return (
    <div className="space-y-4">
      <Link href="/journal">
        <Image 
          src={image} 
          alt={alt} 
          width={600} 
          height={400} 
          className="rounded-lg object-cover" 
          data-ai-hint={hint} 
        />
      </Link>
      <h3 className="text-xl font-medium pt-2">{title}</h3>
      <Link href="/journal" className="text-white/70 hover:text-white transition-colors">Read More →</Link>
    </div>
  );
}
