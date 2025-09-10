
"use client";

import { motion } from 'framer-motion';
import { ScrollAnimation } from '@/components/scroll-animation';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  layout?: 'split' | 'centered';
  carouselBasis?: string;
}

export function InfoCarousel<T extends CarouselItemData>({ title, description, items, renderItem, layout = 'split', carouselBasis = "md:basis-1/2 lg:basis-1/3" }: InfoCarouselProps<T>) {
  
  const content = (
    <>
      <motion.div 
        variants={cardVariants} 
        className={cn(
          "space-y-6",
          layout === 'split' && "md:pr-8",
          layout === 'centered' && "text-center max-w-3xl mx-auto"
        )}
      >
        <h2 className="text-sm font-bold tracking-widest uppercase text-white/50">{title}</h2>
        <p className="text-xl leading-relaxed text-white/80">
          {description}
        </p>
      </motion.div>
      <motion.div variants={cardVariants} className="w-full">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem key={item.id} className={cn("pl-4 basis-1/2 md:basis-1/3", carouselBasis)}>
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
    </>
  );

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {layout === 'split' ? (
          <ScrollAnimation staggerChildren={0.2} className="grid md:grid-cols-2 gap-16 items-center md:px-12">
            {content}
          </ScrollAnimation>
        ) : (
          <ScrollAnimation staggerChildren={0.2} className="flex flex-col gap-16 items-center md:px-12">
            {content}
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}
