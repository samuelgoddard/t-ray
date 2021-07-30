import { useContext, useEffect, useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, intro } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Context } from '../context/state'

// const query = `*[_type == "news" && slug.current == $slug][0]{
//   title,
//   date,
//   teaserImage {
//     asset -> {
//       ...
//     }
//   },
//   contentBlocks[]{
//     ...
//   },
//   slug {
//     current
//   }
// }`

// const pageService = new SanityPageService(query)

export default function Terms() {
  // const { data: { title, date, slug, teaserImage, contentBlocks }  } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)
  const [introContext, setIntroContext] = useContext(Context);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title={"Terms & Conditions"}
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://t-ray.vercel.app/',
          title: `Terms & Conditions | T-Ray`,
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
                <m.div variants={fade} className="flex flex-wrap justify-center mb-[5vw] md:mb-[8vw] xl:mb-[10vw]">
                  <div className="w-full md:w-9/12 xl:w-10/12 max-w-screen-2xl">
                    <h1 className="text-red font-display uppercase text-[8vw] md:text-[7.5vw] xl:text-[7vw] 2xl:text-[120px] leading-[0.9] w-full md:w-11/12 block mb-12 md:mb-16">Terms &amp; Conditions</h1>

                    {/* <div className="w-full mb-12 md:mb-28 xl:mb-40 will-change">
                      <ImageWrapper
                        image={teaserImage}
                        className="w-full will-change release-teaser__image"
                        baseWidth={1920}
                        baseHeight={1080}
                        alt={title}
                      />
                    </div> */}

                    <div className="w-11/12 md:w-8/12 transition-colors ease-in-out duration-500 xl:w-7/12 text-[20px] md:text-[24px] xl:text-[32px] leading-[1.175] text-indent tracking-normal content mb-8">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    
                    <div className="w-11/12 md:w-8/12 transition-colors ease-in-out duration-500 xl:w-7/12 text-[18px] md:text-[20px] xl:text-[23px] leading-[1.175] tracking-normal content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.</li>
                        
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                      </ul>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

// export async function getStaticProps(context) {
//   const props = await pageService.fetchQuery(context)
//   return {
//     props
//   };
// }

// export async function getStaticPaths() {
//   const paths = await pageService.fetchPaths('news')
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }