import {useTheme} from 'next-themes'
import Link from 'next/link'
import Container from './container'
import Logo from '@/components/logo'
import PlayerWidget from '@/components/player-widget'
import Image from 'next/image'
import themeToggleActive from '@/public/images/theme-toggle-active.svg'
import themeToggleActiveDark from '@/public/images/theme-toggle-active-dark.svg'

export default function Header() {
  const {theme, setTheme} = useTheme()

  return (
    <header className="pt-[5vw] md:pt-[3vw] xl:pt-[2vw] fixed z-50 top-0 left-0 w-full">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">
            <a className="block">
              <Logo/>
            </a>
          </Link>

          <div className="mx-auto hidden md:block">
            <nav>
              <ul className="flex items-center">
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      Insta
                    </a>
                  </Link>
                </li>
                <li className="ml-1 md:ml-2">&bull;</li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      Youtube
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mx-auto hidden md:block">
            <nav>
              <ul className="flex items-center">
                <li>
                  <Link href="/jam">
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      JAM MODE
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="ml-auto">
            <nav>
              <ul className="flex">
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[19px] xl:text-[22px] bg-off-black text-off-white dark:bg-off-white dark:text-off-black px-3 p-1 md:p-2 rounded-lg">
                      Bio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/music">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      Music
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      News
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[19px] xl:text-[22px] p-1 md:p-2">
                      Bag
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="fixed bottom-0 left-0 z-40 ml-[3vw] md:ml-[2vw] mb-[20vh] pointer">
            <button
              aria-label="Enable Vibe Mode"
              className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight my-8 relative"
              onClick={() => setTheme('dark')}
            >
              <span className="text-upright--rotate">Vibe</span>
              <span className="absolute bottom-0 ml-[-7px] md:ml-[-10px] mb-[-12px] md:mb-[-15px] hidden dark:block w-[40px] md:w-[50px] xl:w-[60px]">
                <Image
                  src={themeToggleActive}
                  alt="Menu Active State"
                  layout="responsive"
                  className="w-full will-change"
                />
              </span>
            </button>

            <button
              aria-label="Enable Chill Mode"
              className="block uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight my-8"
              onClick={() => setTheme('light')}
            >
              <span className="text-upright--rotate">Chill</span>
              <span className="absolute bottom-0 ml-[-7px] md:ml-[-10px] mb-[22px] md:mb-[20px] block dark:hidden w-[40px] md:w-[50px] xl:w-[60px]">
                <Image
                  src={themeToggleActiveDark}
                  alt="Menu Active State"
                  layout="responsive"
                  className="w-full will-change"
                />
              </span>
            </button>
          </div>

          <div className="fixed bottom-0 right-0 z-40 mr-[-180px] md:mr-[-160px] xl:mr-[-170px] mb-[40vh] rotate-90 pointer">
            <PlayerWidget />
          </div>
        </div>
      </Container>
    </header>
  )
}