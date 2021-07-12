export default function Rollover({ label, underline, horizontal }) {
  return(
    <div className={`transition-transform ease-in-out duration-500 w-full will-change ${ horizontal ? 'md:group-hover:translate-x-[32px] md:group-focus:translate-x-[32px]' : 'md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px]'}`}>
      <span className={`md:block absolute top-0 left-0 ${ horizontal ? 'ml-[-32px]' : 'mt-[-32px]'} ${ underline ? 'underline' : '' }`}>{label}</span>
      <span className={`block ${ underline ? 'underline' : '' }`}>{label}</span>
    </div>
  )
}