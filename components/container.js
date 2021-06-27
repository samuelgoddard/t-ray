export default function Container({ children }) {
  return(
    <div className="px-[5vw] md:px-[3vw] xl:px-[2vw] w-full">
      {children}
    </div>
  )
}