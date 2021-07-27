// import raf from 'raf'
import { useContext } from 'react'
import { Howl } from 'howler'
import { Context } from '@/context/state'
import { useTheme } from 'next-themes'

var track = new Howl({
  src: ['./stems/girl-from-osaka.mp3'],
  volume: 0.75
});

export default function PlayerWidget() {
  const [globalMusicPlaying, setGlobalMusicPlaying] = useContext(Context)
  const {theme, setTheme} = useTheme()

  const togglePlay = () => {
    if (globalMusicPlaying == false) {
      track.play()
      setGlobalMusicPlaying(true);
    } else if (globalMusicPlaying == true) {
      track.pause()
      setGlobalMusicPlaying(false);
    }
  }
  
  if (theme === 'dark') {
    Howler.volume(1);
  } else {
    Howler.volume(0.5);
  }

  if (globalMusicPlaying == false) {
    track.pause();
  } else if (globalMusicPlaying == true) {
    // track.fade(0, 0.75, 1000);
  }


  return (
    <div className="bg-yellow rounded-full p-3 px-3 md:px-6 max-w-[450px] flex overflow-hidden">
      {/* <ReactHowler 
        onLoad={this.handleOnLoad}
        ref={(ref) => (this.playerFull = ref)}
        html5={true}
        preload={true}
        src='/stems/girl-from-osaka.mp3'
        playing={this.state.playing}
        volume={0.5}
        mute={false}
      /> */}

      <button className="text-off-black block w-auto" onClick={() => togglePlay() }>
        <div className="md:mr-[10px]">
          { globalMusicPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      <span className="uppercase text-[16px] md:text-[20px] xl:text-[24px] tracking-tight dark:text-off-black flex-1 overflow-hidden hidden md:block">
        <div className="relative flex overflow-x-hidden">
          <div className="motion-safe:animate-marquee whitespace-nowrap">
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
          </div>

          <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap">
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
            <span className="mx-1">Girl From Osaka</span>
            <span className="mx-1">&bull;</span>
          </div>
        </div>
      </span>
    </div>
  )
}