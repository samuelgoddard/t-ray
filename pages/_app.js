import '@/styles/main.css'
import { useRef } from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Header from '@/components/header'

export default function App({ Component, pageProps }) {
  const containerRef = useRef(null)

  const router = useRouter()

  return (
    <ThemeProvider attribute="class">
      <Header />

      <AnimatePresence exitBeforeEnter>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              lerp: 0.05
            }
          }
          watch={[]}
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Component {...pageProps} key={router.asPath} />
          </main>
        </LocomotiveScrollProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}