import BlockContent from '@sanity/block-content-to-react'
import ImageWrapper from '@/components/image-wrapper'

export default function Content50({ content, image, heading, externalLinkUrl, externalLinkText }) {
  return(
    <div className="flex justify-center">
      <div className="w-full">
        <div className={`flex flex-wrap md:mx-[-3vw] ${image ? 'items-center' : '' }`}>
          <div className={`w-full md:px-[3vw] mb-8 md:mb-0 ${image ? 'md:w-6/12 xl:w-7/12' : 'md:w-5/12 xl:w-5/12'}`}>
            { heading && (
              <div className="w-9/12 md:w-full md:max-w-sm transition-colors ease-in-out duration-500">
                <h2 className="text-xl md:text-2xl xl:text-3xl mb-2 md:mb-4">{heading}</h2>
              </div>
            )}

            { externalLinkUrl && externalLinkText && (
              <div className="mb-4 md:mb-8 xl:mb-12">
                <a target="_blank" rel="noopener noreferrer" className="block uppercase" href={externalLinkUrl}><span className="inline-block underline transition-colors ease-in-out duration-500">{externalLinkText}</span> <span className="text-red dark:text-yellow transition-colors ease-in-out duration-500">→</span></a>
              </div>
            )}

            { image && (
              <div className="will-change bg-off-white dark:bg-off-black transition-colors ease-in-out duration-500 w-10/12 md:w-full mx-auto mb-4 md:mb-0" data-scroll-speed="0.35">
                <ImageWrapper
                  image={image.asset}
                  className="w-full mix-blend-multiply dark:mix-blend-lighten rounded-md will-change"
                  baseWidth={1200}
                  baseHeight={1500}
                  alt={'T-Ray Portrait'}
                />
              </div>
            )}
          </div>
          <div className={`w-full md:px-[3vw] ${image ? 'md:w-6/12 xl:w-5/12' : 'md:w-7/12 xl:w-6/12'}`} data-scroll data-scroll-speed="0.65">
            <div className="text-[19px] md:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8 content transition-colors ease-in-out duration-500 max-w-2xl mx-auto">
              <BlockContent serializers={{ container: ({ children }) => children }} blocks={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}