import { useRef, useContext } from 'react'
import Head from 'next/head'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Context } from '@/context/state'
import Player from '@/components/jam-hooks'

export default function Jam() {
  const containerRef = useRef(null)
  const [globalMusicPlaying, setGlobalMusicPlaying] = useContext(Context);

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
        {/* <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}> */}
          <Player/>
        {/* </LocomotiveScrollProvider> */}
      </LazyMotion>
    </Layout>
  )
}
