
"use client";

import Image from 'next/image';
import { InfoCarousel } from '@/components/page/info-carousel';
import { designers } from '@/data/home-page';

export function InspirationSection() {
    return (
        <InfoCarousel
            title="Lighting Designers In History"
            description="We stand on the shoulders of giants. Explore the work of the master lighting designers who have shaped our philosophy and continue to inspire our craft."
            items={designers.map(designer => ({
              id: designer.name,
              image: designer.image,
              hint: designer.hint,
              title: designer.name,
              subtitle: designer.quote
            }))}
            layout="centered"
            carouselBasis="1/4"
            renderItem={({ item }) => (
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Portrait of ${item.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={item.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{item.subtitle}</p>
                </div>
              </div>
            )}
        />
    );
}
