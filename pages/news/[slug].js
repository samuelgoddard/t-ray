import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, intro } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import MetaTeaser from '@/components/meta-teaser'
import BodyRenderer from '@/components/body-renderer'
import ImageWrapper from '@/components/image-wrapper'

const query = `*[_type == "news" && slug.current == $slug][0]{
  title,
  date,
  teaserImage {
    asset -> {
      ...
    }
  },
  contentBlocks[]{
    ...
  },
  slug {
    current
  }
}`

const pageService = new SanityPageService(query)

export default function News(initialData) {
  const { data: { title, date, slug, teaserImage, contentBlocks }  } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo
        title={title}
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
                <m.div variants={fade} className="flex flex-wrap justify-center mb-[5vw] md:mb-[8vw] xl:mb-[10vw]">
                  <div className="w-full md:w-9/12 xl:w-10/12 max-w-screen-2xl">
                    <div className="mb-6 md:mb-10 xl:mb-12">
                      <MetaTeaser marqueeForce date={date} type='Latest News' />
                    </div>
                    <h1 className="text-red font-display uppercase text-[8vw] md:text-[7.5vw] xl:text-[7vw] 2xl:text-[120px] leading-[0.9] w-full md:w-11/12 block">{title}</h1>

                    <div className="flex flex-wrap items-center mt-8 mb-6 md:mb-8 md:mt-12 xl:mt-16">
                      <a href="#" className="block uppercase text-[12px] md:text-base">Copy Link</a>
                      <span className="block uppercase text-[10px] mx-2 md:mx-3">&bull;</span>
                      <a href="#" className="block uppercase text-[12px] md:text-base">Share On Twitter</a>

                      <Link href="/news">
                        <a className="ml-auto block uppercase text-[12px] md:text-base">Back to feed</a>
                      </Link>
                    </div>

                    <div className="w-full mb-12 md:mb-28 xl:mb-40">
                      <ImageWrapper
                        image={teaserImage}
                        className="w-full will-change release-teaser__image"
                        baseWidth={1920}
                        baseHeight={1080}
                        alt={title}
                      />
                    </div>

                    <div className="w-full">
                      <BodyRenderer body={contentBlocks} />
                    </div>
                  </div>
                </m.div>
                
                <Footer/>
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
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('news')
  return {
    paths: paths,
    fallback: false,
  };
}