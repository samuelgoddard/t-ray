import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import Logo from '@/components/logo'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domMax, m } from "framer-motion"
import HeadingKanji from '@/components/heading-kanji'
import HistoryCarousel from '@/components/history-carousel'
import Rollover from '@/components/rollover'
import Image from 'next/image'
import trayImage from '@/public/images/t-ray.webp'
import trayPortrait from '@/public/images/t-ray-portrait.webp'
import trayText from '@/public/images/imreallyatrex.svg'
import trayTextDark from '@/public/images/imreallyatrexdark.svg'
import tee from '@/public/images/tee.webp'
import homeKanji from '@/public/images/home-kanji.svg'
import japaneseCharacters from '@/public/images/japanese-characters.svg'
import { NextSeo } from 'next-seo'

const SLIDE_COUNT = 5
const slides = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
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
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mt-[100px] md:mt-[140px] xl:mt-[160px]"
          data-scroll-section
        >
          <Container>
            <m.div variants={fade}>
              <div className="relative mb-[15vw] md:mb-[30vw] xl:mb-[30vw]">
                <h1 className="uppercase text-[13vw] leading-[0.82] text-red text-center break-all will-change relative">
                  ImReallyA Trex

                  <div className="absolute inset-0 flex justify-center pointer-events-none opacity-0 dark:opacity-100 transition-opacity ease-in-out duration-500">
                    <div className="w-[88.65vw] pointer-events-none motion-safe:animate-float">
                      <Image
                        src={trayText}
                        alt="ImReallyATrex"
                        layout="responsive"
                        className="w-full will-change"
                      />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex justify-center pointer-events-none opacity-100 dark:opacity-0 transition-opacity ease-in-out duration-500">
                    <div className="w-[88.65vw] pointer-events-none motion-safe:animate-float">
                      <Image
                        src={trayTextDark}
                        alt="ImReallyATrex"
                        layout="responsive"
                        className="w-full will-change"
                      />
                    </div>
                  </div>
                </h1>
                
                <div className="md:absolute inset-0 z-10 w-full h-full mt-[9vw] md:mt-[15.5vw] flex items-center justify-center">
                  <m.div
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.45}
                    dragTransition={{ bounceDamping: 20 }}
                    className="w-11/12 md:w-7/12 relative will-change cursor-move"
                    data-scroll
                    data-scroll-speed="1.25"
                  >
                    <Image
                      src={trayImage}
                      alt="Placeholder"
                      layout="responsive"
                      className="w-full will-change pointer-events-none"
                      placeholder="blur"
                    />

                    <div className="absolute bottom-0 left-0 ml-[-6.5vw] md:ml-[-5vw] mb-[-6.5vw] md:mb-[-5vw] will-change" data-scroll data-scroll-speed="0.75">
                      <div className="w-[20vw] md:w-[14.5vw] motion-safe:animate-spin-slow">
                        <Image
                          src={homeKanji}
                          alt="Kanji Letters"
                          layout="responsive"
                          className="w-full will-change"
                        />
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
              
              <div className="flex justify-center mb-[14vw] md:mb-[10vw]">
                <div className="w-11/12 md:w-8/12" data-scroll data-scroll-speed="1">
                  <p className="text-[23px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] leading-[1.175] text-indent tracking-tight">T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010. He and the band found international success the following year with the release of the singles “Twilight” and “Lick Ya Down” before releasing their debut album, Bajan Style, in 2012.</p>
                </div>
              </div>

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

              <div className="flex justify-center mb-[25vw] md:mb-[16vw]">
                <div className="w-11/12 md:w-10/12 xl:w-9/12">
                  <div className="flex flex-wrap md:mx-[-3vw] items-center md:items-start xl:items-center">
                    <div className="w-full md:w-6/12 xl:w-7/12 md:px-[3vw] mb-8 md:mb-0 will-change" data-scroll-speed="0.35">
                      <Image
                        src={trayPortrait}
                        alt="Placeholder"
                        layout="responsive"
                        className="w-full dark:mix-blend-lighten rounded-md will-change"
                        placeholder="blur"
                      />
                    </div>
                    <div className="w-full md:w-6/12 xl:w-5/12 md:px-[3vw]" data-scroll data-scroll-speed="0.65">
                      <p className="text-[19px] md:text-[22px] xl:text-[24px] 2xl:text-[26px] leading-[1.175] text-indent tracking-tight mb-5 md:mb-8">T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010. He and the band found international success the following year with the release of the singles “Twilight” and “Lick Ya Down” before releasing their debut album, Bajan Style, in 2012.</p>

                      <ul className="text-[17px] md:text-[20px] xl:text-[22px] leading-[1.25] tracking-tight">
                        <li className="mb-2">
                          <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                            <div className="overflow-hidden relative">
                              <Rollover label="On Youtube" underline />
                            </div>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                            <div className="overflow-hidden relative">
                              <Rollover label="On Instagram" underline />
                            </div>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                            <div className="overflow-hidden relative">
                              <Rollover label="On Twitter" underline />
                            </div>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                            <div className="overflow-hidden relative">
                              <Rollover label="On Spotify" underline />
                            </div>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a href="#" className="flex items-center group" rel="noopener noreferrer" target="_blank">
                            <span className="text-red dark:text-yellow mr-3 transition-colors ease-in-out duration-500">→</span>
                            <div className="overflow-hidden relative">
                              <Rollover label="On Apple Music" underline />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <HeadingKanji heading="History" subHeading="A look back in time" kanji={japaneseCharacters} />
            </m.div>
          </Container>
          
          <m.div variants={fade}>
            <div className="mb-[32vw] md:mb-[15vw] xl:mb-[20vw]">
              <HistoryCarousel slides={slides} />
            </div>
          </m.div>
          
          <Container>
            <m.div variants={fade}>
              <HeadingKanji heading="Swag!" subHeading="Get the merch and get the vibe" kanji={japaneseCharacters} />

              <div className="flex justify-center mb-[25vw] md:mb-[16vw]">
                <div className="w-full md:w-11/12">
                  <div className="flex flex-wrap justify-center md:-mx-4">
                    <div className="w-full md:w-1/3 md:px-4">
                      <div className="w-9/12 mx-auto mb-6" data-scroll data-scroll-speed="0.85">
                        <Image
                          src={tee}
                          alt="Placeholder"
                          layout="responsive"
                          className="w-full"
                          placeholder="blur"
                        />
                      </div>

                      <svg className="w-16 mx-auto mb-5" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>

                      <span className="block text-[32px] md:text-[38px] xl:text-[48px] leading-[0.82] font-display uppercase text-center mb-2 md:mb-4">Dino Tee</span>
                      
                      <span className="block text-[22px] md:text-[24px] xl:text-[26px] leading-[0.82] uppercase text-center font-mono">$45</span>
                    </div>

                    <div className="w-full md:w-1/3 md:px-4 hidden md:block">
                      <div className="w-9/12 mx-auto mb-6" data-scroll data-scroll-speed="0.25">
                        <Image
                          src={tee}
                          alt="Placeholder"
                          layout="responsive"
                          className="w-full"
                          placeholder="blur"
                        />
                      </div>

                      <svg className="w-16 mx-auto mb-5" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>

                      <span className="block text-[32px] md:text-[38px] xl:text-[48px] leading-[0.82] font-display uppercase text-center mb-2 md:mb-4">Dino Tee</span>
                      
                      <span className="block text-[22px] md:text-[24px] xl:text-[26px] leading-[0.82] uppercase text-center font-mono">$45</span>
                    </div>

                    <div className="w-full md:w-1/3 md:px-4 hidden md:block">
                      <div className="w-9/12 mx-auto mb-6" data-scroll data-scroll-speed="0.85">
                        <Image
                          src={tee}
                          alt="Placeholder"
                          layout="responsive"
                          className="w-full"
                          placeholder="blur"
                        />
                      </div>

                      <svg className="w-16 mx-auto mb-5" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>

                      <span className="block text-[32px] md:text-[38px] xl:text-[48px] leading-[0.82] font-display uppercase text-center mb-2 md:mb-4">Dino Tee</span>
                      
                      <span className="block text-[22px] md:text-[24px] xl:text-[26px] leading-[0.82] uppercase text-center font-mono">$45</span>
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-[8vw] leading-[0.82] text-red will-change relative block font-display uppercase pb-4 mb-6 md:mb-12 xl:mb-14 border-b border-red">Got Email?</span>

              <div className="w-10/12 md:w-8/12">
                <p className="text-[22px] md:text-[32px] xl:text-[38px] 2xl:text-[46px] leading-[1.2] tracking-tight mb-5 md:mb-8">Get updates, drops, advance ticket infomation and more direct to your inbox. No spam!</p>
              </div>

              <div className="flex lg:mb-[18vw] pt-[50px] md:pt-[100px] xl:pt-[180px]">
                <div className="w-full">
                  <Footer />
                </div>
              </div>
            </m.div>
          </Container>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
