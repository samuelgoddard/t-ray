import '@/styles/main.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence, LazyMotion, m, domAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '@/components/header'
import SEO from '@/helpers/seo.config'
import { DefaultSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { Context } from '@/context/state';
import { JamContext } from '@/context/jam';
import { CartProvider } from '@/context/store'
import CursorMotion from '@/components/cursor-motion'
import Div100vh from 'react-div-100vh'
import { IntroContext } from '@/context/intro'
import * as gtag from '@/helpers/gtag'

const introEnd = {
  visible: { opacity: 0 },
  hidden: { opacity: '100%' }
}

const innerReveal = {
  visible: { x: '100%' },
  hidden: { x: 0 }
}

const reveal = {
  visible: {y: 0 },
  hidden: { y: '100%' }
}

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [introContext, setIntroContext] = useState(false);
  const [globalMusicPlaying, setGlobalMusicPlaying] = useState(false);
  const [globalFooterInView, setGlobalFooterInView] = useState(false);
  const [jamAccepted, setJamAccepted] = useState(false);
  
  const [isDrumsLoaded, setIsDrumsLoaded] = useState(false)
  const [isBassLoaded, setIsBassLoaded] = useState(false)
  const [isGuitarLoaded, setIsGuitarLoaded] = useState(false)
  const [isVoxLoaded, setIsVoxLoaded] = useState(false)
  const [isKeysLoaded, setIsKeysLoaded] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</
      
      div></> }
      <DefaultSeo {...SEO} />

      <CartProvider>
        <IntroContext.Provider value={[introContext, setIntroContext]}>
          <Context.Provider 
            value={
              [globalMusicPlaying, setGlobalMusicPlaying],
              [jamAccepted, setJamAccepted],
              [globalFooterInView, setGlobalFooterInView]
            }
          >
            <JamContext.Provider
              value={
                [isDrumsLoaded, setIsDrumsLoaded],
                [isBassLoaded, setIsBassLoaded],
                [isGuitarLoaded, setIsGuitarLoaded],
                [isVoxLoaded, setIsVoxLoaded],
                [isKeysLoaded, setIsKeysLoaded]
              }
            >
              <div className={`text-off-black bg-off-white dark:bg-off-black dark:text-off-white transition-colors ease-in-out duration-500 fixed inset-0 w-full h-full z-0`}></div>

              <div className={`transition-opacity ease-in-out duration-500 ${router.asPath === '/jam' ? 'opacity-0 pointer-events-none' : 'opacity-100 '}`}>
                <Header route={router.asPath} />
              </div>

              {/* <div className="fixed bottom-0 right-0 bg-white text-black font-mono text-[12px] p-2 z-[5000]">
                <span className="block">Intro State... {JSON.stringify(jamAccepted)}</span>
              </div> */}

              {/* INTRO START */}
              <LazyMotion features={domAnimation}>
                { !introContext && router.asPath == '/' && (
                  <m.div 
                    initial="hidden"
                    animate="visible"
                    variants={introEnd}
                    transition={{ delay: 2.25, duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
                    className="bg-transparent dark:bg-transparent fixed inset-0 z-[100] pointer-events-none flex flex-col p-[14px] md:p-[20px] opacity-90"
                  >
                    <Div100vh className="fixed inset-0 z-[100] pointer-events-none flex flex-col p-[14px] md:p-[20px]">
                      <div className="fixed inset-0 w-full h-full z-20">
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={innerReveal}
                          className="h-[20vh] w-full bg-off-white"
                          transition={{ delay: 1, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        ></m.div>
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={innerReveal}
                          className="h-[20vh] w-full bg-off-white"
                          transition={{ delay: 1.1, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        ></m.div>
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={innerReveal}
                          className="h-[20vh] w-full bg-off-white"
                          transition={{ delay: 1.2, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        ></m.div>
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={innerReveal}
                          className="h-[20vh] w-full bg-off-white"
                          transition={{ delay: 1.25, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        ></m.div>
                        <m.div
                          initial="hidden"
                          animate="visible"
                          variants={innerReveal}
                          className="h-[20vh] w-full bg-off-white"
                          transition={{ delay: 1.3, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                        ></m.div>
                      </div>
                      <div className={`fixed top-0 left-0 right-0 w-full z-30 flex flex-wrap justify-center mt-5 `}>
                        <div className="relative pt-[80px] md:pt-[120px] xl:pt-[140px]">
                          <span
                            // initial="hidden"
                            // animate="visible"
                            // variants={colorSwap}
                            // transition={{ delay: 1, duration: 1, ease: [0.83, 0, 0.17, 1] }}
                            className={`text-[12.5vw] leading-[0.82] text-center break-all will-change relative text-red p-0 mb-6 font-display uppercase bg-blend-difference`}>
                            <span className="block overflow-hidden relative">
                              <m.span 
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                className="block"
                                transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                              >
                                ImReally
                              </m.span>
                            </span>
                            <span className="block overflow-hidden relative">
                              <m.span 
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                className="block"
                                transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                              >
                                A Trex
                              </m.span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </Div100vh>
                  </m.div>
                )}

                <CursorMotion/>
              </LazyMotion>
              {/* Intro End */}

              <div className="dark:text-off-white text-off-black relative z-10">
                <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                  <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
              </div>
            </JamContext.Provider>
          </Context.Provider>
        </IntroContext.Provider>
      </CartProvider>
    </ThemeProvider>
  )
}