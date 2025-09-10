
"use client";

import Image from 'next/image';
import { InfoCarousel } from '@/components/page/info-carousel';
import { teamMembers } from '@/data/home-page';

export function TeamSection() {
    return (
        <InfoCarousel
            title="BEHIND THE LIGHT"
            description="We are a collective of designers, engineers, and craftspeople united by a single belief: that light, when wielded with intention, is the most powerful tool for shaping human experience."
            items={teamMembers.map(member => ({
                id: member.name,
                image: member.image,
                hint: member.hint,
                title: member.name,
                subtitle: member.title
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-white/80">{item.subtitle}</p>
                </div>
              </div>
            )}
        />
    );
}
