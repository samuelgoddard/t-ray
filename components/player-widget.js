export default function PlayerWidget() {
  return (
    <div className="bg-yellow rounded-full p-3 px-6 max-w-[450px]">
      <span className="uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight dark:text-off-black">
        <div className="relative flex overflow-x-hidden">
          <div className="motion-safe:animate-marquee whitespace-nowrap">
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
          </div>

          <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap">
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
          </div>
        </div>
      </span>
    </div>
  )
}
