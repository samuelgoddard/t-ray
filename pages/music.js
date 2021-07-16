import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, intro } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import Rollover from '@/components/rollover'
import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'

import albumArtwork from '@/public/images/album-art.jpg'
import music from '@/public/images/music.svg'
import musicDark from '@/public/images/music-dark.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import { NextSeo } from 'next-seo'

export default function Music() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title="I'm Really A Trex"
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://t-ray.vercel.app/',
          title: `I'm Really A Trex | T-Ray`,
          description: 'T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010.',
          images: [
            {
              url: '/images/social.jpg',
              width: 1200,
              height: 630,
              alt: `I'm Really A Trex | T-Ray Logo`,
            },
          ],
          site_name: `I'm Really A Trex | T-Ray`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <LazyMotion features={domMax}>
        <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}>
          <div data-scroll-container ref={containerRef}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="mt-[100px] md:mt-[140px] xl:mt-[160px]"
              data-scroll-section
            >
              <Container>
                <m.div variants={fade}>
                  <div className="relative mb-[3vw]">
                    <h1 className={`uppercase text-[13vw] leading-[1.25] tracking-[-0.02em] text-center break-all will-change relative text-red`}>
                      Music

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500 ml-[-0.1em]">
                        <div className="w-[63.5vw] pointer-events-none motion-safe:animate-float">
                          <Image
                            src={music}
                            alt="Music Lettering"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500 ml-[-0.1em]">
                        <div className="w-[63.5vw] pointer-events-none motion-safe:animate-float">
                          <Image
                            src={musicDark}
                            alt="Music Lettering"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>
                    </h1>
                  </div>
                  

                  <div className="flex justify-center mb-[25vw] md:mb-[16vw] max-w-screen-2xl mx-auto">
                    <div className="w-11/12 md:w-10/12 xl:w-11/12">
                      <div className="flex flex-wrap md:mx-[-3vw] items-center">
                        <div className="w-full md:w-6/12 md:px-[3vw] mb-8 md:mb-0 will-change" data-scroll-speed="0.35">
                          <Image
                            src={albumArtwork}
                            alt="Placeholder"
                            layout="responsive"
                            className="w-full rounded-md will-change"
                            placeholder="blur"
                          />
                        </div>
                        <div className="w-full md:w-6/12 md:px-[3vw]" data-scroll data-scroll-speed="0.65">
                          <div className="xl:rotate-2 mb-5 md:mb-8 md:-ml-4 xl:-ml-8">
                            <h2 className="text-[32px] md:text-[37px] xl:text-[42px] leading-none mb-0 pb-0">Latest Release</h2>
                            <span className="hidden xl:block -mt-2 text-[32px] md:text-[37px] xl:text-[42px] leading-none font-display uppercase text-outline">Latest Release</span>
                          </div>

                          <p className="text-[19px] md:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8 max-w-xl">#127Solace is the debut EP from ImReallyATrex. Get it here:</p>

                          <ul className="text-[17px] md:text-[20px] xl:text-[22px] leading-[1.25] tracking-tight">
                            <li className="mb-2">
                              <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                <div className="overflow-hidden relative">
                                  <Rollover label="On Youtube" underline />
                                </div>
                              </a>
                            </li>
                            <li className="mb-2">
                              <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                <div className="overflow-hidden relative">
                                  <Rollover label="On Instagram" underline />
                                </div>
                              </a>
                            </li>
                            <li className="mb-2">
                              <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                <div className="overflow-hidden relative">
                                  <Rollover label="On Twitter" underline />
                                </div>
                              </a>
                            </li>
                            <li className="mb-2">
                              <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                <div className="overflow-hidden relative">
                                  <Rollover label="On Spotify" underline />
                                </div>
                              </a>
                            </li>
                            <li className="mb-2">
                              <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                <div className="overflow-hidden relative">
                                  <Rollover label="On Apple Music" underline />
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <HeadingKanji heading="Releases" kanji={japaneseCharacters} />

                  <div className="flex justify-center mb-[25vw] md:mb-[16vw] max-w-screen-2xl mx-auto mt-20 md:mt-0">
                    <div className="w-9/12 md:w-10/12 xl:w-11/12">
                      <div className="flex flex-wrap md:-mx-6">
                        <div className="w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-0">
                          <ReleaseTeaser image={albumArtwork} title="I'm Fine" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-0 md:mt-16">
                          <ReleaseTeaser image={albumArtwork} title="I'm Fine (Black Man Chant Remix)" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-0 lg:mt-32">
                          <ReleaseTeaser image={albumArtwork} title="I'm Fine (Black Man Chant Remix)" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <span className="text-[8vw] leading-[0.82] text-red will-change relative block font-display uppercase pb-4 mb-6 md:mb-12 xl:mb-14 border-b border-red">Got Email?</span>

                  <div className="w-10/12 md:w-8/12">
                    <p className="text-[22px] md:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-[1.2] tracking-tight mb-5 md:mb-8">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
                  </div>

                  <div className="flex lg:mb-[18vw] pt-[50px] md:pt-[100px] xl:pt-[180px]">
                    <div className="w-full">
                      <Footer />
                    </div>
                  </div>
                </m.div>
              </Container>
          
            </m.div>
          </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}
