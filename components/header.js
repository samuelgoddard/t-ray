import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Container from './container'
import Logo from '@/components/logo'
import PlayerWidget from '@/components/player-widget'
import Rollover from '@/components/rollover'
import Image from 'next/image'
import themeToggleActive from '@/public/images/theme-toggle-active.svg'
import themeToggleActiveDark from '@/public/images/theme-toggle-active-dark.svg'
import { LazyMotion, domAnimation, m } from "framer-motion"

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

export default function Header({currentlyPlaying, route}) {
  const {theme, setTheme} = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <header className="pt-[20px] md:pt-[25px] fixed z-50 top-0 left-0 w-full font-mono">
        <Container>
          <div className="flex flex-wrap">
            <Link href="/">
              <a className="block relative z-10">
                <Logo/>
              </a>
            </Link>

            <div className="mx-auto hidden md:block">
              <nav>
                <ul className="flex items-center">
                  <li>                    
                    <a href="https://www.instagram.com/imreallyatrex" target="_blank" rel="noopener noreferrer" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] px-1 md:px-2 overflow-hidden relative group">
                      <Rollover label="Insta" />
                    </a>
                  </li>
                  <li className="ml-1 md:ml-2">&bull;</li>
                  <li>
                    <a href="https://www.youtube.com/c/ImReallyATRex" target="_blank" rel="noopener noreferrer" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] px-1 md:px-2 my-1 md:my-2 overflow-hidden relative group">
                      <Rollover label="Youtube" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mx-auto hidden md:block">
              <nav>
                <ul className="flex items-center">
                  <li>
                    <Link href="/jam">
                      <a aria-label="Navigate to jam page" className={`ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] pl-9 md:pl-12 md:pr-3 py-1 md:py-2 group relative overflow-hidden rounded-2xl ${route === '/jam' ? 'bg-off-black text-off-white dark:bg-off-white dark:text-off-black transition-colors duration-500 ease-in-out' : ''}`}>
                        <svg className="w-7 inline-block absolute top-0 left-0 md:mt-[10px] xl:mt-[14px] ml-3" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.777c0 3.5 1.558 8.578 6.25 8.578 4.693 0 6.25-5.078 6.25-8.579 0-10.83-12.5-10.83-12.5 0zm5.32 7.955c-3.994 0-4.987-4.686-4.987-7.693 0-10.35 9.973-10.35 9.973 0 0 3.006-.992 7.693-4.986 7.693zM12.501 8.777c0 3.5 1.557 8.578 6.25 8.578 4.692 0 6.249-5.078 6.249-8.579 0-10.83-12.499-10.83-12.499 0zm5.32 7.955c-3.996 0-4.987-4.686-4.987-7.693 0-10.35 9.972-10.35 9.972 0 0 3.006-.992 7.693-4.986 7.693z" fill="currentColor"/><path d="M.333 9.102c0 2.47 1.814 4.36 4.053 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.104-6.075-8.104 0zM12.833 9.102c0 2.47 1.814 4.36 4.052 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.103-6.075-8.103 0z" fill="currentColor"/></svg>
                        <div className="relative overflow-hidden">
                          <Rollover label="Jam Mode" />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="ml-auto relative z-10">
              <button className="block md:hidden w-14 h-auto py-[10px] text-off-black dark:text-off-white" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                <span className="block w-full h-[3px] mb-2 bg-current"></span>
                <span className="block ml-auto w-3/4 h-[3px] bg-current"></span>
              </button>

              <nav className="hidden md:block">
                <ul className="flex">
                  <li>
                    <Link href="/">
                      <a aria-label="Navigate to about page" className={`ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group rounded-2xl ${route === '/' ? 'bg-off-black text-off-white dark:bg-off-white dark:text-off-black transition-colors duration-500 ease-in-out' : ''}`}>
                        <div className="relative overflow-hidden">
                          <Rollover label="Bio" />
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/music">
                      <a aria-label="Navigate to about page" className={`ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 rounded-2xl group ${route === '/music' ? 'bg-off-black text-off-white dark:bg-off-white dark:text-off-black transition-colors duration-500 ease-in-out' : ''}`}>
                        <div className="relative overflow-hidden">
                          <Rollover label="Music" />
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news">
                      <a aria-label="Navigate to about page" className={`ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group rounded-2xl ${route === '/news' ? 'bg-off-black text-off-white dark:bg-off-white dark:text-off-black transition-colors duration-500 ease-in-out' : ''}`}>
                        <div className="relative overflow-hidden">
                          <Rollover label="News" />
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group rounded-2xl">
                        <div className="relative overflow-hidden">
                          <Rollover label="Bag" />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="fixed md:bottom-0 top md:top-auto left-0 z-0 md:z-40 ml-0 mx-auto md:mx-0 md:w-auto md:ml-[30px] pointer mb-[5px] flex md:block justify-center w-full">
              <button
                aria-label="Enable Vibe Mode"
                className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight mx-2 md:mx-0  my-1 md:my-8 relative group"
                onClick={() => setTheme('dark')}
              >
                
                <span className="md:text-upright--rotate block relative overflow-hidden">
                  <div className="block md:hidden">
                    <Rollover label="Vibe" />
                  </div>
                  <div className="hidden md:block">
                    <Rollover label="Vibe" horizontal />
                  </div>
                </span>
                <span className="absolute bottom-0 ml-[0px] md:ml-[-10px] mb-[-23px] md:mb-[-22px] hidden dark:block w-[40px] md:w-[50px] xl:w-[60px] rotate-90 md:rotate-0">
                  <Image
                    src={themeToggleActive}
                    alt="Menu Active State"
                    layout="responsive"
                    className="w-full will-change"
                  />
                </span>
              </button>

              <button
                aria-label="Enable Chill Mode"
                className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight mx-2 md:mx-0 my-1 md:my-8 group"
                onClick={() => setTheme('light')}
              >
                <span className="md:text-upright--rotate block relative overflow-hidden">
                  <div className="block md:hidden">
                    <Rollover label="Chill" />
                  </div>
                  <div className="hidden md:block">
                    <Rollover label="Chill" horizontal />
                  </div>
                </span>
                <span className="absolute bottom-0 ml-[4px] md:ml-[-10px] mb-[-20px] md:mb-[15px] block dark:hidden w-[40px] md:w-[50px] xl:w-[60px] rotate-90 md:rotate-0">
                  <Image
                    src={themeToggleActiveDark}
                    alt="Menu Active State"
                    layout="responsive"
                    className="w-full will-change"
                  />
                </span>
              </button>
            </div>

            <div className="fixed bottom-0 right-0 z-40 mr-[20px] md:mr-[-160px] xl:mr-[-170px] mb-[20px] md:mb-[14.5rem] md:rotate-90 pointer block">
              {/* <PlayerWidget isCurrentlyPlaying={currentlyPlaying} /> */}
            </div>
          </div>

          {/* TESTL {JSON.stringify(route)} */}
        </Container>


        <m.div
          animate={isMenuOpen ? "open" : "closed"}
          variants={variants}
          className={`fixed inset-0 z-50 bg-red py-[20px] md:py-[25px] flex md:hidden opacity-0 ${isMenuOpen ? '' : 'pointer-events-none' }`}
        >
          <button
            className="absolute top-0 right-0 p-2 bg-black rounded-full bg-opacity-20 text-white z-50 block m-[20px]"
            onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <Container>
            <div className="flex flex-col h-full">
              <Link href="/">
                <a className="block relative z-10 mb-auto" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                  <Logo/>
                </a>
              </Link>

              <nav className="mt-auto">
                <ul>
                  <li className="mb-px">
                    <Link href="/">
                      <a aria-label="Navigate to biography page" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        Bio
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <Link href="/music">
                      <a aria-label="Navigate to music page" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        Music
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <Link href="/news">
                      <a aria-label="Navigate to latest news page" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        News
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <Link href="/">
                      <a aria-label="Open Bag" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        Bag
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav className="mt-auto">
                <ul className="flex items-center">
                  <li>
                    <a href="https://www.instagram.com/imreallyatrex" target="_blank" rel="noopener noreferrer" className="text-white uppercase text-[24px]">
                      Insta
                    </a>
                  </li>
                  <li className="text-white mx-2">&bull;</li>
                  <li>
                    <a href="https://www.youtube.com/c/ImReallyATRex" target="_blank" rel="noopener noreferrer" className="text-white uppercase text-[24px]">
                      Youtube
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Container>
        </m.div>
      </header>
    </LazyMotion>
  )
}