'use client';

import React, { useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type UseEmblaCarouselType = typeof useEmblaCarousel;
type EmblaOptionsType = NonNullable<Parameters<UseEmblaCarouselType>[0]>;
type EmblaPluginType = NonNullable<Parameters<UseEmblaCarouselType>[1]>[0];

interface CarouselProps {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
  autoplayOptions?: Parameters<typeof Autoplay>[0];
}

export default function Carousel({ slides, options, autoplayOptions }: CarouselProps) {
  const plugins = useMemo(() => {
    const basePlugins: EmblaPluginType[] = [];
    if (autoplayOptions) {
      return basePlugins.concat(Autoplay(autoplayOptions));
    }
    return basePlugins;
  }, [autoplayOptions]);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div className="flex-grow-0 flex-shrink-0 w-full" key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 transition-all duration-200 shadow-md"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 transition-all duration-200 shadow-md"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
} 