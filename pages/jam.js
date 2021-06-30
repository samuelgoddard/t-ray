import Head from 'next/head'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import Logo from '@/components/logo'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
// import MotionScroll from "@/components/motion-scroll"

import Image from 'next/image'
import trayImage from '@/public/images/t-ray.webp'
import trayPortrait from '@/public/images/t-ray-portrait.webp'
import Player from '../components/player'

export default function Jam() {
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
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24 mt-[18vw] md:mt-[13vw] lg:mt-[11vw] xl:mt-[10vw] 2xl:mt-[9vw]"
          data-scroll-section
        >
          <Container>
            <m.div variants={fade}>
            <h1 className="uppercase text-[10vw] leading-[0.95] text-red text-center break-all will-change mb-[3vw]">Jam Mode</h1>

            <div className="flex justify-center">
              <div className="w-8/12">
                <Player/>
              </div>
            </div>

            </m.div>
          </Container>
        </m.div>
      </LazyMotion>

      <Footer />
    </Layout>
  )
}
