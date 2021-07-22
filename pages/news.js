import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, intro } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import ReleaseTeaser from '@/components/release-teaser'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import albumArtwork from '@/public/images/album-art.jpg'
import videoArtwork from '@/public/images/video-art.jpg'
import newsText from '@/public/images/news.svg'
import newsTextDark from '@/public/images/news-dark.svg'
import HeadingKanji from '@/components/heading-kanji'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import MetaTeaser from '@/components/meta-teaser'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

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
  "musicVideos": *[_type == "musicVideos"] | order(date desc) {
    title,
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

  const feed = news.concat(music)
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
                      News

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500 mt-[0.065em] ml-[0.025em]">
                        <div className="w-[59vw] pointer-eveants-none motion-safe:animate-float">
                          <Image
                            src={newsText}
                            alt="News Lettering"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>

                      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500 mt-[0.065em] ml-[0.025em]">
                        <div className="w-[59vw] pointer-events-none motion-safe:animate-float">
                          <Image
                            src={newsTextDark}
                            alt="News Lettering"
                            layout="responsive"
                            className="w-full will-change"
                            priority
                          />
                        </div>
                      </div>
                    </h1>
                  </div>

                  <div className="flex justify-center mb-[25vw] md:mb-[2vw] max-w-screen-2xl mx-auto mt-20 md:mt-0">
                    <div className="w-10/12 md:w-10/12 xl:w-10/12">
                      <div className="flex flex-wrap md:-mx-12 xl:-mx-16 justify-center">
                        <div className="w-full md:w-2/3 md:px-12 xl:px-16 mb-8 md:mb-0">
                          {musicVideos.map((e, i) => {
                            let href = null;

                            if (e.externalUrl) {
                              href = e.externalUrl
                            } else if (e.slug) {
                              href = `/news/${e.slug.current}`
                            } else {
                              href = null
                            }
                            return (
                              <div className="mb-10 md:mb-16 xl:mb-20" key={i}>
                                <ReleaseTeaser
                                  href={href}
                                  video
                                  image={e.teaserImage.asset}
                                  title={e.title} date={e.date}
                                  type="Music Video"
                                  purchaseLinks={e.purchaseLinks}
                                />
                              </div>  
                            )
                          })}
                        </div>
                        <div className="w-9/12 md:w-1/3 md:px-12 xl:px-16 mb-8 md:mt-[6vw]" data-scroll data-scroll-speed={1.2}>
                          {feed.map((e, i) => {
                            let href = null;

                            if (e.externalUrl) {
                              href = e.externalUrl
                            } else if (e.slug) {
                              href = `/news/${e.slug.current}`
                            } else {
                              href = null
                            }
                            return (
                              <div className="mb-10 md:mb-16 xl:mb-20" key={i}>
                                <ReleaseTeaser
                                  href={href}
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

                  <HeadingKanji heading="Moar!!" kanji={japaneseCharacters} />

                  <div className="border-t border-current w-11/12 mx-auto mb-[20vw] md:mb-[16vw]">
                    <ul>
                      <li className="">
                        <Link href="/news">
                          <a className="flex flex-wrap justify-start py-5 items-center border-b border-current">
                            <span className="block w-full lg:w-auto mb-3 lg:mb-0">
                              {/* <MetaTeaser/> */}
                            </span>

                            <span className="block flex-1 mr-auto text-[19px] md:text-[21px] xl:text-[26px] leading-none text-outline uppercase font-display lg:pl-[5vw] pr-4 mb-4 md:mb-0">2022 Tour Dates Announced</span>

                            <span className="flex uppercase md:justify-center space-x-2 text-sm md:text-base ml-auto w-full md:w-auto">
                              <span>Spotify</span>
                              <span>&bull;</span>
                              <span>Apple Music</span>
                              <span>&bull;</span>
                              <span>Amazon</span>
                            </span>
                          </a>
                        </Link>
                      </li>
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