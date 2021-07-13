import Link from 'next/link'
import Image from 'next/image'

import addToBag from '@/public/images/add-to-bag.svg'
import productBg from '@/public/images/product-bg.svg'

export default function ProductTeaser({ href, image, title, price }) {
  return(
    <Link href={href}>
      <a className="group relative block w-full pt-2 md:pt-4 xl:pt-6 2xl:pt-10">
        <div className="relative z-10">
          <div className="w-9/12 mx-auto mb-6" data-scroll data-scroll-speed="0.25">
            <Image
              src={image}
              alt="Placeholder"
              layout="responsive"
              className="w-full md:group-hover:scale-110 transition ease-in-out duration-500 delay-75 md:group-hover:-rotate-6"
              placeholder="blur"
            />
          </div>

          <div className="origin-top md:group-hover:rotate-2 transition ease-in-out duration-500">
            <svg className="w-8 md:w-12 xl:w-16 mx-auto mb-5" viewBox="0 0 64 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.117 4.042h6.633v9.9c0 2.013.165 2.574.66 3.003.462.396 1.221.561 1.848.561h1.716c.594 0 1.254-.099 1.617-.264.462-.231.792-.594.99-1.155.165-.495.264-1.947.297-3.168-.594-.198-1.386-.561-1.815-.99-.033 1.287-.066 2.277-.165 2.706-.066.429-.231.66-.363.726-.132.099-.462.132-.759.132h-.99c-.231 0-.429-.033-.594-.132-.132-.132-.165-.528-.165-1.254V1.864h-11.22v5.94c0 2.805-.462 6.6-5.115 8.745.462.429 1.155 1.188 1.485 1.683 5.115-2.64 5.94-6.897 5.94-10.428V4.042zm6.27 7.359c-.792-1.419-2.673-3.333-4.389-4.653L17.249 7.87c1.683 1.386 3.531 3.366 4.257 4.785l1.881-1.254zm-10.89 7.458c1.914 1.32 3.96 3.234 4.917 4.62l1.914-1.419c-1.023-1.452-3.135-3.267-5.016-4.488l-1.815 1.287zM1.178 16.516c3.366-.957 7.821-2.31 12.045-3.597l-.297-2.112c-1.584.429-3.168.891-4.719 1.32V4.669h4.752V2.491H1.244v2.178h4.719v8.052A206.897 206.897 0 01.452 14.14l.726 2.376zM2.465 29.32c2.541-1.881 3.861-5.016 4.653-8.118l-2.178-.726c-.693 2.937-2.112 5.808-4.521 7.491l2.046 1.353zm11.286-1.485c-1.716 0-2.013-.165-2.013-1.023v-6.501H9.329v6.501c0 2.541.858 3.267 4.224 3.267h6.138c2.805 0 3.531-1.023 3.861-5.181-.693-.165-1.683-.495-2.244-.924-.132 3.399-.363 3.861-1.782 3.861h-5.775zm8.844-6.666c2.442 2.277 4.95 5.445 5.841 7.656l2.211-1.188c-1.023-2.31-3.564-5.379-6.072-7.524l-1.98 1.056zM54.143 5.032c-.429 1.122-1.287 2.805-1.947 3.861l1.584.297H43.055l1.518-.396c-.231-1.089-.924-2.607-1.749-3.762h11.319zm9.174 4.158h-8.712c.66-.957 1.419-2.343 2.178-3.729l-2.244-.429h6.732V2.953H49.688V.379h-2.541v2.574H35.861v2.079h6.303l-1.716.396c.726 1.155 1.419 2.64 1.683 3.762h-8.415v2.112h29.601V9.19zM39.854 23.446v-3.168h7.359v3.168h-7.359zm7.359-7.953v3.003h-7.359v-3.003h7.359zm10.131 3.003h-7.689v-3.003h7.689v3.003zm-7.689 4.95v-3.168h7.689v3.168h-7.689zm2.442 5.082c-2.046 0-2.442-.231-2.442-1.518v-1.65h10.164V13.546H37.412v13.2h2.442V25.36h7.359v1.683c0 2.772 1.056 3.465 4.752 3.465h7.524c3.102 0 3.894-1.023 4.224-4.851-.693-.132-1.617-.429-2.178-.858-.198 3.135-.528 3.729-2.178 3.729h-7.26z" fill="currentColor"/></svg>

            <span className="block text-[32px] md:text-[33px] xl:text-[48px] leading-[1] font-display uppercase text-center mb-2 md:mb-4 md:group-hover:text-yellow transition-colors ease-in-out duration-500">{title}</span>
            
            <span className="block text-[22px] md:text-[23px] xl:text-[26px] leading-[0.82] uppercase text-center font-mono">${price}</span>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 mt-[20%] ml-[20%] md:w-24 xl:w-32 md:h-24 xl:h-32 z-20 scale-0 md:group-hover:scale-100 transition ease-in-out duration-500 delay-100">
          <div className="hover:scale-125 transition ease-in-out duration-300">
            <div className="motion-safe:animate-spin-slow">
              <Image
                src={addToBag}
                alt="Add To Bag"
                layout="responsive"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full z-0 scale-0 md:group-hover:scale-110 absolute inset-0 rounded-[5rem] transition ease-in-out duration-500">
          <div className="animate-float-wobble">
            <Image
              src={productBg}
              alt="Product Background"
              layout="responsive"
              className="w-full"
            />
          </div>
        </div>
      </a>
    </Link>
  )
}