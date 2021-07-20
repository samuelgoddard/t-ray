
import MetaTeaser from '@/components/meta-teaser'
import ImageWrapper from '@/components/image-wrapper'

export default function ReleaseTeaser({image, title, date, type, purchaseLinks, video }) {
  return(
    <div>
      <div className="w-full mb-6">
        <ImageWrapper
          image={image}
          className="w-full rounded-md will-change"
          baseWidth={video ? 1200 : 720}
          baseHeight={video ? 720 : 720}
          alt={'T-Ray Album'}
        />
      </div>
        
      <div className="flex justify-center mb-4 md:mb-6">
        <MetaTeaser date={date} type={type}/>
      </div>
      
      <h3 className="text-[19px] md:text-[21px] xl:text-[26px] text-center mb-2 xl:mb-4 leading-none">{title}</h3>

      {purchaseLinks && (
        <span className="flex uppercase justify-center space-x-2 text-lg">
          {purchaseLinks.map((e, i) => {
            return (
              <>
                <a href={e.url} target="_blank" rel="noopener noreferrer">{e.title}</a>
                { i !== purchaseLinks.length - 1 && (
                  <span>&bull;</span>
                )}
              </>
            )
          })}
        </span>
      )}
    </div>
  )
}