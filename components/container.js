export default function Container({ children, bleedMobile }) {
  return(
    <div className={`${bleedMobile ? 'px-0 md:px-[30px] w-full' : 'px-[20px] md:px-[30px] w-full'}`}>
      {children}
    </div>
  )
}