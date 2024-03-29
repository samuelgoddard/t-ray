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
import { IntroContext } from '@/context/intro'

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
  const [introContext, setIntroContext] = useContext(IntroContext);

  useEffect(() => {
    setIntroContext(true)
  },[]);

  return (
    <Layout>
      <NextSeo
        title={"Terms & Conditions"}
        description="T-Ray Armstrong, aka IAmReallyATrex, is a drummer and musician, born on May 31, 1993 in Barbados. He began his career playing with the Barbadian band Cover Drive in 2010."
        openGraph={{
          url: 'https://imreallyatrex.com',
          title: `Terms & Conditions | ImReallyATRex`,
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
                      <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from https://imreallyatrex.com/ (the “Site”).</p>
                    </div>
                    
                    <div className="w-11/12 md:w-8/12 transition-colors ease-in-out duration-500 xl:w-7/12 text-[18px] md:text-[20px] xl:text-[23px] leading-[1.175] tracking-normal content">
                      <h2 className="mt-[8vw] md:mt-[5vw]">PERSONAL INFORMATION WE COLLECT</h2>
                      <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>
                      
                      <p>We collect Device Information using the following technologies:</p>
                      
                      <ul>
                        <li>“Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.</li>
                        <li>“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.</li>
                        <li>“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</li>
                      </ul>

                      <p>Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.  We refer to this information as “Order Information.”</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">OFFLINE DATA, PURCHASED MARKETING DATA/LISTS</h2>

                      <p>When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>

                      <p>We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).  Additionally, we use this Order Information to: Communicate with you;Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</p>

                      <p>We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">SHARING YOUR PERSONAL INFORMATION</h2>

                      <p>We share your Personal Information with third parties to help us use your Personal Information, as described above.  For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here:  https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout. Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">BEHAVIOURAL ADVERTISING</h2>

                      <p>As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.  For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.</p>
                      
                      <p>You can opt out of targeted advertising by:</p>
                      <ul>
                        <li>FACEBOOK - https://www.facebook.com/settings/?tab=ads</li>
                        <li>GOOGLE - https://www.google.com/settings/ads/anonymous</li>
                        <li>BING - https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</li>
                      </ul>
                      
                      <p>Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance’s opt-out portal at:  http://optout.aboutads.info/.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">DO NOT TRACK</h2>

                      <p>Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">YOUR RIGHTS</h2>

                      <p>If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above.  Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">Data Retention</h2>

                      <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>

                      <h2 className="mt-[8vw] md:mt-[5vw]">CHANGES</h2>

                      <p>We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>
                      
                      <h2 className="mt-[8vw] md:mt-[5vw]">CONTACT US</h2>
                        
                      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at rexroomstudios@gmail.com or by mail using the details provided below:<br/><br/> 5105 Scarsdale Road, MD, 20816, United States</p>
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