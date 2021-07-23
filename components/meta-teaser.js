export default function MetaTeaser({ date, type, latest, marqueeForce}) {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return(
    <span className="inline-block rounded-full border border-current font-mono uppercase px-3 py-1 text-center mx-auto text-xs relative overflow-hidden">
      <span className={`flex space-x-3 meta-teaser__text ${ marqueeForce ? 'opacity-0' :'opacity-100'}`}>
        <span>{`${da}.${mo}.${ye}`}</span>
        <span>&bull;</span>
        <span>{type}</span>
        { latest && (
          <>
            <span>&bull;</span>
            <span className="relative">
              <span className="relative z-10">Latest Release</span>
              <span className="absolute transition-colors ease-in-out duration-300 top-0 left-0 w-full h-2 rounded-full bg-yellow dark:bg-[#8C223F] mt-[4px] z-0"></span>
            </span>
          </>
        )}
      </span>

      <div className={`block w-full whitespace-nowrap absolute top-0 left-0 right-0 px-3 mt-[4px] meta-teaser__ticker ${ marqueeForce ? 'opacity-100' :'opacity-0'}`}>
        <div className="relative flex overflow-x-hidden will-change">
          <div className="motion-safe:animate-marquee whitespace-nowrap flex items-center">
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
          </div>

          <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap flex items-center">
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
            <span>{type}</span>
            <span className="mx-3">&bull;</span>
            <span>{`${da}.${mo}.${ye}`}</span>
            <span className="mx-3">&bull;</span>
          </div>
        </div>
      </div>


    </span>
  )
}