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
    <header className="pt-[20px] md:pt-[25px] fixed z-50 top-0 left-0 w-full font-mono">
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
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
                      Insta
                    </a>
                  </Link>
                </li>
                <li className="ml-1 md:ml-2">&bull;</li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
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
                    <a aria-label="Navigate to about page" className="ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
                      <svg className="w-7 inline-block mr-2" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 8.777c0 3.5 1.558 8.578 6.25 8.578 4.693 0 6.25-5.078 6.25-8.579 0-10.83-12.5-10.83-12.5 0zm5.32 7.955c-3.994 0-4.987-4.686-4.987-7.693 0-10.35 9.973-10.35 9.973 0 0 3.006-.992 7.693-4.986 7.693zM12.501 8.777c0 3.5 1.557 8.578 6.25 8.578 4.692 0 6.249-5.078 6.249-8.579 0-10.83-12.499-10.83-12.499 0zm5.32 7.955c-3.996 0-4.987-4.686-4.987-7.693 0-10.35 9.972-10.35 9.972 0 0 3.006-.992 7.693-4.986 7.693z" fill="currentColor"/><path d="M.333 9.102c0 2.47 1.814 4.36 4.053 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.104-6.075-8.104 0zM12.833 9.102c0 2.47 1.814 4.36 4.052 4.36 2.238 0 4.051-1.89 4.051-4.36 0-6.075-8.103-6.075-8.103 0z" fill="currentColor"/></svg>
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
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] bg-off-black text-off-white dark:bg-off-white dark:text-off-black px-3 p-1 md:p-2 rounded-2xl">
                      Bio
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/music">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
                      Music
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
                      News
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a aria-label="Navigate to about page" className="ml-2 md:ml-3 xl:ml-4 uppercase block text-[16px] md:text-[17px] xl:text-[22px] p-1 md:p-2">
                      Bag
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="fixed bottom-0 left-0 z-40 ml-[15px] md:ml-[30px] pointer hidden md:block">
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
              <span className="absolute bottom-0 ml-[-7px] md:ml-[-10px] mb-[22px] md:mb-[25px] block dark:hidden w-[40px] md:w-[50px] xl:w-[60px]">
                <Image
                  src={themeToggleActiveDark}
                  alt="Menu Active State"
                  layout="responsive"
                  className="w-full will-change"
                />
              </span>
            </button>
          </div>

          <div className="fixed bottom-0 right-0 z-40 mr-[-180px] md:mr-[-160px] xl:mr-[-170px] mb-[14.5rem] rotate-90 pointer hidden md:block">
            <PlayerWidget />
          </div>
        </div>
      </Container>
    </header>
  )
}