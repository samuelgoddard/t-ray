import Head from 'next/head'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import Player from '../components/player'
import { useRef } from 'react'

export default function Jam() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nextjs boilerplate - Jam</title>
        <meta
        name="description"
        content="nextJS boilerplate"
        />
        <meta name="og:title" content="Website Title" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <LazyMotion features={domMax}>
        <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}>
          <m.div
            data-scroll-container
            ref={containerRef}
            initial="initial"
            animate="enter"
            exit="exit"
            className="mb-12 md:mb-16 xl:mb-24 mt-[18vw] md:mt-[13vw] lg:mt-[11vw] xl:mt-[10vw] 2xl:mt-[9vw]"
            data-scroll-section
          >
            <Container>
              <m.div variants={fade}>
                <h1 className="uppercase text-[11vw] md:text-[12vw] leading-[0.95] text-red text-center break-all will-change mb-[3vw]">Jam Mode</h1>

                <div className="flex justify-center mb-[20vw] md:mb-[18vw]">
                  <div className="w-8/12">
                    <Player/>
                  </div>
                </div>

                <Footer />
              </m.div>
            </Container>
          </m.div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}
