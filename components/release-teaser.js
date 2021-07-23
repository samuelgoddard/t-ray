import Link from 'next/link'
import ConditionalWrap from 'conditional-wrap';
import MetaTeaser from '@/components/meta-teaser'
import ImageWrapper from '@/components/image-wrapper'
import Rollover from '@/components/rollover';

export default function ReleaseTeaser({image, title, date, type, purchaseLinks, video, videoOverlay, href, external, musicVideo, marqueeForce}) {
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
          <div className={`w-full mb-6 ${musicVideo ? 'music-video' : ''}`}>
            <div className="overflow-hidden rounded-md relative">
              { videoOverlay && (
                <video loop={true} autoPlay="autoplay" playsInline={true} muted preload="true" className="object-cover z-10 absolute inset-0 w-full h-full scale-110 will-change">
                <source src={ videoOverlay } type="video/mp4" />

                  Sorry. Your browser does not support the video tag.
                </video>
              )}
              <ImageWrapper
                image={image}
                className="w-full will-change release-teaser__image"
                baseWidth={video ? 1200 : 720}
                baseHeight={video ? 720 : 720}
                alt={'T-Ray Album'}
              />
            </div>
          </div>
            
          <div className="flex justify-center mb-4 md:mb-6">
            <MetaTeaser marqueeForce={marqueeForce} date={date} type={type}/>
          </div>
          
          <h3 className="text-[19px] md:text-[21px] xl:text-[26px] text-center mb-2 xl:mb-4 leading-none release-teaser__title">{title}</h3>
        </a>
      </ConditionalWrap>

      {purchaseLinks && (
        <span className="flex uppercase justify-center space-x-2 text-lg">
          {purchaseLinks.map((e, i) => {
            return (
              <span key={i} className="flex items-center">
                <a href={e.url} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="overflow-hidden inline-block">
                    <Rollover animatedUnderline label={e.title} />
                  </div>
                </a>
                { i !== purchaseLinks.length - 1 && (
                  <span className="inline-block ml-2 mt-[-10px]">&bull;</span>
                )}
              </span>
            )
          })}
        </span>
      )}
    </div>
  )
}