export default function Rollover({ label, underline, horizontal, animatedUnderline }) {
  return(
    <div className={`relative ${animatedUnderline ? 'py-[2px]' : ''}`}>
      <div className={`transition-transform ease-in-out duration-500 w-full will-change ${ horizontal ? 'md:group-hover:translate-x-[32px] md:group-focus:translate-x-[32px]' : 'md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px]'}`}>
        <span className={`md:block absolute top-0 left-0 ${ horizontal ? 'ml-[-32px]' : 'mt-[-32px]'} ${ underline ? 'underline' : '' }`}>{label}</span>
        <span className={`block ${ underline ? 'underline' : '' }`}>{label}</span>
      </div>

      { animatedUnderline && (
        <div className=" absolute bottom-0 left-0 right-0 h-[1px] bg-current w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-300 delay-150"></div>
      )}
    </div>
  )
}