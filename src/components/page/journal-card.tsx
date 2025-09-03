
import Image from 'next/image';

type JournalCardProps = {
  title: string;
  image: string;
  alt: string;
  hint: string;
  linkText: string;
};

export function JournalCard({ title, image, alt, hint, linkText }: JournalCardProps) {
  return (
    <div className="group space-y-4">
      <div className="overflow-hidden rounded-lg">
        <Image 
          src={image} 
          alt={alt} 
          width={600} 
          height={400} 
          className="rounded-lg object-cover group-hover:scale-105 transition-transform duration-500" 
          data-ai-hint={hint} 
        />
      </div>
      <h3 className="text-xl font-medium pt-2">{title}</h3>
      <a href="#" className="text-black/70 hover:text-black font-medium transition-colors">{linkText}</a>
    </div>
  );
}
