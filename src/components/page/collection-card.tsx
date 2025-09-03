
import Image from 'next/image';

type CollectionCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  hint: string;
};

export function CollectionCard({ title, description, image, alt, hint }: CollectionCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image 
        src={image} 
        alt={alt} 
        width={800} 
        height={600} 
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
        data-ai-hint={hint} 
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
