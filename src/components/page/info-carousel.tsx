
"use client";

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

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
  carouselBasis?: string;
  setApi?: (api: CarouselApi) => void;
  headerActions?: ReactNode;
}

export function InfoCarousel<T extends CarouselItemData>({ title, description, items, renderItem, carouselBasis = "md:basis-1/2 lg:basis-1/3", setApi, headerActions }: InfoCarouselProps<T>) {
  
  const content = (
    <div className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div 
          variants={cardVariants} 
          className="space-y-6 md:pr-8"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-white/50">{title}</h2>
          <p className="text-xl leading-relaxed text-white/80">
            {description}
          </p>
        </motion.div>
        {headerActions && (
          <motion.div variants={cardVariants}>
            {headerActions}
          </motion.div>
        )}
      </div>
      <motion.div variants={cardVariants} className="w-full">
        <Carousel setApi={setApi} opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className={cn("pl-4 basis-1/2 md:basis-1/3", carouselBasis)}>
                <div className="p-1 group">
                    {renderItem({ item })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </div>
  );

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimation staggerChildren={0.2} className="md:px-12">
          {content}
        </ScrollAnimation>
      </div>
    </section>
  );
}
