import React, { useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import ImageWrapper from '@/components/image-wrapper';
import BlockContent from '@sanity/block-content-to-react'

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
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner">
                <div className="mb-8 md:mb-12">
                  <ImageWrapper
                    image={slide.image.asset}
                    className="embla__slide__img will-change"
                    baseWidth={1808}
                    baseHeight={1114}
                  />
                </div>

                {slide.year && (
                  <h2 className="text-outline embla__slide__title text-3xl md:text-4xl xl:text-5xl mb-1 md:mb-2 xl:mb-3">{slide.year}</h2>
                )}

                {slide.title && (
                  <h3 className="text-outline text-xl md:text-2xl xl:text-3xl">{slide.title}</h3>
                )}

                {slide.descriptionText && (
                  <p className="w-11/12 md:w-10/12 text-lg md:text-xl xl:text-2xl tracking-tight leading-tight md:leading-tight xl:leading-tight block">{slide.descriptionText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryCarousel;
