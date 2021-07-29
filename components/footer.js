import Link from 'next/link'
import Rollover from '@/components/rollover'
// import { m } from 'framer-motion'
// import { reveal } from '@/helpers/transitions'

export default function Footer({ noPad }) {  
  return (
    <>
      {/* <span className="text-[8vw] leading-[0.82] text-red will-change relative block font-display uppercase pb-4 mb-6 md:mb-12 xl:mb-14 border-b border-red">Got Email?</span> */}

      <form action="https://Imreallyatrex.us6.list-manage.com/subscribe/post?u=289394a8587c1f294da11e765&amp;id=cfeafc48e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate relative" target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL" className="sr-only">Newsletter Signup</label>
          <div className="overflow-hidden relative mb-6 md:mb-12 xl:mb-14">
            {/* <m.div variants={reveal}> */}
              <input type="email" name="EMAIL" className="email text-[8vw] leading-[0.82] text-red will-change relative font-display uppercase border-b border-off-black dark:border-off-white placeholder-current bg-transparent hover:border-b-red dark:hover:border-b-red focus:border-b-red dark:focus:border-b-red focus:outline-none block w-full pr-[8vw] transition-colors ease-in-out duration-300 hover:placeholder-shown:text-opacity-20 text-opacity-100 mb-0 pb-0" id="mce-EMAIL" placeholder="Got Email?" required />
            {/* </m.div> */}
          </div>
          
          <div className="sr-only" aria-hidden="true">
            <input type="text" name="b_289394a8587c1f294da11e765_cfeafc48e4" tabIndex="-1" defaultValue="" />
          </div>

          <div className="clear">
            <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button absolute bottom-0 right-0 bg-yellow text-off-black p-1 md:p-3 uppercase mb-[25px] md:mb-[3%] md:mr-[4vw]" />
          </div>
        </div>
      </form>

      <div className="w-10/12 md:w-8/12">
        <p className="text-[22px] md:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-[1.2] tracking-tight mb-5 md:mb-8">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
      </div>
      
      <div className="flex lg:mb-[18vw] pt-[50px] md:pt-[120px] xl:pt-[200px]">
        <div className="w-full">
          <footer className={`mb-5 md:mb-10 ${noPad ? '' : 'lg:mb-[185px]'}`}>
            <div className="flex flex-wrap font-mono text-base md:text-lg">
              <span className="block">&copy; { new Date().getFullYear() }</span>
              <nav className="ml-auto block">
                <ul className="flex space-x-6">
                  <li>
                    <a className="block group" href="mailto:press@imreallyatrex.com">
                      <div className="overflow-hidden relative">
                        <Rollover label="Press" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <Link href="/terms">
                      <a className="block group">
                        <div className="overflow-hidden relative">
                          <Rollover label="Terms &amp; Conditions" />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}