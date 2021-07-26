import { getProductSlugs, getProduct } from '@/lib/shopify'
import { useRef, useState } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import Logo from '@/components/logo'
import ProductTeaser from '@/components/product-teaser'
import tee from '@/public/images/tee.webp'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import { NextSeo } from 'next-seo'
import { useCartContext, useAddToCartContext } from '@/context/store'
import SanityPageService from '@/services/sanityPageService'
import ReleaseTeaser from '@/components/release-teaser'

const query = `{
  "musicVideos": *[_type == "musicVideos"] | order(date desc) {
    title,
    url,
    videoSnippetUrl {
      asset-> {
        ...
      }
    },
    teaserImage {
      asset -> {
        ...
      }
    },
    purchaseLinks[]{
      title,
      url
    },
    date
  }
}`

const pageService = new SanityPageService(query)

export default function Product(initialData) {
  const { data: { productData, musicVideos } } = pageService.getPreviewHook(initialData)()
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
                <div className="relative min-h-screen flex items-center justify-center mb-12 md:mb-[9vw] xl:mb-[12vw]">
                  <div className="w-full">
                    <div className="flex flex-wrap items-end px-[20px] md:px-[30px] mb-[-2vw]">
                      <div className="w-14 md:w-20 xl:w-32 text-red dark:text-yellow">
                        <svg className="w-full" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>
                      </div>
                      <span className="font-mono uppercase leading-none block text-right text-[32px] md:text-[48px] xl:text-[62px] ml-auto">${productData.variants.edges[0].node.price}</span>
                    </div>
                    <div className="relative">
                      <h1 className={`uppercase text-[14vw] md:text-[18vw] xl:text-[15vw] leading-1 tracking-[-0.02em] text-center break-all will-change relative text-blue dark:text-red mb-0 pb-0 transition ease-in-out duration-100`}>
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
                        <div className="w-[55vw] md:w-[28vw] absolute top-0 left-0 right-0 mx-auto mt-[-15vw] md:mt-[-5vw]" data-scroll data-scroll-speed={2}>
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

                    <div className="flex flex-wrap items-end px-[20px] md:px-[30px] absolute bottom-0 left-0 right-0 w-full mb-[20px] md:mb-[30px]">
                      <div className="w-auto">
                        <span className="w-16 h-16 border-yellow border rounded-full block mb-5"></span>
                        <span className="uppercase">Ships in 1-3 Days (US Only)</span>
                      </div>
                      
                      <div className="w-auto ml-auto">
                        {/* <div className="flex space-x-5 uppercase text-xl md:text-2xl 
                        xl:text-3xl w-full justify-end mb-5">
                          <span>Black</span>
                          <span>Red</span>
                          <span>White</span>
                        </div> */}
                        <div className="mb-4">
                          { productData.variants.edges.length > 1 && (
                            <div className="flex space-x-5 uppercase text-xl md:text-2xl xl:text-3xl w-full justify-end">
                              { productData.variants.edges.map(item => (
                                <button
                                  onClick={() => handleSizeChange(item.node.id)}
                                  id={item.node.id}
                                  key={item.node.id}
                                  className={`block p-2 rounded-lg transition-colors ease-in-out duration-300 ${ variantId === item.node.id ? 'bg-yellow dark:bg-red' : ''}`}
                                >
                                  {item.node.title}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="w-full text-right">
                          <button onClick={handleAddToCart} className={`transition-colors ease-in-out duration-300 bg-red dark:bg-yellow text-off-white dark:text-off-black font-display uppercase leading-none p-5 rounded-lg ${ isLoading ? 'cursor-disabled opacity-10' : ''}`}>
                            Add To Bag
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

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
                  <HeadingKanji heading="On Film" subHeading="New vids from the reel" kanji={japaneseCharacters} />

                  <div className="justify-center mb-[25vw] md:mb-[16vw] md:mt-[-3.5vw] flex-wrap">
                    <div className="w-10/12 md:w-10/12 xl:w-9/12 2xl:w-8/12 mx-auto">
                      <div className="flex flex-wrap md:-mx-5 xl:-mx-8">
                        {musicVideos.slice(0,2).map((e, i) => {
                          let href = null;
                          let external = false;

                          if (e.url) {
                            href = e.url
                            external = true
                          } else {
                            external = false
                            href = null
                          }
                          return (
                            <div key={i} className={`w-full md:w-1/2 md:px-5 xl:px-8 ${ i == 1 ? 'hidden md:block' : ''}`}>
                              <ReleaseTeaser
                                href={href}
                                video
                                videoOverlay={e.videoSnippetUrl ? e.videoSnippetUrl.asset.url : false}
                                musicVideo
                                external={external}
                                image={e.teaserImage.asset}
                                title={e.title} date={e.date}
                                type="Music Video"
                                purchaseLinks={e.purchaseLinks}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  
                  <Footer noPad/>
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

export async function getStaticProps(context) {
  const cms = await pageService.fetchQuery(context)
  const productData = await getProduct(context.params.product)  

  return {
    props: { ...cms, productData }
  }
}
