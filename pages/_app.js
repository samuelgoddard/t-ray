import '@/styles/main.css'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Header from '@/components/header'
import SEO from '@/helpers/seo.config'
import { DefaultSeo } from 'next-seo'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import Image from 'next/image'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [isIntroAccepted, setIntroAccepted] = useState(false);

  const toggleIntroAccepted = () => {
    setIntroAccepted(!isIntroAccepted)
  };

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      
      <Header currentlyPlaying={isIntroAccepted} />

      <div className={`bg-off-black text-white fixed z-50 inset-0 w-full flex items-center justify-center transition ease-in-out duration-500 ${isIntroAccepted ? 'opacity-0 scale-110 pointer-events-none' : 'h-full'}`}>
        <button aria-label="Enter Site" className="block" onClick={() => toggleIntroAccepted() }>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-10vw] z-0">
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
            <div>
              <span className="block uppercase text-[7vw] leading-[0.82] text-white text-center break-all will-change relative font-bold font-display mb-5">ImReallyATrex</span>
              <span className="block uppercase text-[20px] leading-[0.82] text-white text-center break-all will-change relative font-bold font-display">Click To Enter</span>
            </div>
          </div>
        </button>
      </div>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ThemeProvider>
  )
}