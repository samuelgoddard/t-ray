import MetaTeaser from "@/components/meta-teaser"
import Link from "next/link"
import ConditionalWrap from "conditional-wrap"
import Rollover from "@/components/rollover"
import ImageWrapper from "./image-wrapper"
import { m } from "framer-motion"
import { reveal } from "@/helpers/transitions"

export default function ListTeaser({ image, title, date, type, purchaseLinks, href, external }) {
  return (
    <div className="mt-[26px] md:mt-5 pb-5 border-b border-current">
      <div className="flex flex-wrap justify-start items-center">
        <span className="block w-full lg:w-64 mb-3 lg:mb-0 transition-colors ease-in-out duration-500">
          <MetaTeaser marqueeForce date={date} type={type} />
        </span>

        <ConditionalWrap
          condition={!!href}
          wrap={children => (
            <Link href={href}>
              {children}
            </Link>
          )}
        >
          <a {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})} className={`block flex-1 mr-auto text-[19px] md:text-[21px] xl:text-[23px] leading-none uppercase font-display lg:pl-[3vw] pr-4 mb-3 md:mb-0 relative ${ href ? 'group hover:text-red transition-colors ease-in-out duration-500' : 'transition-colors ease-in-out duration-500'}`}>
            <span className="inline-block relative w-auto">
              { image && (
                <div className="absolute top-0 right-0 w-[190px] h-[250px] mr-[-10%] mt-[-17%] rounded-lg opacity-0 rotate-0 scale-75 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-6 ease-in-out duration-300 transition z-[0] hidden md:block">
                  <div className="absolute w-full h-full rounded-lg overflow-hidden origin-center z-[0] opacity-50 animate-float">
                    <ImageWrapper
                      image={image}
                      className="will-change w-full h-full object-cover object-center"
                      baseWidth={720}
                      baseHeight={720}
                      fill={true}
                      alt={'T-Ray Album'}
                    />
                  </div>
                </div>
              )}
              <span className="block relative z-[10]">
                <div className="overflow-hidden relative">
                  <m.div variants={reveal}>
                    {title}
                  </m.div>
                </div>
              </span>
            </span>
          </a>
        </ConditionalWrap>

        {purchaseLinks && (
          <span className="flex uppercase md:justify-center space-x-2 text-sm md:text-base md:ml-auto w-full md:w-auto">
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
      </div>
    </div>
  )
}