import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { getAllProductsInCollection } from '../lib/shopify'
import { fade, fadeDelay, imageScale, reveal } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import Rollover from '@/components/rollover'
import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import ImageWrapper from '@/components/image-wrapper'
import storeText from '@/public/images/store.svg'
import storeTextDark from '@/public/images/store-dark.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import musicKanki from '@/public/images/kanji-music.svg'
import { NextSeo } from 'next-seo'
import MetaTeaser from '@/components/meta-teaser'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'
import { IntroContext } from '@/context/intro'
import ProductTeaser from '@/components/product-teaser'

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

export default function Store(initialData) {
  const { data: { products } } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title="Store"
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://imreallyatrex.com',
          title: `Store | ImReallyATRex`,
          description: 'T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010.',
          images: [
            {
              url: '/images/social.jpg',
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
                      <m.span variants={fadeDelay} className="block">Store</m.span>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500 mt-[-0.075em] ml-[0.01em]">
                        <div className="overflow-hidden">
                          <m.div variants={fade}>
                            <div className="w-[72vw] md:w-[62.5vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={storeText}
                                alt="Store Lettering"
                                layout="responsive"
                                className="w-full will-change"
                                priority
                              />
                            </div>
                          </m.div>
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500 mt-[-0.075em] ml-[0.01em]">
                        <div className="overflow-hidden">
                          <m.div variants={fade}>
                            <div className="w-[72vw] md:w-[62.5vw] pointer-events-none motion-safe:animate-float">
                              <Image
                                src={storeTextDark}
                                alt="Store Lettering"
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
                  
                  <div className="justify-center mb-[25vw] md:mb-[16vw] mt-[0vw] md:mt-[-4.5vw] flex">
                    <div className="w-full md:w-11/12 max-w-screen-3xl mx-auto">
                      <div className="flex flex-wrap justify-center md:-mx-4">
                        {/* {JSON.stringify(products)} */}
                        {products.map((product, index) => {
                          let price = '$0'
                          let priceAvailable = product.node.variants.edges.find( ({node}) => node.quantityAvailable > 0);

                          if (product.node.variants.edges.length > 1) {
                            price = priceAvailable ? priceAvailable.node.price : 'Sold Out'
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
  const cms = await pageService.fetchQuery(context)
  const products = await getAllProductsInCollection()

  return {
    props: { ...cms, products }
  }
}