import React, { useEffect, useCallback, useState } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import ImageWrapper from '@/components/image-wrapper';

const HistoryCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
    inViewThreshold: 0.65,
    speed: 4
  });
  
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla relative">
      <button
        className={`absolute top-0 flex items-start left-0 text-[60px] md:text-[70px] xl:text-[80px] font-mono z-10 h-full pt-[15%] xl:pt-[13.5%] 2xl:pt-[12%] px-[15px] md:pr-[8%] md:pl-[8%] 2xl:pl-[4%] focus:border-none focus:outline-none opacity-100 md:opacity-30 hover:opacity-100 ease-in-out duration-500 transition-opacity`}
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <span className="block">&#x3c;</span>
      </button>
      
      <button
        className={`absolute top-0 flex items-start right-0 text-[60px] md:text-[70px] xl:text-[80px] font-mono z-10 h-full pt-[15%] xl:pt-[13.5%] 2xl:pt-[12%] px-[15px] md:pl-[8%] md:pr-[8%] 2xl:pr-[4%] focus:border-none focus:outline-none opacity-100 md:opacity-30 hover:opacity-100 ease-in-out duration-500 transition-opacity`}
        onClick={scrollNext}
      >
        <span className="block">&#x3e;</span>
      </button>

      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner will-change" data-scroll data-scroll-direction="horizontal" data-scroll-speed="1.2">
                <div className="mb-8 md:mb-12">
                  <ImageWrapper
                    image={slide.image.asset}
                    className="embla__slide__img will-change"
                    baseWidth={900}
                    baseHeight={550}
                  />
                </div>

                {slide.year && (
                  <h2 className="embla__slide__title text-2xl md:text-3xl xl:text-4xl mb-[6px] md:mb-2 xl:mb-3 transition-colors ease-in-out duration-500">{slide.year}</h2>
                )}

                {slide.title && (
                  <h3 className="text-base md:text-xl xl:text-2xl leading-[1.2] w-11/12 mb-3 md:mb-5 transition-colors ease-in-out duration-500">{slide.title}</h3>
                )}

                {slide.descriptionText && (
                  <p className="w-11/12 md:w-10/12 text-base md:text-lg xl:text-xl tracking-tight leading-tight md:leading-tight xl:leading-tight block transition-colors ease-in-out duration-500">{slide.descriptionText}</p>
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
