import { useContext } from 'react'
import { Howl } from 'howler'
import { Context } from '@/context/state'
import { useTheme } from 'next-themes'
import { isMobile } from "react-device-detect"
var track = null;

if (!isMobile) {
  track = new Howl({
    src: ['../stems/next-time.mp3'],
    volume: 0.75,
    loop: true,
    preload: 'metadata',
    html5: true
  });
}

export default function PlayerWidget() {
  const [globalMusicPlaying, setGlobalMusicPlaying] = useContext(Context)
  const {theme, setTheme} = useTheme()

  const togglePlay = () => {
    if (!isMobile) {
      if (globalMusicPlaying == false) {
        track.play()
        setGlobalMusicPlaying(true);
      } else if (globalMusicPlaying == true) {
        track.pause()
        setGlobalMusicPlaying(false);
      }
    }
  }

  
  if (!isMobile) {
    if (theme === 'dark') {
      Howler.volume(1);
    } else {
      Howler.volume(0.5);
    }
  }

  if (!isMobile) {
    if (globalMusicPlaying == false) {
      track.pause();
    } else if (globalMusicPlaying == true) {
      // track.fade(0, 0.75, 1000);
    }
  }


  return (
    <div className="bg-yellow rounded-full p-1 px-1 md:px-2 md:pr-5 max-w-[350px] flex overflow-hidden items-center">
      <button className="text-off-black block w-auto" onClick={() => togglePlay() }>
        <div className="md:mr-[7px]">
          { globalMusicPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] w-[40px]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[40px] w-[40px]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      <span className="uppercase text-[16px] md:text-[20px] xl:text-[22px] tracking-tight dark:text-off-black flex-1 overflow-hidden hidden md:block leading-none mb-[-1px]">
        <div className="relative flex overflow-x-hidden">
          <div className="motion-safe:animate-marquee whitespace-nowrap font-mono">
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
          </div>

          <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap font-mono">
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Next Time</span>
            <span className="mx-1">&bull;</span>
          </div>
        </div>
      </span>
    </div>
  )
}