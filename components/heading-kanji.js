import Image from 'next/image'

export default function HeadingKanji({ heading, subHeading, kanji }) {
  return (
    <div className="mb-[12vw] relative">
      <div className="relative z-20">
        <h2 className="uppercase text-4xl md:text-[7vw] xl:text-[6vw] leading-[0.95] text-off-black dark:text-off-white text-center will-change block relative z-20">{heading}</h2>
        { subHeading && (
          <span className="text-lg md:text-[2vw] leading-[0.95] text-off-black dark:text-off-white text-center block relative z-20">{subHeading}</span>
        )}
      </div>

      { kanji && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-5vw] z-0">
          <div className="w-[10vw]">
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