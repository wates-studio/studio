
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ProjectCardProps = {
  name: string;
  location: string;
  image: string;
  hint: string;
  slug: string;
};

export function ProjectCard({ name, location, image, hint, slug }: ProjectCardProps) {
  return (
    <Link href={slug} className="group block overflow-hidden rounded-lg">
      <motion.div 
        className="relative aspect-[4/5] w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          data-ai-hint={hint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">{name}</h3>
          <p className="text-white/80 mt-1">{location}</p>
          <div className="mt-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Case Study →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
