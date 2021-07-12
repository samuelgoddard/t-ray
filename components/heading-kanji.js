import Image from 'next/image'

export default function HeadingKanji({ heading, subHeading, kanji }) {
  return (
    <div className="mb-[12vw] relative">
      <div className="relative z-20">
        <h2 className="uppercase text-4xl md:text-[7vw] xl:text-[6vw] leading-[0.95] text-center will-change block relative z-20">{heading}</h2>
        { subHeading && (
          <span className="text-[22px] md:text-[26px] xl:text-[32px] 2xl:text-[40px] leading-[0.95] text-center block relative z-20">{subHeading}</span>
        )}
      </div>

      { kanji && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-5vw] z-0">
          <div className="w-[13vw] md:w-[10vw]">
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