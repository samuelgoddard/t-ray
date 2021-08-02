import Image from 'next/image'
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'
import { useState } from 'react'

export default function HeadingKanji({ heading, subHeading, kanji, horizontal, large}) {
  let widthClass = ''
  if (horizontal) {
    widthClass = 'w-[30vw] md:w-[18vw]'
  } else if (large) {
    widthClass = 'w-[14vw] md:w-[7vw]'
  } else {
    widthClass = 'w-[18vw] md:w-[10vw]'
  }
  const [imageIsLoaded, setImageIsLoaded] = useState(false)
  return (
    <div className="mb-[20vw] md:mb-[12vw] relative">
      <div className="relative z-20">
        <h2 className="uppercase text-[40px] md:text-[7vw] xl:text-[6vw] leading-[0.95] text-center will-change block relative z-20 mb-[6px] md:mb-[14px]">
          <span className="block relative overflow-hidden transition-colors ease-in-out duration-500">
            <m.span variants={reveal} className="block">
              {heading}
            </m.span>
          </span>
        </h2>
        { subHeading && (
          <span className="text-[18px] md:text-[26px] xl:text-[32px] 2xl:text-[40px] leading-[1.1] text-center block relative z-20">
            <span className="block relative overflow-hidden transition-colors ease-in-out duration-500">
            <m.span variants={reveal} className="block">
              {subHeading}
            </m.span>
          </span>
          </span>
        )}
      </div>

      { kanji && (
        <div className={`absolute top-0 left-0 right-0 flex justify-center items-center z-0 transform pointer-events-none ${horizontal ? 'rotate-90 mt-[0vw]' : 'mt-[-5vw]'}`}>
          <div className={`opacity-100 dark:opacity-50 transition-opacity duration-500 ease-in-out transform ${widthClass}`} data-scroll data-scroll-speed="0.35" data-scroll-direction={horizontal ? 'horizontal' : 'vertical'}>
            <Image
              src={kanji}
              alt="Placeholder"
              layout="responsive"
              className={`w-full will-change ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
              onLoad={event => {
                const target = event.target;
                if (target.src.indexOf('data:image/gif;base64') < 0) {
                    setImageIsLoaded(true)
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}