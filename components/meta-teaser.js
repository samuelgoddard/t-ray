export default function MetaTeaser({ date, type}) {
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
      </span>
    </span>
  )
}