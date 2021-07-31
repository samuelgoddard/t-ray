import { useContext, useEffect, useRef } from 'react'
import { getAllProductsInCollection } from '../lib/shopify'
import Layout from '@/components/layout'
import Container from '@/components/container'
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import HistoryCarousel from '@/components/history-carousel'
import Rollover from '@/components/rollover'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Footer from '@/components/footer'
import ProductTeaser from '@/components/product-teaser'
import Image from 'next/image'
import Ticker from '@/components/ticker'
import ImageWrapper from '@/components/image-wrapper'
import trayImage from '@/public/images/t-frame.jpg'
import trayImageFrame from '@/public/images/t-frame-front.png'
import trayText from '@/public/images/imreallyatrex.svg'
import trayTextDark from '@/public/images/imreallyatrexdark.svg'
import homeKanji from '@/public/images/home-kanji.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import itsMeKanji from '@/public/images/kanji-its-me.svg'
import { NextSeo } from 'next-seo'
import BlockContent from '@sanity/block-content-to-react'
import { IntroContext } from '@/context/intro'
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
  const { data: { home, products } } = pageService.getPreviewHook(initialData)()
  const [introContext, setIntroContext] = useContext(IntroContext);
  const containerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      setIntroContext(true)
    }, 4000);
  },[]);

  const fade = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { delay: introContext ? 0 : 2, duration: 0.75, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }
  
  const fadeDelay = {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { delay: introContext ? 0 : 2, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }
  
  const reveal = {
    initial: { y: '100%' },
    enter: { 
      y: 0,
      transition: { delay: introContext ? 0 : 1.75, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      y: '100%',
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }
  
  const imageScale = {
    initial: { opacity: introContext ? 1 : 1, scale: 1.2 },
    enter: { scale: 1, opacity: 1, transition: { delay: introContext ? 0.3 : 2, duration: introContext ? 0.65 : 1, ease: [0.83, 0, 0.17, 1] }},
    exit: { scale: 1.2, opacity: 1, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }

  const innerReveal = {
    initial: { x: 0 },
    enter: { x: '-100%', transition: { delay: introContext ? 0.05 : 1.9, duration: 1, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: 0, transition: {delay: 0.05,  duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }
  const innerReveal2 = {
    initial: { x: 0 },
    enter: { x: '-100%', transition: { delay: introContext ? 0.10 : 1.95, duration: 1, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: 0, transition: { delay: 0.10, duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }
  const innerReveal3 = {
    initial: { x: 0 },
    enter: { x: '-100%', transition: { delay: introContext ? 0.15 : 2, duration: 1, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: 0, transition: { delay: 0.15, duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }
  const innerReveal4 = {
    initial: { x: 0 },
    enter: { x: '-100%', transition: { delay: introContext ? 0.20 : 2.05, duration: 1, ease: [0.83, 0, 0.17, 1] }},
    exit: { x: 0, transition: { delay: 0.20, duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }

  const imageFrameFade = {
    initial: { opacity: introContext ? 1 : 0 },
    enter: {  opacity: 1, transition: { delay: introContext ? 0 : 1., duration: 0.2, ease: [0.83, 0, 0.17, 1] }},
    exit: { opacity: 1, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }

  const imageKanjiFade = {
    initial: { opacity: introContext ? 1 : 0, scale: introContext ? 1 : 0.5 },
    enter: {  opacity: 1, scale: 1, transition: { delay: introContext ? 0 : 2.2, duration: 0.65, ease: [0.83, 0, 0.17, 1] }},
    exit: { scale: 1, opacity: 1, transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }}
  }
  
  const scaleUp = {
    initial: { scale: 0.5 },
    enter: { 
      scale: 1,
      transition: { delay: introContext ? 0 : 2, duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    },
    exit: {
      scale: 0.5,
      transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
    }
  }

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
          site_name: `I'm Really A Trex`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      <LazyMotion features={domMax}>
        <LocomotiveScrollProvider
          options={{ 
            smooth: true, lerp: 0.11
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <div data-scroll-container ref={containerRef}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className="pt-[100px] md:pt-[140px] xl:pt-[160px]"
              data-scroll-section
            >
              <Container bleedMobile>
                <m.div variants={fade}>
                  <div className="relative mb-[15vw] md:mb-[29vw] xl:mb-[27vw]px">
                    <h1 className={`uppercase text-[12.5vw] leading-[0.82] text-center break-all will-change relative text-red`}>
                      <span className="block overflow-hidden relative">
                        <m.span variants={fadeDelay} className="block">ImReally</m.span>
                      </span>
                      <span className="block overflow-hidden relative">
                        <m.span variants={fadeDelay} className="block">A Trex</m.span>
                      </span>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500">
                        <div className="overflow-hidden xl:pt-[4px]">
                          <m.div variants={fade}>
                            <div className="w-[85vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={trayText}
                                alt="ImReallyATrex"
                                layout="responsive"
                                className="w-full will-change"
                                priority
                              />
                            </div>
                          </m.div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500">
                        <div className="overflow-hidden xl:pt-[4px]">
                          <m.div variants={fade}>
                            <div className="w-[85vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={trayTextDark}
                                alt="ImReallyATrex"
                                layout="responsive"
                                className="w-full will-change"
                                priority
                              />
                            </div>
                          </m.div>
                        </div>
                      </div>
                    </h1>
                    
                    <div className="">
                      <div className="md:absolute inset-0 z-10 w-full h-full mt-[9vw] md:mt-[18vw] xl:mt-[13vw] flex items-center justify-center">
                        <div
                          className="w-full md:w-7/12 relative will-change"
                          data-scroll
                          data-scroll-speed="1.5"
                        >
                          <div className="relative overflow-hidden rounded-lg -rotate-2">
                            <div className="absolute inset-0 w-full z-10 scale-[1.0025]">
                              <m.div
                                variants={innerReveal}
                                className="h-[26.5%] w-full bg-off-white dark:bg-off-black absolute top-0 left-0 right-0 z-20"
                              ></m.div>

                              <m.div
                                variants={innerReveal2}
                                className="h-[26.5%] w-full bg-off-white dark:bg-off-black absolute top-0 left-0 right-0 z-20 mt-[15.5%]"
                              ></m.div>

                              <m.div
                                variants={innerReveal3}
                                className="h-[26.5%] w-full bg-off-white dark:bg-off-black absolute top-0 left-0 right-0 z-20 mt-[30%]"
                              ></m.div>
                              
                              <m.div
                                variants={innerReveal4}
                                className="h-[26.5%] w-full bg-off-white dark:bg-off-black absolute top-0 left-0 right-0 z-20 mt-[45.5%]"
                              ></m.div>

                              <m.div variants={imageFrameFade}>
                                <Image
                                  src={trayImageFrame}
                                  alt="Placeholder"
                                  layout="responsive"
                                  className="w-full will-change pointer-events-none rounded-lg"
                                  priority
                                />
                              </m.div>
                            </div>
                            <m.div variants={imageScale}>
                              <div className="relative z-0">
                                <Image
                                  src={trayImage}
                                  alt="Placeholder"
                                  layout="responsive"
                                  className="w-full will-change pointer-events-none rounded-lg"
                                  data-scroll
                                  data-scroll-speed="-0.85"
                                  priority
                                />
                              </div>
                            </m.div>
                          </div>

                          <div className="absolute bottom-0 left-0 ml-[15px] md:ml-[-5vw] mb-[-8.5vw] md:mb-[-5vw] will-change z-30" data-scroll data-scroll-speed="0.75">
                            <div className="w-[28vw] md:w-[14.5vw] motion-safe:animate-spin-slow">
                              <m.div variants={imageKanjiFade}>
                                <m.div variants={scaleUp}>
                                  <Image
                                    src={homeKanji}
                                    alt="Kanji Letters"
                                    layout="responsive"
                                    className="w-full will-change"
                                    priority
                                  />
                                </m.div>
                              </m.div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-[14vw] md:mb-[10vw] px-[15px] md:px-0">
                    <div className="w-11/12 md:w-8/12" data-scroll data-scroll-speed="1">
                      <div className="text-[23px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] leading-[1.175] text-indent tracking-tight transition-colors ease-in-out duration-500">
                        <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.introBioText} />
                      </div>
                    </div>
                  </div>
                </m.div>
              </Container>

              <m.div variants={fade} className="py-[1.5vw] md:py-[1vw] xl:py-[2.5vw] overflow-hidden">
                <Ticker href="/music" word1="New Drop!" word2="Listen Here!" />
              </m.div>
              
              <Container>
                <m.div variants={fade}>
                  <div className="flex justify-center mb-[25vw] md:mb-[18vw]">
                    <div className="w-11/12 md:w-10/12 xl:w-9/12">
                      <div className="flex flex-wrap md:mx-[-3vw] items-center md:items-start xl:items-center">
                        <div className="w-full md:w-6/12 xl:w-7/12 md:px-[3vw] mb-8 md:mb-0 will-change bg-off-white dark:bg-off-black transition-colors ease-in-out duration-500" data-scroll-speed="0.35">
                          <div className="relative overflow-hidden">
                            {/* <m.div variants={imageScale}> */}
                              <ImageWrapper
                                image={home.contentImage.asset}
                                className="w-full mix-blend-multiply dark:mix-blend-lighten rounded-md will-change"
                                baseWidth={900}
                                baseHeight={1150}
                                alt={'T-Ray Portrait'}
                              />
                            {/* </m.div> */}
                          </div>
                        </div>
                        <div className="w-full md:w-6/12 xl:w-5/12 md:px-[3vw]" data-scroll data-scroll-speed="0.65">
                          <div className="text-[19px] md:text-[22px] xl:text-[24px] 2xl:text-[24px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8 transition-colors ease-in-out duration-500">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.contentBioText} />
                          </div>

                          <ul className="text-[17px] md:text-[20px] xl:text-[22px] leading-[1.25] tracking-tight">
                            <li className="mb-2">
                              <div className="relative overflow-hidden transition-colors ease-in-out duration-500">
                                <m.div variants={reveal}>
                                  <a href="https://www.youtube.com/c/ImReallyATRex" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                    <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                    <div className="overflow-hidden relative">
                                      <Rollover label="On Youtube" underline />
                                    </div>
                                  </a>
                                </m.div>
                              </div>
                            </li>
                            <li className="mb-2">
                              <div className="relative overflow-hidden transition-colors ease-in-out duration-500">
                                <m.div variants={reveal}>
                                  <a href="https://www.instagram.com/imreallyatrex" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                                    <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                                    <div className="overflow-hidden relative">
                                      <Rollover label="On Instagram" underline />
                                    </div>
                                  </a>
                                </m.div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <HeadingKanji horizontal heading="History" subHeading="A look back in time" kanji={itsMeKanji} />
                </m.div>
              </Container>
              
              <m.div variants={fade}>
                <div className="mb-[32vw] md:mb-[26vw] xl:mb-[24vw]">
                  <HistoryCarousel slides={home.historyStories} />
                </div>
              </m.div>
              
              <Container>
                <m.div variants={fade}>
                  <HeadingKanji heading="Swag!" subHeading="Get the merch and get the vibe" kanji={japaneseCharacters} />


                  {/* { productData.variants.edges.length > 1 ? (
                    <div className="flex space-x-5 uppercase text-xl md:text-4xl xl:text-5xl w-full justify-end">
                      { productData.variants.edges.map((item, i) => (
                        <>
                        { item.node.quantityAvailable > 0 && (
                          <span className="first-of-type:block hidden">${item.node.price}</span>
                        )}
                        </>
                      ))}
                    </div>
                  ) : (
                    <div className="flex space-x-5 uppercase text-xl md:text-4xl xl:text-5xl w-full justify-end">
                      <span className="block">${productData.variants.edges[0].node.price}</span>
                    </div>
                  )} */}
                  
                  <div className="justify-center mb-[25vw] md:mb-[16vw] mt-[5vw] md:mt-[-7.5vw] flex">
                    <div className="w-full md:w-11/12 max-w-screen-3xl mx-auto">
                      <div className="flex flex-wrap justify-center md:-mx-4">
                        {products.map((product, index) => {
                          let price = '$0'
                          let priceAvailable = product.node.variants.edges.find( ({node}) => node.quantityAvailable > 0);

                          if (product.node.variants.edges.length > 1) {
                            price = priceAvailable.node.price
                          } else {
                            price = product.node.variants.edges[0].node.price
                          }

                          return (
                            <div className="w-1/2 md:w-1/3 md:px-4 block mb-4 md:mb-0" key={index}>
                              <ProductTeaser
                                href={`/products/${product.node.handle}`}
                                title={product.node.title}
                                price={price}
                                image={product.node.images.edges[0].node.originalSrc}
                                imageWidth={product.node.images.edges[0].node.width}
                                imageHeight={product.node.images.edges[0].node.height}
                              />
                            </div>
                          )
                        })}
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
  const cms = await pageService.fetchQuery(context)
  const products = await getAllProductsInCollection()

  return {
    props: { ...cms, products }
  }
}