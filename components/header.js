import { useRef, useState, useContext } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Container from './container'
import Logo from '@/components/logo'
import PlayerWidget from '@/components/player-widget'
import Rollover from '@/components/rollover'
import Image from 'next/image'
import themeToggleActive from '@/public/images/theme-toggle-active.svg'
import themeToggleActiveDark from '@/public/images/theme-toggle-active-dark.svg'
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion"
import ModalTray from '@/components/modal-tray'
import CartTray from '@/components/cart-tray'
import { Context } from '@/context/state'
import { useCartContext } from '@/context/store'
import { isMobile } from 'react-device-detect'
import { IntroContext } from '@/context/intro'

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
}

const revealVariants = {
  initial: { y: '100%' },
  open: { y: 0 },
  closed: { y: '100%' },
}

const strokeAnimate = {
  initial: { pathLength: 0 },
  open: { pathLength: 1 },
  closed: { pathLength: 0 },
}

export default function Header({route}) {
  const {theme, setTheme} = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const modalTrayBag = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);
  const [cart, checkoutUrl] = useCartContext()
  const [globalMusicPlaying, setGlobalMusicPlaying] = useContext(Context)

  const stopGlobalMusic = () => {
    if (globalMusicPlaying == true) {
      setGlobalMusicPlaying(false);
    }
  }

  return (
    <LazyMotion features={domAnimation}>
      <header className="pt-[20px] md:pt-[25px] fixed z-50 top-0 left-0 w-full font-mono bg-transparent ">
        <Container>
          <div className="flex flex-wrap">
            <Link href="/">
              <a className="block relative z-10">
                <Logo/>
              </a>
            </Link>

            <div className="mx-auto hidden lg:block">
              <nav>
                <ul className="flex items-center">
                  <li>                    
                    <a href="https://www.instagram.com/imreallyatrex" target="_blank" rel="noopener noreferrer" className="uppercase block text-[16px] md:text-[17px] xl:text-[22px] mx-1 md:mx-2 overflow-hidden relative group transition-colors ease-in-out duration-500 dark:text-off-white text-off-black">
                      <Rollover animatedUnderline label="Insta" />
                    </a>
                  </li>
                  <li className="ml-1 md:ml-2 transition-colors ease-in-out duration-500 dark:text-off-white text-off-black">&bull;</li>
                  <li>
                    <a href="https://www.youtube.com/c/ImReallyATRex" target="_blank" rel="noopener noreferrer" className="uppercase block text-[16px] md:text-[17px] xl:text-[22px] mx-1 md:mx-2 my-1 md:my-2 overflow-hidden relative group transition-colors ease-in-out duration-500 dark:text-off-white text-off-black">
                      <Rollover animatedUnderline label="Youtube" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="mx-auto hidden md:block">
              <nav>
                <ul className="flex items-center">
                  <li>
                    <Link href="/jam" prefetch={false}>
                      <a onClick={() => stopGlobalMusic() } aria-label="Navigate to jam page" className={`ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] pl-9 md:pl-12 md:pr-3 py-1 md:py-2 group relative overflow-hidden rounded-2xl transition ease-in-out duration-500 text-off-black dark:text-off-white ${route === '/jam' ? 'scale-0' : 'scale-100'}`}>
                        <svg className="w-7 inline-block absolute top-0 left-0 md:mt-[10px] z-10 xl:mt-[14px] ml-3" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.777c0 3.5 1.558 8.578 6.25 8.578 4.693 0 6.25-5.078 6.25-8.579 0-10.83-12.5-10.83-12.5 0zm5.32 7.955c-3.994 0-4.987-4.686-4.987-7.693 0-10.35 9.973-10.35 9.973 0 0 3.006-.992 7.693-4.986 7.693zM12.501 8.777c0 3.5 1.557 8.578 6.25 8.578 4.692 0 6.249-5.078 6.249-8.579 0-10.83-12.499-10.83-12.499 0zm5.32 7.955c-3.996 0-4.987-4.686-4.987-7.693 0-10.35 9.972-10.35 9.972 0 0 3.006-.992 7.693-4.986 7.693z" fill="currentColor"/><path d="M.333 9.102c0 2.47 1.814 4.36 4.053 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.104-6.075-8.104 0zM12.833 9.102c0 2.47 1.814 4.36 4.052 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.103-6.075-8.103 0z" fill="currentColor"/></svg>
                        <div className="relative overflow-hidden z-10">
                          <Rollover animatedUnderline underlineDotted label="Jam Mode" />
                        </div>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="ml-auto relative z-10">
              <button className="block md:hidden w-14 h-auto py-[10px] text-off-black dark:text-off-white relative" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                <span className="block w-full h-[3px] mb-2 bg-current"></span>
                <span className="block ml-auto w-3/4 h-[3px] bg-current"></span>

                { cart?.length > 0 && (
                  <span
                  className={`absolute top-0 right-0 mt-[-5px] mr-[-10px] bg-red text-off-white dark:text-off-black text-[13px] w-[20px] h-[20px] flex items-center justify-center rounded-full opacity-0 transition ease-in-out duration-500 font-sans z-10 ${cart.length > 0 ? 'opacity-100' : ''}`}>{cart.length}</span>
                )}
              </button>

              <nav className="hidden md:block">
                <ul className="flex">
                  <li>
                    <Link href="/">
                      <a aria-label="Navigate to biography page" className={`ml-2 md:ml-3 xl:ml-4 uppercase transition-colors ease-in-out duration-500 dark:text-off-white text-off-black block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group rounded-2xl relative ${route === '/' ? 'text-off-white dark:text-off-black ' : ''}`}>
                        <div className="relative overflow-hidden z-10">
                          <Rollover animatedUnderline={route != '/'} underlineDotted label="Bio" />
                        </div>
                        <div className={`active-pill absolute inset-0 z-0 transition ease-in-out duration-500 ${route === '/' ? 'scale-[1.01] opacity-100' : 'opacity-0 scale-0' }`}></div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/feed">
                      <a aria-label="Navigate to the latest feed" className={`ml-2 md:ml-3 xl:ml-4 uppercase transition-colors ease-in-out duration-500 dark:text-off-white text-off-black block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group relative rounded-2xl ${route.includes('/feed') ? 'text-off-white dark:text-off-black ' : ''}`}>
                        <div className="relative overflow-hidden z-10">
                          <Rollover animatedUnderline={!route.includes('/feed')} underlineDotted label="Feed" />
                        </div>
                        <div className={`active-pill absolute inset-0 z-0 transition ease-in-out duration-500 ${route.includes('/feed') ? 'scale-[1.01] opacity-100' : 'opacity-0 scale-0' }`}></div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/music">
                      <a aria-label="Navigate to music page" className={`ml-2 md:ml-3 xl:ml-4 uppercase transition-colors ease-in-out duration-500 dark:text-off-white text-off-black block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 rounded-2xl group relative ${route === '/music' ? 'text-off-white dark:text-off-black ' : ''}`}>
                        <div className="relative overflow-hidden z-10">
                          <Rollover animatedUnderline={route != '/music'} underlineDotted label="Music" />
                        </div>
                        <div className={`active-pill absolute inset-0 z-0 transition ease-in-out duration-500 ${route === '/music' ? 'scale-[1.01] opacity-100' : 'opacity-0 scale-0' }`}></div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/store">
                      <a aria-label="Navigate to store page" className={`ml-2 md:ml-3 xl:ml-4 uppercase transition-colors ease-in-out duration-500 dark:text-off-white text-off-black block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 rounded-2xl group relative ${route === '/store' ? 'text-off-white dark:text-off-black ' : ''}`}>
                        <div className="relative overflow-hidden z-10">
                          <Rollover animatedUnderline={route != '/store'} underlineDotted label="Store" />
                        </div>
                        <div className={`active-pill absolute inset-0 z-0 transition ease-in-out duration-500 ${route === '/store' ? 'scale-[1.01] opacity-100' : 'opacity-0 scale-0' }`}></div>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <button aria-label="Open Bag" onClick={() => modalTrayBag.current.open()}>
                      <span className="ml-2 md:ml-3 xl:ml-4 uppercase transition ease-in-out duration-500 dark:text-off-white text-off-black block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2 group rounded-2xl relative">
                        { cart?.length > 0 && (
                          <span className={`absolute top-0 right-0 mt-[-4px] mr-[-8px] bg-red text-off-white dark:text-off-black text-[13px] w-[20px] h-[20px] flex items-center justify-center rounded-full opacity-0 transition ease-in-out duration-300 ${cart.length > 0 ? 'opacity-100' : ''}`}>{cart.length}</span>
                        )}
                        <div className="relative overflow-hidden">
                          <Rollover animatedUnderline underlineDotted label="Bag" />
                        </div>
                      </span>
                    </button>

                    <ModalTray ref={modalTrayBag}>
                      <CartTray cart={cart} checkoutUrl={checkoutUrl} />
                    </ModalTray>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={`fixed md:bottom-0 top md:top-auto left-0 z-0 md:z-40 ml-0 mx-auto md:mx-0 md:w-auto md:ml-[30px] pointer mb-[5px] flex md:block justify-center w-full transition-opacity ease-in-out duration-500 delay-300 ${ route.includes('/products') ? 'opacity-0 pointer-events-none' : '' }`}>
              <button
                aria-label="Enable Vibe Mode"
                className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight mx-2 md:mx-0  my-1 md:my-8 relative group"
                onClick={() => setTheme('dark')}
              >
                
                <span className="md:text-upright--rotate block relative overflow-hidden">
                  <div className="block md:hidden dark:text-off-white text-off-black transition-colors ease-in-out duration-500">
                    <Rollover label="Vibe" />
                  </div>
                  <div className="hidden md:block dark:text-off-white text-off-black transition-colors ease-in-out duration-500">
                    <Rollover label="Vibe" horizontal />
                  </div>
                </span>
                <span className="absolute bottom-0 ml-[-5px] md:ml-[-17px] mb-[-24px] block md:mb-[-24px] w-[50px] md:w-[68px] xl:w-[75px] rotate-90 md:rotate-0 opacity-100">
                  <AnimatePresence>
                    { theme === 'dark' && (
                      <m.svg className="w-full text-red opacity-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <m.path 
                          d="M77 500.19s6.88-370.59 190.89-447.6c44.2-18.5 99.09-4.66 141.75 31.21 54.27 45.63 121 193.58 101.67 381.14 0 0-18 190.87-121 260s-215 22.82-283.32-132.35C35.77 431 72.54 245.47 88.32 190.26 106.94 125.08 199.38-65.72 343 48.63c142.14 113.15 179.78 507.92 66.22 677.63q-3.3 4.92-6.43 10c-12.6 20.3-68.1 100.76-149.57 88.54C149.81 809.23 82.33 644.51 77 500.19z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                          initial={"initial"}
                          animate={"open"}
                          exit={"closed"}
                          variants={strokeAnimate}
                          transition={{
                            delay: introContext ? 0 : 1.5,
                            duration: 1,
                            ease: 'easeInOut'
                          }}
                        />
                      </m.svg>
                    )}
                  </AnimatePresence>
                </span>
              </button>

              <button
                aria-label="Enable Chill Mode"
                className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight mx-2 md:mx-0 my-1 md:my-8 group"
                onClick={() => setTheme('light')}
              >
                <span className="md:text-upright--rotate block relative overflow-hidden">
                  <div className="block md:hidden dark:text-off-white text-off-black transition-colors ease-in-out duration-500">
                    <Rollover label="Chill" />
                  </div>
                  <div className="hidden md:block dark:text-off-white text-off-black transition-colors ease-in-out duration-500">
                    <Rollover label="Chill" horizontal />
                  </div>
                </span>
                <span className="absolute bottom-0 ml-[0px] md:ml-[-20px] mb-[-21px] md:mb-[10px] block w-[50px] md:w-[72px] xl:w-[80px] rotate-90 md:rotate-0">
                  <AnimatePresence>
                    { theme === 'light' && (
                      <m.svg className="w-full text-off-black opacity-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 595.28 841.89">
                        <m.path 
                          d="M77 500.19s6.88-370.59 190.89-447.6c44.2-18.5 99.09-4.66 141.75 31.21 54.27 45.63 121 193.58 101.67 381.14 0 0-18 190.87-121 260s-215 22.82-283.32-132.35C35.77 431 72.54 245.47 88.32 190.26 106.94 125.08 199.38-65.72 343 48.63c142.14 113.15 179.78 507.92 66.22 677.63q-3.3 4.92-6.43 10c-12.6 20.3-68.1 100.76-149.57 88.54C149.81 809.23 82.33 644.51 77 500.19z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          strokeWidth="6"
                          initial={"initial"}
                          animate={"open"}
                          exit={"closed"}
                          variants={strokeAnimate}
                          transition={{
                            duration: 1,
                            ease: 'easeInOut'
                          }}
                        />
                      </m.svg>
                    )}
                  </AnimatePresence>
                </span>
              </button>
            </div>

            { !isMobile && (
              <div className={`fixed bottom-0 right-0 z-40 mr-[20px] md:mr-[-120px] xl:mr-[-125px] mb-[20px] md:mb-[11.5rem] md:rotate-90 pointer transition-opacity ease-in-out duration-500 delay-300 ${ route.includes('/products') ? 'opacity-0 pointer-events-none' : '' }`}>
                <PlayerWidget />
                {/* <PlayerWidget isCurrentlyPlaying={currentlyPlaying} /> */}
              </div>
            )}
          </div>
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
                        <span className="block relative overflow-hidden">
                          <m.span
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={revealVariants}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                            className="block"
                          >Bio</m.span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <Link href="/feed">
                      <a aria-label="Navigate to the latest feed" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        <span className="block relative overflow-hidden">
                          <m.span
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={revealVariants}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                            className="block"
                          >Feed</m.span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <Link href="/music">
                      <a aria-label="Navigate to music page" className="text-yellow font-display leading-none uppercase text-[55px]" onClick={() => setMenuOpen(isMenuOpen => !isMenuOpen)}>
                        <span className="block relative overflow-hidden">
                          <m.span
                            animate={isMenuOpen ? "open" : "closed"}
                            variants={revealVariants}
                            transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                            className="block"
                          >Music</m.span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="mb-px">
                    <button aria-label="Open Bag" className="text-yellow font-display leading-none uppercase text-[55px] relative focus:border-none" onClick={() => modalTrayBag.current.open()}>
                      <span className="block relative overflow-hidden">
                        <m.span
                          animate={isMenuOpen ? "open" : "closed"}
                          variants={revealVariants}
                          transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                          className="block"
                        >Bag</m.span>
                      </span>

                      { cart?.length > 0 && (
                        <m.span
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={variants}
                        transition={{ delay: 0.08, duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
                        className={`absolute top-0 right-0 mt-[2px] mr-[-20px] bg-blue text-off-white text-[13px] w-[20px] h-[20px] flex items-center justify-center rounded-full opacity-0 transition ease-in-out duration-300 font-sans z-10 ${cart.length > 0 ? 'opacity-100' : ''}`}>{cart.length}</m.span>
                      )}
                    </button>
                  </li>
                </ul>
              </nav>

              <nav className="mt-auto">
                <ul className="flex items-center">
                  <li>
                    <a href="https://www.instagram.com/imreallyatrex" target="_blank" rel="noopener noreferrer" className="text-white uppercase text-[20px]">
                      <span className="block relative overflow-hidden">
                        <m.span
                          animate={isMenuOpen ? "open" : "closed"}
                          variants={revealVariants}
                          transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                          className="block"
                        >Insta</m.span>
                      </span>
                    </a>
                  </li>
                  <li className="text-white mx-2">
                    <span className="block relative overflow-hidden">
                      <m.span
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={revealVariants}
                        transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                        className="block"
                      >&bull;</m.span>
                    </span>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/ImReallyATRex" target="_blank" rel="noopener noreferrer" className="text-white uppercase text-[20px]">
                    <span className="block relative overflow-hidden">
                        <m.span
                          animate={isMenuOpen ? "open" : "closed"}
                          variants={revealVariants}
                          transition={{ delay: 0.1, duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
                          className="block"
                        >Youtube</m.span>
                      </span>
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