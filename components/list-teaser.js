import MetaTeaser from "@/components/meta-teaser"
import Link from "next/link"
import ConditionalWrap from "conditional-wrap"
import Rollover from "@/components/rollover"

export default function ListTeaser({ image, title, date, type, purchaseLinks, video, href, external }) {
  return (
    <div className="flex flex-wrap justify-start py-5 items-center border-b border-current">
      <span className="block w-full lg:w-64 mb-3 lg:mb-0">
        <MetaTeaser date={date} type={type} />
      </span>

      <ConditionalWrap
        condition={!!href}
        wrap={children => (
          <Link href={href}>
            {children}
          </Link>
        )}
      >
        <a {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})} className="block flex-1 mr-auto text-[19px] md:text-[21px] xl:text-[26px] leading-none text-outline uppercase font-display lg:pl-[5vw] pr-4 mb-4 md:mb-0">{title}</a>
      </ConditionalWrap>

      {purchaseLinks && (
        <span className="flex uppercase justify-center space-x-2 text-sm md:text-base ml-auto">
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