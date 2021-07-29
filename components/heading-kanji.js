import Image from 'next/image'
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'

export default function HeadingKanji({ heading, subHeading, kanji }) {
  return (
    <div className="mb-[12vw] relative">
      <div className="relative z-20">
        <h2 className="uppercase text-4xl md:text-[7vw] xl:text-[6vw] leading-[0.95] text-center will-change block relative z-20">
          <span className="block relative overflow-hidden">
            <m.span variants={reveal} className="block">
              {heading}
            </m.span>
          </span>
        </h2>
        { subHeading && (
          <span className="text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[40px] leading-[1.1] text-center block relative z-20">
            <span className="block relative overflow-hidden">
            <m.span variants={reveal} className="block">
              {subHeading}
            </m.span>
          </span>
          </span>
        )}
      </div>

      { kanji && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-5vw] z-0">
          <div className="w-[13vw] md:w-[10vw] opacity-100 dark:opacity-50 transition-opacity duration-500 ease-in-out" data-scroll data-scroll-speed="0.35">
            <Image
              src={kanji}
              alt="Placeholder"
              layout="responsive"
              className="w-full will-change"
            />
          </div>
        </div>
      )}
    </div>
  )
}