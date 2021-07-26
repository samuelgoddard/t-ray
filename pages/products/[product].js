import { getProductSlugs, getProduct } from '@/lib/shopify'
import { useRef, useState } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
// import Rollover from '@/components/rollover'
// import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import Logo from '@/components/logo'
import ProductTeaser from '@/components/product-teaser'
import tee from '@/public/images/tee.webp'
import japaneseCharactersYellow from '@/public/images/japanese-characters-yellow.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import { NextSeo } from 'next-seo'
import { useCartContext, useAddToCartContext } from '@/context/store'

export default function Product({ productData }) {
  const containerRef = useRef(null)
  const [variantPrice, setVariantPrice] = useState(productData.variants.edges[0].node.price)

  const [quantity, setQuantity] = useState(1)
  const [variantId, setVariantId] = useState(productData.variants.edges[0].node.id)
  const [variant, setVariant] = useState(productData.variants.edges[0])
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()

  function handleSizeChange(e) {
    setVariantId(e)
    // send back size change
    const selectedVariant = productData.variants.edges.filter(v => v.node.id === e).pop()
    setVariantPrice(selectedVariant.node.price)

    // update variant
    setVariant(selectedVariant)
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  async function handleAddToCart() {
    const varId = variant.node.id
    // update store context
    if (quantity !== '') {
      addToCart({
        productTitle: productData.title,
        productHandle: productData.handle,
        productImage: productData.images.edges[0].node,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity
      })
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
          site_name: `I'm Really A Trex | T-Ray`,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <LazyMotion features={domMax}>
        {/* <div className="fixed bottom-0 right-0 p-3 bg-white text-red">PRODUCT: {JSON.stringify(productData)}</div> */}
        <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}>
          <div data-scroll-container ref={containerRef}>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className=""
              data-scroll-section
            >              
              <m.div variants={fade}>
                <div className="relative min-h-screen flex items-center justify-center">
                  <div className="w-full">
                    <div className="flex flex-wrap items-end px-[20px] md:px-[30px] mb-[-2vw]">
                      <div className="w-12 md:w-16 xl:w-20 text-yellow">
                        <Image
                          src={japaneseCharactersYellow}
                          alt="Placeholder"
                          layout="responsive"
                          className="w-full will-change"
                          priority
                        />
                      </div>
                      <span className="font-mono uppercase leading-none block text-right text-[32px] md:text-[48px] xl:text-[62px] ml-auto">${productData.variants.edges[0].node.price}</span>
                    </div>
                    <div className="relative">
                      <h1 className={`uppercase text-[14vw] xl:text-[15vw] leading-1 tracking-[-0.02em] text-center break-all will-change relative text-red mb-0 pb-0`}>
                        <div className="relative flex overflow-x-hidden will-change">
                          <div className="motion-safe:animate-marquee-slow whitespace-nowrap flex items-center">
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                          </div>

                          <div className="absolute top-0 motion-safe:animate-marquee-slow-2 whitespace-nowrap flex items-center">
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                            <span className="mx-[3vw]">{productData.title}</span>
                          </div>
                        </div>
                      </h1>

                      {productData.images && (
                        <div className="w-[55vw] md:w-[28vw] absolute top-0 left-0 right-0 mx-auto mt-[-15vw] md:mt-[-7vw]" data-scroll data-scroll-speed={2}>
                          <Image
                            src={productData.images.edges[0].node.originalSrc}
                            alt="Placeholder"
                            layout="responsive"
                            className="w-full"
                            width={productData.images.edges[0].node.width}
                            height={productData.images.edges[0].node.height}
                            priority
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-end px-[20px] md:px-[30px] mb-[-2vw]">
                      <div className="w-auto">
                        <span className="uppercase">Ships in 1-3 Days (US Only)</span>
                      </div>
                      
                      <div className="w-auto ml-auto mb-5">
                        {/* <div className="flex space-x-5 uppercase text-xl md:text-2xl 
                        xl:text-3xl w-full justify-end mb-5">
                          <span>Black</span>
                          <span>Red</span>
                          <span>White</span>
                        </div> */}
                        <div className="flex space-x-8 uppercase text-xl md:text-2xl xl:text-3xl w-full justify-end">
                          {
                            productData.variants.edges.map(item => (
                              <button
                                onClick={() => handleSizeChange(item.node.id)}
                                id={item.node.id}
                                key={item.node.id}
                                className={`block p-2 rounded-md ${ variantId === item.node.id ? 'bg-red' : ''}`}
                              >
                                {item.node.title}
                              </button>
                            ))
                          }
                        </div>
                      </div>

                      <div className="w-full text-right">
                        <button onClick={handleAddToCart} className={`bg-yellow text-off-black font-display uppercase leading-none p-5 ${ isLoading ? 'cursor-disabled opacity-10' : ''}`}>
                          ADD TO CART
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
              
              <m.div variants={fade}>
                { productData.description && (
                  <Container>
                    <div className="flex justify-center mb-[8vw] md:mb-[10vw] xl:mb-[12vw]">
                      <div className="w-10/12 md:w-8/12" data-scroll data-scroll-speed={0.75}>
                        <p className="text-[23px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] leading-[1.175] text-indent tracking-tight">{productData.description}</p>
                      </div>
                    </div>
                  </Container>
                )}

                <div className="overflow-hidden mx-[-5vw] md:mx-[-3vw] xl:mx-[-2vw] pt-[4vw]">
                  <div className="w-full py-[1.5vw] md:py-[1vw] xl:py-[0.5vw] bg-pink dark:bg-yellow transition-colors ease-in-out duration-500 rotate-[3deg] whitespace-nowrap text-off-black font-display uppercase tracking-tight text-[4vw] md:text-[2.25vw] xl:text-[2vw] mb-[18vw] md:mb-[14vw]">
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

                <Container>
                  <HeadingKanji heading="Moar Swag!" subHeading="Get the merch and get the vibe" kanji={japaneseCharacters} />

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
                </Container>

                <Container>
                  <Footer />
                </Container>
              </m.div>
          
            </m.div>
          </div>
        </LocomotiveScrollProvider>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {    
    const product = String(slug.node.handle)
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.product)  

  return {
    props: {
      productData,
    },
  }
}
