import Link from 'next/link'
import Rollover from '@/components/rollover'

export default function Footer() {  
  return (
    <>
      <div className="md:w-11/12 2xl:w-11/12 mx-auto">
        <form action="https://Imreallyatrex.us6.list-manage.com/subscribe/post?u=289394a8587c1f294da11e765&amp;id=cfeafc48e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate relative" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <label htmlFor="mce-EMAIL" className="sr-only">Newsletter Signup</label>
            <div className="overflow-hidden relative mb-6 md:mb-12 xl:mb-14">
              <input type="email" name="EMAIL" className="email text-[8vw] leading-[0.82] text-red will-change relative font-display uppercase border-b border-off-black dark:border-off-white placeholder-current bg-transparent hover:border-b-red dark:hover:border-b-red focus:border-b-red dark:focus:border-b-red focus:outline-none block w-full pr-[8vw] md:pr-[10vw] transition-colors ease-in-out duration-500 hover:placeholder-shown:text-opacity-20 pb-[6px] md:pb-0 text-opacity-100 mb-0" id="mce-EMAIL" placeholder="Got Email?" required />
            </div>
            
            <div className="sr-only" aria-hidden="true">
              <input type="text" name="b_289394a8587c1f294da11e765_cfeafc48e4" tabIndex="-1" defaultValue="" />
            </div>

            <div className="clear">
              <button type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="absolute bottom-0 right-0 text-off-black dark:text-off-white hover:text-red dark:hover:text-red uppercase mb-[2.8%] md:mb-[2%] xl:mb-[3%] md:mr-[1vw] transition-colors ease-in-out duration-500 w-[9.5vw] md:w-[7vw] xl:w-[6.5vw] h-[9.5vw] md:h-[8vw] xl:h-[6.5vw] block focus:border-none">
                <svg className="w-full h-full dark:bg-off-white dark:md:bg-transparent bg-off-black md:bg-transparent text-off-white md:text-off-black transition ease-in-out duration-500 dark:text-off-black dark:md:text-off-white rounded-full" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="M87 44.5l-3.759 17.79-10.626 14.715-15.655 9.094L38.98 88l-17.192-5.62L8.353 70.21 1 53.594V35.406l7.353-16.615L21.788 6.62 38.98 1l17.978 1.901 15.656 9.094L83.241 26.71 87 44.5v0z" stroke="currentColor"/><path d="M50.715 37l-1.56 1.513 6.62 6.417H27v2.14h28.775l-6.62 6.417L50.715 55 60 46l-9.285-9z" fill="currentColor"/></svg>
              </button>
            </div>
          </div>
        </form>

        <div className="w-10/12 md:w-8/12">
          <p className="text-[18px] md:text-[28px] lg:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-[1.2] tracking-tight mb-5 md:mb-8 transition-colors ease-in-out duration-500">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
        </div>

        <div className="flex lg:mb-[18vw] pt-[50px] md:pt-[120px] xl:pt-[200px]">
          <div className="w-full">
            <footer className={`mb-5 md:mb-6`}>
              <div className="flex flex-wrap  items-center font-mono text-[13px] md:text-lg">
                <span className="block mt-[-2px]">&copy; { new Date().getFullYear() }</span>
                <nav className="ml-auto block">
                  <ul className="flex space-x-1 md:space-x-2">
                    <li>
                      <a className="block group" href="mailto:mumstrongent@gmail.com">
                        <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                          <Rollover animatedUnderline label="Press" />
                        </div>
                      </a>
                    </li>
                    <li>
                      <span className="text-[18px] block mt-[-2px] md:mt-[2px]">&bull;</span>
                    </li>
                    <li>
                      <Link href="/terms">
                        <a className="block group">
                          <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                            <Rollover animatedUnderline label="Terms" />
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <span className="text-[18px] block mt-[-2px] md:mt-[2px]">&bull;</span>
                    </li>
                    <li>
                      <a href="https://heycusp.com/" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                          <Rollover animatedUnderline label="By CUSP" />
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}