import { useContext, useEffect, useRef, useState } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import { useRouter } from 'next/router'
import Container from '@/components/container'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import SanityPageService from '@/services/sanityPageService'
import MetaTeaser from '@/components/meta-teaser'
import BodyRenderer from '@/components/body-renderer'
import ImageWrapper from '@/components/image-wrapper'
import { IntroContext } from '@/context/intro'

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
  const router = useRouter()
  const [copied, setCopied] = useState(false);
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);
  
  const copy = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
    <Layout>
      <NextSeo
        title={title}
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://imreallyatrex.com',
          title: `${title} | ImReallyATRex`,
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
                <m.div variants={fade} className="flex flex-wrap justify-center md:mb-[0vw] xl:mb-[0vw]">
                  <div className="w-full md:w-9/12 xl:w-10/12 max-w-screen-2xl">
                    <div className="mb-4 md:mb-10 xl:mb-12 transition-colors ease-in-out duration-500">
                      <MetaTeaser marqueeForce date={date} type='Latest News' />
                    </div>
                    <h1 className="text-red font-display uppercase text-[10.5vw] md:text-[7.5vw] xl:text-[7vw] 2xl:text-[120px] leading-[0.9] w-full md:w-11/12 block">{title}</h1>

                    <div className="flex flex-wrap items-center mt-8 mb-5 md:mb-3 md:mt-12 xl:mt-16">
                      <button className="block group uppercase text-[12px] md:text-base focus:border-none" onClick={copy}>
                        <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                          <div className={`relative py-[2px]`}>
                            <div className={`transition-transform ease-in-out duration-500 w-full will-change md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px]`}>
                              <span className={`md:block absolute top-0 left-0 mt-[-32px]`}>{!copied ? "Copy link" : "Link Copied"}</span>
                              <span className={`block`}>{!copied ? "Copy link" : "Link Copied"}</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-current w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-300 delay-150"></div>
                          </div>
                        </div>
                      </button>

                      <span className="block uppercase text-[10px] mx-2 md:mx-3">&bull;</span>

                      <a target="_blank" rel="noopener noreferrer" href={`http://twitter.com/share?text=${title}&url=https://iamreallyatrex.com${router.asPath}`} className="block group uppercase text-[12px] md:text-base focus:border-none">
                        <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                          <div className={`relative py-[2px]`}>
                            <div className={`transition-transform ease-in-out duration-500 w-full will-change md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px]`}>
                              <span className={`md:block absolute top-0 left-0 mt-[-32px]`}>Share On Twitter</span>
                              <span className={`block`}>Share On Twitter</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-current w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-300 delay-150"></div>
                          </div>
                        </div>
                      </a>

                      <Link href="/feed">
                      <a className="block group uppercase text-[12px] md:text-base focus:border-none ml-auto">
                        <div className="overflow-hidden relative transition-colors ease-in-out duration-500">
                          <div className={`relative py-[2px]`}>
                            <div className={`transition-transform ease-in-out duration-500 w-full will-change md:group-hover:translate-y-[32px] md:group-focus:translate-y-[32px]`}>
                              <span className={`md:block absolute top-0 left-0 mt-[-32px]`}>Back To Feed</span>
                              <span className={`block`}>Back To Feed</span>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-current w-0 group-hover:w-full group-focus:w-full transition-all ease-in-out duration-300 delay-150"></div>
                          </div>
                        </div>
                      </a>
                      </Link>
                    </div>
                  </div>
                </m.div>
              </Container>

              <Container bleedMobile>
                <m.div variants={fade} className="flex flex-wrap justify-center mb-[5vw] md:mb-[8vw] xl:mb-[10vw]">
                  <div className="w-full md:w-9/12 xl:w-10/12 max-w-screen-2xl">

                    <div className="w-full mb-5 md:mb-28 xl:mb-40 will-change">
                      <ImageWrapper
                        image={teaserImage}
                        className="w-full will-change release-teaser__image"
                        baseWidth={1920}
                        baseHeight={1080}
                        alt={title}
                      />
                    </div>

                    <div className="w-full px-[20px] md:px-0">
                      <BodyRenderer body={contentBlocks} />
                    </div>
                  </div>
                </m.div>

                <div className="px-[20px] md:px-0 md:mt-[-10vw]">
                  <Footer/>
                </div>  
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