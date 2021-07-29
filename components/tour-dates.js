import MetaTeaser from "@/components/meta-teaser"
import ConditionalWrap from "conditional-wrap"

export default function TourDates({ dates }) {
  return(
    <div className="border-t border-current">
      {dates.map((e,i) => {
        return(
          <ConditionalWrap
            key={i}
            condition={!!e.url && !e.soldOut}
            wrap={children => (
              <a target="_blank" rel="noopener noreferrer" className="block w-full group" href={e.url}>
                {children}
              </a>
            )}
          >
            <div className="flex flex-wrap items-center w-full py-4 md:py-5 border-b border-off-black dark:border-off-white">
              <div className="mr-auto md:mr-0 md:w-[120px] mb-1 md:mb-0 transition-colors ease-in-out duration-500">
                <MetaTeaser date={e.date} type={null} />
              </div>
              <span className="w-full md:w-[155px] xl:w-[220px] block uppercase text-[13px] xl:text-base transition-colors ease-in-out duration-500">{e.venue}</span>
              <span className="md:mr-auto w-full md:w-auto block uppercase font-display text-xl md:text-base lg:text-xl xl:text-2xl text-left group-hover:text-red dark:group-hover:text-yellow transition-colors ease-in-out duration-500">{e.location}</span>
              {e.url ? (
                <>
                { e.soldOut ? (
                  <span className="md:ml-auto w-full md:w-auto block uppercase text-red line-through transition-colors ease-in-out duration-500">Sold out</span>
                ) : (
                  <span className="md:ml-auto w-full md:w-auto block uppercase transition-colors ease-in-out duration-500">Buy <span className="inline-block md:hidden xl:inline">Tickets</span></span>
                )}
                </>
              ) : (
                <></>
              )}
            </div>
          </ConditionalWrap>
        )
      })}
    </div>
  )
}