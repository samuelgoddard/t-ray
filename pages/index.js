// import { client } from '@/helpers/shopify-client'
import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import HistoryCarousel from '@/components/history-carousel'
import Rollover from '@/components/rollover'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import ProductTeaser from '@/components/product-teaser'
import Image from 'next/image'
import Ticker from '@/components/ticker'
import ImageWrapper from '@/components/image-wrapper'
import trayImage from '@/public/images/t-ray.webp'
import trayText from '@/public/images/imreallyatrex.svg'
import trayTextDark from '@/public/images/imreallyatrexdark.svg'
import tee from '@/public/images/tee.webp'
import homeKanji from '@/public/images/home-kanji.svg'
import kanjiItsMe from '@/public/images/kanji-its-me.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import { NextSeo } from 'next-seo'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

const query = `{
  "home": *[_type == "home"][0]{
    title,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    contentImage {
      asset -> {
        ...
      }
    },
    historyStories[] {
      descriptionText,
      year,
      title,
      image {
        asset -> {
          ...
        }
      },
    },
    introBioText,
    contentBioText,
  },
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
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
                  <div className="relative mb-[15vw] md:mb-[30vw] xl:mb-[35vw]">
                    <h1 className={`uppercase text-[13vw] leading-[0.82] text-center break-all will-change relative text-red`}>
                      ImReallyA Trex

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500">
                        <div className="w-[88.65vw] pointer-events-none motion-safe:animate-float">
                          <Image
                            src={trayText}
                            alt="ImReallyATrex"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500">
                        <div className="w-[88.65vw] pointer-events-none motion-safe:animate-float">
                          <Image
                            src={trayTextDark}
                            alt="ImReallyATrex"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>
                    </h1>
                    
                    <div className="md:absolute inset-0 z-10 w-full h-full mt-[9vw] md:mt-[21vw] flex items-center justify-center">
                      <div
                        className="w-11/12 md:w-7/12 relative will-change"
                        data-scroll
                        data-scroll-speed="1.5"
                      >
                        <Image
                          src={trayImage}
                          alt="Placeholder"
                          layout="responsive"
                          className="w-full will-change pointer-events-none"
                          placeholder="blur"
                          priority
                        />

                        <div className="absolute bottom-0 left-0 ml-[-6.5vw] md:ml-[-5vw] mb-[-6.5vw] md:mb-[-5vw] will-change" data-scroll data-scroll-speed="0.75">
                          <div className="w-[20vw] md:w-[14.5vw] motion-safe:animate-spin-slow">
                            <Image
                              src={homeKanji}
                              alt="Kanji Letters"
                              layout="responsive"
                              className="w-full will-change"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-[14vw] md:mb-[10vw]">
                    <div className="w-11/12 md:w-8/12" data-scroll data-scroll-speed="1">
                      <div className="text-[23px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] leading-[1.175] text-indent tracking-tight">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.introBioText} />
                      </div>
                    </div>
                  </div>
                </m.div>
              </Container>

              <Ticker href="/music" word1="New Drop!" word2="Listen Here!" />
              
              <Container>
                <m.div variants={fade}>
                  <div className="flex justify-center mb-[25vw] md:mb-[16vw]">
                    <div className="w-11/12 md:w-10/12 xl:w-9/12">
                      <div className="flex flex-wrap md:mx-[-3vw] items-center md:items-start xl:items-center">
                        <div className="w-full md:w-6/12 xl:w-7/12 md:px-[3vw] mb-8 md:mb-0 will-change bg-off-white dark:bg-off-black transition-colors ease-in-out duration-500" data-scroll-speed="0.35">
                          <ImageWrapper
                            image={home.contentImage.asset}
                            className="w-full mix-blend-multiply dark:mix-blend-lighten rounded-md will-change"
                            baseWidth={1200}
                            baseHeight={1500}
                            alt={'T-Ray Portrait'}
                          />
                          {/* <Image
                            src={home.contentImage.src}
                            alt="Placeholder"
                            layout="responsive"
                            className="w-full dark:mix-blend-lighten rounded-md will-change"
                            placeholder="blur"
                          /> */}
                        </div>
                        <div className="w-full md:w-6/12 xl:w-5/12 md:px-[3vw]" data-scroll data-scroll-speed="0.65">
                          <div className="text-[19px] md:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.contentBioText} />
                          </div>

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

                  <HeadingKanji heading="History" subHeading="A look back in time" kanji={japaneseCharacters} />
                </m.div>
              </Container>
              
              <m.div variants={fade}>
                <div className="mb-[32vw] md:mb-[15vw] xl:mb-[20vw]">
                  <HistoryCarousel slides={home.historyStories} />
                </div>
              </m.div>
              
              <Container>
                <m.div variants={fade}>
                  <HeadingKanji heading="Swag!" subHeading="Get the merch and get the vibe" kanji={japaneseCharacters} />

                  <div className="justify-center mb-[25vw] md:mb-[16vw] md:mt-[-3.5vw] flex">
                    <div className="w-10/12 md:w-11/12 max-w-screen-3xl mx-auto">
                      <div className="flex flex-wrap justify-center md:-mx-4">
                        <div className="w-full md:w-1/3 md:px-4 block">
                          <ProductTeaser href="/product" title="Dino Tee" price={45} image={tee} />
                        </div>
                        <div className="w-full md:w-1/3 md:px-4 hidden md:block">
                          <ProductTeaser href="/product" title="Dino Tee" price={45} image={tee} />
                        </div>
                        <div className="w-full md:w-1/3 md:px-4 hidden md:block">
                          <ProductTeaser href="/product" title="Dino Tee" price={45} image={tee} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Footer/>
                </m.div>
              </Container>
            </m.div>
          </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}