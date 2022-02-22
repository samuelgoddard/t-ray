import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, fadeDelay } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import newsText from '@/public/images/news.svg'
import newsTextDark from '@/public/images/news-dark.svg'
import HeadingKanji from '@/components/heading-kanji'
import kanjiMore from '@/public/images/kanji-more.svg'
import insta from '@/public/images/insta.jpg'
import { NextSeo } from 'next-seo'
import ListTeaser from '@/components/list-teaser'
import SanityPageService from '@/services/sanityPageService'
import { IntroContext } from '@/context/intro'

const query = `{
  "news": *[_type == "news"] | order(date desc) {
    title,
    teaserImage {
      asset -> {
        ...
      }
    },
    externalUrl,
    date,
    slug {
      current
    }
  },
  "music": *[_type == "music"] | order(date desc) {
    title,
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
  "musicVideos": *[_type == "musicVideos"] | order(order asc) {
    title,
    order,
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
  },
}`

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const { data: { news, musicVideos, music }  } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  const feed = news.concat(music)
  return (
    <Layout>
      <NextSeo
        title="Feed"
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://imreallyatrex.com',
          title: `Feed | ImReallyATRex`,
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
                <div>
                  <div className="relative mb-[10px] md:mb-[3vw]">
                    <div className="overflow-hidden">
                      <h1 className={`uppercase text-[15vw] md:text-[13vw] leading-[0.85] tracking-[-0.02em] text-center break-all will-change relative text-red`}>
                        <m.span variants={fadeDelay} className="block">Feed</m.span>

                        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500 mt-[-0.01em] ml-[0.025em]">
                          <div className="overflow-hidden">
                            <m.div variants={fade}>
                              <div className="w-[55vw] md:w-[47vw] pointer-eveants-none motion-safe:animate-float">
                                <Image
                                  src={newsTextDark}
                                  alt="Feed Lettering"
                                  layout="responsive"
                                  className="w-full will-change"
                                  priority
                                />
                              </div>
                            </m.div>
                          </div>
                        </div>

                        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500 mt-[-0.01em] ml-[0.025em]">
                          <m.div variants={fade} className="w-[55vw] md:w-[47vw] pointer-events-none motion-safe:animate-float">
                            <Image
                              src={newsText}
                              alt="Feed Lettering"
                              layout="responsive"
                              className="w-full will-change"
                              priority
                            />
                          </m.div>
                        </div>
                      </h1>
                    </div>
                  </div>
                </div>
                
                <m.div variants={fade}>
                  <div className="flex justify-center mb-[17vw] md:mb-[3vw] max-w-screen-2xl mx-auto mt-4 md:mt-0">
                    <div className="w-full md:w-10/12 xl:w-10/12">
                      <div className="flex flex-wrap md:-mx-8 lg:-mx-12 xl:-mx-16 justify-center">
                        <div className="w-full md:w-[60%] xl:w-2/3 md:px-8 lg:px-12 xl:px-16 mb-0 md:mb-0">
                          {musicVideos.slice(0,3).map((e, i) => {
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
                              <div className="mb-10 md:mb-16 xl:mb-20" key={i}>
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
                        <div className="w-full md:w-[40%] xl:w-1/3 md:px-8 lg:px-12 xl:px-16 mb-10 md:mb-8 md:mt-[6vw]" data-scroll data-scroll-speed={1.2}>
                          {feed.slice(0, 3).map((e, i) => {
                            let href = null;
                            let external = false;

                            if (e.externalUrl) {
                              href = e.externalUrl
                              external = true
                            } else if (e.slug) {
                              href = `/feed/${e.slug.current}`
                            } else {
                              href = null
                            }
                            return (
                              <div className="mb-10 md:mb-16 xl:mb-20" key={i}>
                                { i === 2 && (
                                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/imreallyatrex" rel="noopener noreferrer" className="w-full bg-pink text-center rounded-md px-5 xl:px-6 py-6 xl:py-8 mb-10 md:mb-16 xl:mb-20 block">

                                    <svg className="w-[52px] md:w-14 xl:w-16 mx-auto mb-4 xl:mb-2 text-yellow" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>

                                    <span className="text-yellow font-display uppercase text-lg 
                                  hidden xl:text-[17px] 2xl:text-[22px] xl:block mb-4 break-all">@imreallyatrex</span>

                                    <div className="rounded-lg w-10/12 xl:w-9/12 mb-5 mx-auto">
                                      <Image
                                        src={insta}
                                        alt="T-Ray Instagram"
                                        layout="responsive"
                                        className="w-full will-change rounded-lg"
                                        priority
                                      />
                                    </div>

                                    <span className="inline-block border-white border rounded-full text-white px-4 py-2 text-sm leading-[1.2]">Follow on Instagram</span>
                                  </a>
                                )}
                                <ReleaseTeaser
                                  href={href}
                                  external={external}
                                  image={e.teaserImage ? e.teaserImage.asset : e.coverArtwork.asset} title={e.title}
                                  date={e.date}
                                  type={e.type ? e.type : "Latest News"}
                                  purchaseLinks={e.purchaseLinks}
                                />
                              </div>  
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  <HeadingKanji large heading="Moar!!" subHeading={"Previous news and views"} kanji={kanjiMore} />

                  <div className="border-t border-current w-full md:w-11/12 mx-auto mb-[20vw] md:mb-[16vw] mt-[80px] md:mt-[-4vw]">
                    <ul>
                      {musicVideos.slice(3).map((e, i) => {
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
                          <li key={i}>
                            <ListTeaser title={e.title} date={e.date} type="Music Video" href={href} external={external} image={e.teaserImage ? e.teaserImage.asset : e.coverArtwork.asset} purchaseLinks={e.purchaseLinks} />
                          </li>
                      )
                      })}
                      {feed.slice(3).map((e, i) => {
                        let href = null;

                        if (e.externalUrl) {
                          href = e.externalUrl
                        } else if (e.slug) {
                          href = `/feed/${e.slug.current}`
                        } else {
                          href = null
                        }

                        return (
                          <li key={i}>
                            <ListTeaser title={e.title} date={e.date} type={e.type ? e.type : "Latest News"} image={e.teaserImage ? e.teaserImage.asset : e.coverArtwork.asset} purchaseLinks={e.purchaseLinks} />
                          </li>
                        )
                      })}
                    </ul>
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