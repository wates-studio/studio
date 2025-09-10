"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type JournalCardProps = {
  title: string;
  image: string;
  alt: string;
  hint: string;
};

export function JournalCard({ title, image, alt, hint }: JournalCardProps) {
  return (
    <motion.div 
      className="space-y-4 bg-white p-4 rounded-lg"
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      <Link href="/journal" className="block">
        <div className="overflow-hidden rounded-lg">
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
          >
            <Image 
              src={image} 
              alt={alt} 
              width={600} 
              height={400} 
              className="w-full object-cover" 
              data-ai-hint={hint} 
            />
          </motion.div>
        </div>
      </Link>
      <h3 className="text-xl font-medium pt-2 text-black">{title}</h3>
      <Link href="/journal" className="text-gray-500 hover:text-black transition-colors">Read More →</Link>
    </motion.div>
  );
}
