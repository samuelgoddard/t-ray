import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap';
import MetaTeaser from '@/components/meta-teaser'
import ImageWrapper from '@/components/image-wrapper'
import Rollover from '@/components/rollover';
import { imageScale, reveal } from '@/helpers/transitions';
import { m } from 'framer-motion';

export default function ReleaseTeaser({image, title, date, type, purchaseLinks, video, videoOverlay, href, external, musicVideo, marqueeForce, music}) {
  let typeWrapper = ''
  if (musicVideo)
    typeWrapper = 'music-video'
  else if (music) {
    typeWrapper = 'music-release'
  }
  else if (href) {
    typeWrapper = 'article'
  }
  return(
    <div className={ href ? 'release-teaser' : ''}>
      <ConditionalWrap
        condition={!!href}
        wrap={children => (
          <Link href={href}>
            {children}
          </Link>
        )}
      >
        <a {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})} className={`block w-full ${href ? '' : ''}`}>
          <div className={`w-full mb-6 ${typeWrapper}`}>
            <div className={`overflow-hidden rounded-md relative `}>
              { videoOverlay && (
                <m.div variants={imageScale} className="absolute inset-0 w-full h-full z-10">
                  <video loop={true} autoPlay="autoplay" playsInline={true} muted className="object-cover z-10 scale-110 w-full h-full will-change release-teaser__video">
                  <source src={ videoOverlay } type="video/mp4" />

                    Sorry. Your browser does not support the video tag.
                  </video>
                </m.div>
              )}
              <m.div variants={imageScale}>
                <ImageWrapper
                  image={image}
                  className="w-full will-change release-teaser__image"
                  baseWidth={video ? 1200 : 720}
                  baseHeight={video ? 720 : 720}
                  alt={'T-Ray Album'}
                />
              </m.div>
            </div>
          </div>
            
          <div className="flex justify-center mb-4 md:mb-6 transition-colors ease-in-out duration-500">
            <MetaTeaser marqueeForce={marqueeForce} date={date} type={type}/>
          </div>
          
          <div className="overflow-hidden mb-2 xl:mb-4">
            <m.div variants={reveal}>
              <h3 className="text-[21px] md:text-[21px] xl:text-[26px] text-center leading-none release-teaser__title mb-0 pb-0">{title}</h3>
            </m.div>
          </div>
        </a>
      </ConditionalWrap>

      {purchaseLinks && (
        <span className="flex uppercase justify-center space-x-2 text-sm md:text-base md:ml-auto w-full md:w-auto">
          {purchaseLinks.map((e, i) => {
            return (
              <span key={i} className="flex items-center transition-colors ease-in-out duration-500">
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="overflow-hidden inline-block">
                    <Rollover animatedUnderline label={e.title} />
                  </div>
                </a>
                { i !== purchaseLinks.length - 1 && (
                  <span className="inline-block ml-2 text-[11px] md:text-[16px] mt-[-5px] md:mt-[-10px]">&bull;</span>
                )}
              </span>
            )
          })}
        </span>
      )}
      {/* {purchaseLinks && (
        <span className="flex flex-wrap md:block md:flex-none xl:flex xl:flex-wrap uppercase justify-center md:space-x-2 text-[14px] md:text-[16px]">
          {purchaseLinks.map((e, i) => {
            return (
              <div key={i} className="w-full flex flex-wrap md:block md:flex-none xl:flex xl:flex-wrap items-center text-center transition-colors ease-in-out duration-500">
                <div className="overflow-hidden relative pb-[3px] w-full flex justify-center xl:inline-block xl:w-auto">
                  <m.div variants={reveal} className="w-auto">
                    <a href={e.url} target="_blank" rel="noopener noreferrer" className="group block p-0 m-0 h-[25px]">
                      <div className="overflow-hidden w-auto block xl:inline-block">
                        <Rollover animatedUnderline label={e.title} />
                      </div>
                    </a>
                  </m.div>
                </div>
                { i !== purchaseLinks.length - 1 && (
                  <div className="inline-block md:hidden xl:inline-block">
                    <m.div variants={reveal}>
                      <span className="ml-2 mt-[-13px] text-[12px]">&bull;</span>
                    </m.div>
                  </div>
                )}
              </div>
            )
          })}
        </span>
      )} */}
    </div>
  )
}