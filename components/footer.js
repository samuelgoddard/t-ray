export default function Footer({ noPad }) {
  return (
    <>
      <span className="text-[8vw] leading-[0.82] text-red will-change relative block font-display uppercase pb-4 mb-6 md:mb-12 xl:mb-14 border-b border-red">Got Email?</span>

      <div className="w-10/12 md:w-8/12">
        <p className="text-[22px] md:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-[1.2] tracking-tight mb-5 md:mb-8">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
      </div>
      
      <div className="flex lg:mb-[18vw] pt-[50px] md:pt-[100px] xl:pt-[180px]">
        <div className="w-full">
          <footer className={`mb-5 md:mb-10 ${noPad ? '' : 'lg:mb-[185px]'}`}>
            <div className="flex flex-wrap font-mono text-base md:text-lg">
              <span className="block">&copy; { new Date().getFullYear() }</span>
              <nav className="ml-auto block">
                <ul className="flex space-x-6">
                  <li>Press</li>
                  <li>Terms</li>
                  <li>Privacy</li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}