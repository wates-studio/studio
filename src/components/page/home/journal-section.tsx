
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { TextJournalCard } from '@/components/page/text-journal-card';
import { journalEntries } from '@/data/home-page';

export function JournalSection() {
    const [journalCarouselApi, setJournalCarouselApi] = useState<CarouselApi>();

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto">
                <div className="px-4 md:px-12 flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                      <h2 className="text-sm font-bold tracking-widest uppercase text-white/50">
                        FEATURED JOURNAL
                      </h2>
                      <div className="hidden md:flex justify-end items-center gap-4">
                          <Button 
                              variant="outline" 
                              size="icon" 
                              className="text-white bg-black/20 border-white/20 hover:bg-white/10 hover:text-white rounded-full"
                              onClick={() => journalCarouselApi?.scrollPrev()}
                          >
                              <ArrowLeft className="h-4 w-4" />
                          </Button>
                          <Button 
                              variant="outline" 
                              size="icon" 
                              className="text-white bg-black/20 border-white/20 hover:bg-white/10 hover:text-white rounded-full"
                              onClick={() => journalCarouselApi?.scrollNext()}
                          >
                              <ArrowRight className="h-4 w-4" />
                          </Button>
                      </div>
                    </div>
                    <Carousel
                        setApi={setJournalCarouselApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-8">
                            {journalEntries.map((entry, index) => (
                                <CarouselItem key={index} className="pl-8 basis-full md:basis-1/2 lg:basis-[70%]">
                                    <TextJournalCard {...entry} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
