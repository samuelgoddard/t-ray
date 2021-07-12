import Head from 'next/head'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import Logo from '@/components/logo'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import HistoryCarousel from '@/components/history-carousel'
import Image from 'next/image'
import trayImage from '@/public/images/t-ray.webp'
import trayPortrait from '@/public/images/t-ray-portrait.webp'
import trayText from '@/public/images/imreallyatrex.svg'
import trayTextDark from '@/public/images/imreallyatrexdark.svg'
import homeKanji from '@/public/images/home-kanji.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'

const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nextjs boilerplate - Home</title>
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
              <div className="relative mb-[28vw]">
                <h1 className="uppercase text-[13vw] leading-[0.82] text-red text-center break-all will-change relative">
                  ImReallyA Trex

                  <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[88.65vw] hidden dark:block pointer-events-none motion-safe:animate-float">
                      <Image
                        src={trayText}
                        alt="ImReallyATrex"
                        layout="responsive"
                        className="w-full will-change"
                      />
                    </div>
                    <div className="w-[88.65vw] block dark:hidden pointer-events-none motion-safe:animate-float">
                      <Image
                        src={trayTextDark}
                        alt="ImReallyATrex"
                        layout="responsive"
                        className="w-full will-change"
                      />
                    </div>
                  </div>
                </h1>
                
                <div className="absolute inset-0 z-10 w-full h-full mt-[15vw] md:mt-[15.5vw] flex items-center justify-center">
                  <m.div
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.45}
                    dragTransition={{ bounceDamping: 20 }}
                    className="w-8/12 md:w-7/12 relative will-change cursor-move"
                    data-scroll
                    data-scroll-speed="1.25"
                  >
                    <Image
                      src={trayImage}
                      alt="Placeholder"
                      layout="responsive"
                      className="w-full will-change pointer-events-none"
                      placeholder="blur"
                    />

                    <div className="absolute bottom-0 left-0 ml-[-6.5vw] md:ml-[-5vw] mb-[-6.5vw] md:mb-[-5vw] will-change" data-scroll data-scroll-speed="0.45">
                      <div className="w-[20vw] md:w-[14.5vw] motion-safe:animate-spin-slow">
                        <Image
                          src={homeKanji}
                          alt="Kanji Letters"
                          layout="responsive"
                          className="w-full will-change"
                        />
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
              
              <div className="flex justify-center mb-[14vw] md:mb-[10vw]">
                <div className="w-11/12 md:w-8/12" data-scroll data-scroll-speed="1">
                  <p className="text-[3.6vw] md:text-[3.3vw] 2xl:text-[2.8vw] leading-[4.8vw] md:leading-[3.8vw] 2xl:leading-[3.2vw] text-indent tracking-tight">T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010. He and the band found international success the following year with the release of the singles “Twilight” and “Lick Ya Down” before releasing their debut album, Bajan Style, in 2012.</p>
                </div>
              </div>

              <div className="overflow-hidden mx-[-5vw] md:mx-[-3vw] xl:mx-[-2vw] pt-[4vw]">
                <div className="w-full py-[1.5vw] md:py-[1vw] xl:py-[0.5vw] bg-pink dark:bg-yellow rotate-[3deg] whitespace-nowrap text-off-black font-display uppercase tracking-tight text-[4vw] md:text-[2.25vw] xl:text-[2vw] mb-[18vw] md:mb-[14vw]">
                  <div className="relative flex overflow-x-hidden will-change">
                    <div className="motion-safe:animate-marquee whitespace-nowrap flex items-center">
                      <span className="mx-3">New Drop!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">Listen Here!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">New Drop!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">Listen Here!</span>
                      <span className="mx-3"><Logo/></span>
                    </div>

                    <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap flex items-center">
                      <span className="mx-3">New Drop!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">Listen Here!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">New Drop!</span>
                      <span className="mx-3"><Logo/></span>
                      <span className="mx-3">Listen Here!</span>
                      <span className="mx-3"><Logo/></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-[16vw]">
                <div className="w-11/12 md:w-9/12">
                  <div className="flex flex-wrap md:mx-[-3vw] items-center">
                    <div className="w-full md:w-7/12 md:px-[3vw] mb-8 md:mb-0 will-change" data-scroll-speed="0.35">
                      <Image
                        src={trayPortrait}
                        alt="Placeholder"
                        layout="responsive"
                        className="w-full dark:mix-blend-lighten rounded-md will-change"
                        placeholder="blur"
                      />
                    </div>
                    <div className="w-full md:w-5/12 md:px-[3vw]" data-scroll data-scroll-speed="0.65">
                      <p className="text-[3.2vw] md:text-[1.9vw] 2xl:text-[1.5vw] leading-[4.6vw] md:leading-[2.7vw] 2xl:leading-[2.2vw] text-indent tracking-tight mb-5 md:mb-8">T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010. He and the band found international success the following year with the release of the singles “Twilight” and “Lick Ya Down” before releasing their debut album, Bajan Style, in 2012.</p>

                      <ul className="text-[2.9vw] md:text-[1.6vw] 2xl:text-[1.3vw] leading-[4.3vw] md:leading-[2.4vw] 2xl:leading-[2vw] tracking-tight">
                        <li><span className="text-red dark:text-yellow mr-3">→</span> On Youtube</li>
                        <li><span className="text-red dark:text-yellow mr-3">→</span> On Instagram</li>
                        <li><span className="text-red dark:text-yellow mr-3">→</span> On Twitter</li>
                        <li><span className="text-red dark:text-yellow mr-3">→</span> On Spotify</li>
                        <li><span className="text-red dark:text-yellow mr-3">→</span> On Apple Music</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <HeadingKanji heading="History" subHeading="A look back in time" kanji={japaneseCharacters} />
            </m.div>
          </Container>
          
          <m.div variants={fade}>
            <div className="mb-[17vw] md:mb-[15vw] xl:mb-[20vw]">
              <HistoryCarousel slides={slides} />
            </div>
          </m.div>
          
          <Container>
            <m.div variants={fade}>
              <HeadingKanji heading="Swag!" subHeading="Get the merch and get the vibe" kanji={japaneseCharacters} />

              <div className="flex justify-center mb-[16vw]">
                <div className="w-11/12 md:w-9/12">
                  <p>Lorem</p>
                </div>
              </div>

              <div className="">
                <p className="text-[5.2vw] md:text-[2.9vw] 2xl:text-[2.5vw] leading-[5.6vw] md:leading-[3.8vw] 2xl:leading-[2.2vw] text-indent tracking-tight mb-5 md:mb-8">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
              </div>

              <div className="flex lg:mb-[18vw]">
                <div className="w-full">
                  <Footer />
                </div>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
