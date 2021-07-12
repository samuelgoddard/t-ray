import React, { useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import Image from 'next/image'
import carouselPlaceholder from '@/public/images/carousel-placeholder.jpg'

const HistoryCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
    inViewThreshold: 0.65
  });
  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="mb-8 md:mb-12">
                  <Image
                    src={carouselPlaceholder}
                    alt="ImReallyATrex"
                    layout="responsive"
                    className="embla__slide__img will-change"
                  />
                </div>

                <h2 className="text-outline embla__slide__title text-3xl md:text-4xl xl:text-5xl transition-colors ease-in-out duration-300">2010</h2>

                <p className="w-11/12 md:w-10/12 text-lg md:text-xl xl:text-2xl tracking-tight leading-tight md:leading-tight xl:leading-tight block">Professionally speaking, I became a revenue-generating musician when my former band “Cover Drive” was discovered on YouTube by a UK-based record label when I was 17.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryCarousel;
