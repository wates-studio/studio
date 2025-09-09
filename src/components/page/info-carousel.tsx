
"use client";

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { ReactNode } from 'react';

const cardVariants = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8
    }
  }
};

interface CarouselItemData {
    id: string;
    image: string;
    hint: string;
    title: string;
    subtitle: string;
}

interface InfoCarouselProps<T extends CarouselItemData> {
  title: string;
  description: string;
  items: T[];
  renderItem: (props: { item: T }) => ReactNode;
}

export function InfoCarousel<T extends CarouselItemData>({ title, description, items, renderItem }: InfoCarouselProps<T>) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimation staggerChildren={0.2} className="grid md:grid-cols-2 gap-16 items-center px-12">
          <motion.div variants={cardVariants} className="space-y-6 md:pr-8">
            <h2 className="text-4xl md:text-5xl">{title}</h2>
            <p className="text-xl leading-relaxed text-white/80">
              {description}
            </p>
          </motion.div>
          <motion.div variants={cardVariants} className="w-full">
            <Carousel opts={{ loop: true, align: "start" }} className="w-full">
              <CarouselContent className="-ml-4">
                {items.map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2 pl-4">
                    <div className="p-1 group">
                        {renderItem({ item })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black/20 border-white/20 hover:bg-white/10 hover:text-white" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black/20 border-white/20 hover:bg-white/10 hover:text-white" />
            </Carousel>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
