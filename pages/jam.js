import { useRef } from 'react'
import Layout from '@/components/layout'
import { NextSeo } from 'next-seo'
import { LazyMotion, domMax, m } from "framer-motion"
import Player from '@/components/jam-hooks'

export default function Jam() {
  // const containerRef = useRef(null)
  // const [globalMusicPlaying, setGlobalMusicPlaying] = useContext(Context);

  return (
    <Layout>
      <NextSeo
        title="Jam"
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://t-ray.vercel.app/',
          title: `Jam | T-Ray`,
          description: 'T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010.',
          images: [
            {
              url: '/images/social.jpg',
              width: 1200,
              height: 630,
              alt: `I'm Really A Trex | T-Ray Logo`,
            },
          ],
          site_name: `I'm Really A Trex`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      
      <LazyMotion features={domMax}>
        {/* <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}> */}
          <Player/>
        {/* </LocomotiveScrollProvider> */}
      </LazyMotion>
    </Layout>
  )
}
