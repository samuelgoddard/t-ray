export default function MetaTeaser({ date, type, latest}) {
  let d = new Date(date);
  let ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  return(
    <span className="inline-block rounded-full border border-current font-mono uppercase px-3 py-1 text-center mx-auto text-xs">
      <span className="flex space-x-3">
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
    </span>
  )
}