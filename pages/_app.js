import '@/styles/main.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '@/components/header'
import SEO from '@/helpers/seo.config'
import { DefaultSeo } from 'next-seo'
// import japaneseCharacters from '@/public/images/japanese-characters.svg'
import Image from 'next/image'
import { useState, useContext } from 'react'
// import Cursor from '@/components/cursor'
import { Context } from '@/context/state';
import { JamContext } from '@/context/jam';
import { CartProvider } from '@/context/store'
import CursorMotion from '@/components/cursor-motion'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isIntroAccepted, setIntroAccepted] = useState(false);
  const [globalMusicPlaying, setGlobalMusicPlaying] = useState(false);
  const [globalFooterInView, setGlobalFooterInView] = useState(false);
  const [jamAccepted, setJamAccepted] = useState(false);
  
  const [isDrumsLoaded, setIsDrumsLoaded] = useState(false)
  const [isBassLoaded, setIsBassLoaded] = useState(false)
  const [isGuitarLoaded, setIsGuitarLoaded] = useState(false)
  const [isVoxLoaded, setIsVoxLoaded] = useState(false)
  const [isKeysLoaded, setIsKeysLoaded] = useState(false)

  return (
    <ThemeProvider attribute="class">
      { pageProps.preview && <><div className={'fixed bottom-0 w-full p-2 bg-red opacity-75 text-white justify-center flex z-50 uppercase font-medium'}>! Preview Mode Enabled - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click Here To Exit</a> !</
      
      div></> }
      <DefaultSeo {...SEO} />

      <CartProvider>
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
              {/* <div className="fixed bottom-0 left-[40vw] z-[10000] bg-white text-black text-[12px] p-2">
                
                <span className="block">Drums Loaded: {JSON.stringify(isDrumsLoaded)}</span>
                <span className="block">Bass Loaded: {JSON.stringify(isBassLoaded)}</span>
                <span className="block">Guitar Loaded: {JSON.stringify(isGuitarLoaded)}</span>
                <span className="block">Vox Loaded: {JSON.stringify(isVoxLoaded)}</span>
                <span className="block">Keys Loaded: {JSON.stringify(isKeysLoaded)}</span>
              </div> */}

              <div className={`transition-opacity ease-in-out duration-500 ${router.asPath === '/jam' ? 'opacity-0 pointer-events-none' : 'opacity-100 '}`}>
                <Header currentlyPlaying={isIntroAccepted} route={router.asPath} />
              </div>

              {/* <div className="fixed bottom-0 right-0 bg-white text-black font-mono text-[12px] p-2 z-50">
                <span className="block">Jam mode loaded: {JSON.stringify(globalMusicPlaying)}</span>
                <span className="block">Global music playing: {JSON.stringify(globalJamModeAccepted)}</span>
              </div> */}

              {/* { !isIntroAccepted && (
                <div className={`bg-off-black text-white fixed z-50 inset-0 w-full flex items-center justify-center transition ease-in-out duration-500 h-full`}>
                  <button aria-label="Enter Site" className="block" onClick={() => toggleIntroAccepted() }>
                    <div className="relative">
                      <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-10vw] z-[50]">
                        <div className="w-[15vw] md:w-[14vw] opacity-70 dark:opacity-40 transition-opacity duration-500 ease-in-out" data-scroll data-scroll-speed="0.35">
                          <Image
                            src={japaneseCharacters}
                            alt="Placeholder"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>
                      <div className="relative z-[60]">
                        <span className="block uppercase text-[7vw] leading-[0.82] text-white text-center break-all will-change relative font-bold font-display mb-5">ImReallyATrex</span>
                        <span className="block uppercase text-[20px] leading-[0.82] text-white text-center break-all will-change relative font-bold font-display">Click To Enter</span>
                      </div>
                    </div>
                  </button>
                </div>
              )} */}

              <CursorMotion/>
              <div className="dark:text-off-white text-off-black relative z-10">
                <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                  <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
              </div>
          </JamContext.Provider>
        </Context.Provider>
      </CartProvider>
    </ThemeProvider>
  )
}