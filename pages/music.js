import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, fadeDelay, imageScale, reveal } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import Rollover from '@/components/rollover'
import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import ImageWrapper from '@/components/image-wrapper'
import musicText from '@/public/images/music.svg'
import musicTextDark from '@/public/images/music-dark.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import musicKanki from '@/public/images/kanji-music.svg'
import { NextSeo } from 'next-seo'
import MetaTeaser from '@/components/meta-teaser'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'
import { IntroContext } from '@/context/intro'

const query = `{
  "music": *[_type == "music" && (featured == null || featured == false)] {
    title,
    featured,
    coverArtwork {
      asset -> {
        ...
      }
    },
    descriptionText,
    date,
    type,
    purchaseLinks[]{
      title,
      url
    }
  },
  "featuredMusic": *[_type == "music" && featured == true] {
    title,
    featured,
    coverArtwork {
      asset -> {
        ...
      }
    },
    descriptionText,
    date,
    type,
    purchaseLinks[]{
      title,
      url
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Music(initialData) {
  const { data: { music, featuredMusic }} = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title="Music"
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://imreallyatrex.com',
          title: `Music | ImReallyATRex`,
          description: 'T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010.',
          images: [
            {
              url: 'https://www.imreallyatrex.com/static/social.jpg',
              width: 1200,
              height: 630,
              alt: `ImReallyATRex | T-Ray Logo`,
            },
          ],
          site_name: `ImReallyATRex`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <LazyMotion features={domMax}>
        <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.11 }} watch={[]} containerRef={containerRef}>
          <div data-scroll-container ref={containerRef}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="pt-[100px] md:pt-[140px] xl:pt-[160px]"
              data-scroll-section
            >
              <Container>
                <m.div variants={fade}>
                  {/* Hero Heading */}
                  <div className="relative mb-[8vw] md:mb-[7vw] xl:mb-[6vw]">
                    
                    <h1 className={`uppercase text-[15vw] md:text-[13vw] leading-[0.85] tracking-[-0.02em] text-center break-all will-change relative text-red`}>
                      <m.span variants={fadeDelay} className="block">Music</m.span>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500 mt-[-0.22em] ml-[-0.1em]">
                        <div className="overflow-hidden">
                          <m.div variants={fade}>
                            <div className="w-[72vw] md:w-[63.5vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={musicText}
                                alt="Music Lettering"
                                layout="responsive"
                                className="w-full will-change"
                                priority
                              />
                            </div>
                          </m.div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500 mt-[-0.22em] ml-[-0.1em]">
                        <div className="overflow-hidden">
                          <m.div variants={fade}>
                            <div className="w-[72vw] md:w-[63.5vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={musicTextDark}
                                alt="Music Lettering"
                                layout="responsive"
                                className="w-full will-change"
                                priority
                              />
                            </div>
                          </m.div>
                        </div>
                      </div>
                    </h1>
                  </div>
                  
                  {/* Latest Release */}
                  {featuredMusic.map((e, index) => {
                    return (
                      <div key={index} className="flex justify-center mb-[25vw] md:mb-[16vw] max-w-screen-2xl mx-auto">
                        <div className="w-full md:w-10/12 xl:w-11/12">
                          <div className="flex flex-wrap md:mx-[-3vw] items-center">
                            <div className="w-full md:w-6/12 md:px-[3vw] mb-8 md:mb-0 will-change" data-scroll-speed="0.35">
                              <div className="relative overflow-hidden rounded-md">
                                <m.div variants={imageScale}>
                                  <ImageWrapper
                                    image={e.coverArtwork.asset}
                                    className="w-full rounded-md will-change"
                                    baseWidth={900}
                                    baseHeight={900}
                                    alt={'T-Ray Album'}
                                  />
                                </m.div>
                              </div>
                            </div>
                            <div className="w-full md:w-6/12 md:px-[3vw] transition-colors ease-in-out duration-500" data-scroll data-scroll-speed="0.65">
                              <div className="mb-5 md:mb-8">
                                <MetaTeaser marqueeForce date={e.date} type={e.type} latest />
                              </div>
                              
                              <div className="mb-5 md:mb-8 relative overflow-hidden">
                                <m.h2 variants={reveal} className="text-[30px] md:text-[30px] xl:text-[42px] leading-none mb-0 pb-0">{e.title}</m.h2>
                              </div>

                              <div className="text-[18px] md:text-[19px] xl:text-[22px] 2xl:text-[24px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8 max-w-xl">
                                <BlockContent serializers={{ container: ({ children }) => children }} blocks={e.descriptionText} />
                              </div>

                              <ul className="text-[17px] md:text-[18px] xl:text-[20px] leading-[1.25] tracking-tight">
                                {e.purchaseLinks.map((e, index) => {
                                  return (
                                    <li className="mb-2" key={index}>
                                      <div className="relative overflow-hidden">
                                        <m.div variants={reveal}>
                                          <a href={e.url} className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                            <div className="overflow-hidden relative">
                                              <Rollover label={`On ${e.title}`} underline />
                                            </div>
                                        </a>
                                        </m.div>
                                      </div>
                                    </li>
                                  )
                                })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                  {/* Further Releases */}
                  <HeadingKanji heading="Releases" subHeading="More music from the vault" kanji={japaneseCharacters} />

                  <div className="flex justify-center mb-[25vw] md:mb-[16vw] max-w-screen-2xl mx-auto mt-20 md:mt-0">
                    <div className="w-full md:w-10/12 xl:w-11/12">
                      <div className="flex flex-wrap md:-mx-6">
                        {music.map((e, index) => {
                          let scrollSpeed = 0;
                          
                          if (index == 0) {
                            scrollSpeed = 0;
                          } else if (index == 1) {
                            scrollSpeed = 0.5;
                          } else if (index == 2) {
                            scrollSpeed = 0.8;
                          } else if (index == 3) {
                            scrollSpeed = 0;
                          } else if (index == 4) {
                            scrollSpeed = 0.5;
                          } else if (index == 5) {
                            scrollSpeed = 0.8;
                          } else if (index == 6) {
                            scrollSpeed = 0;
                          } else if (index == 7) {
                            scrollSpeed = 0.5;
                          } else if (index == 8) {
                            scrollSpeed = 0.8;
                          }

                          return (
                            <div
                              key={index}
                              data-scroll
                              data-scroll-speed={ scrollSpeed }
                              className={`w-full md:w-1/2 lg:w-1/3 md:px-6 mb-8 md:mb-16 xl:mb-0 ${index == 1 ? 'md:mt-20' : ''} ${index == 2 ? 'lg:mt-40' : ''}`}
                            >
                              <ReleaseTeaser
                                marqueeForce
                                href={e.purchaseLinks.length > 0 ? e.purchaseLinks[0].url : null }
                                image={e.coverArtwork.asset}
                                title={e.title}
                                date={e.date}
                                type={e.type}
                                purchaseLinks={e.purchaseLinks}
                                external
                                music
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <Footer />
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