
import { useState, useContext, useEffect } from 'react'
import { m } from 'framer-motion'
import Container from '@/components/container'
import DrumMachine from '@/components/drums'
import Rollover from '@/components/rollover'
import trayAnime from '@/public/images/t-anime.svg'
import clouds from '@/public/images/clouds.svg'
import Link from 'next/link'
import Image from 'next/image'
import { fade, fadeDelay, reveal } from '@/helpers/transitions'
import { Howl } from 'howler'
import { JamContext } from '@/context/jam'
import { Context } from '@/context/state'
import kanji from '@/public/images/japanese-characters-black.svg'
import letsJamText from '@/public/images/letsjamtext.svg'
import letsJamTextDark from '@/public/images/letsjamtextdark.svg'

var drums = new Howl({ 
  src: ['/stems/im-fine-drums.mp3'],
  loop: true,
  volume: 0.75,
})
var bass = new Howl({
  src: ['/stems/im-fine-bass.mp3'],
  loop: true,
  volume: 0.75,
})
var guitar = new Howl({
  src: ['/stems/im-fine-guitar.mp3'],
  loop: true,
  volume: 0.75,
})
var vox = new Howl({
  src: ['/stems/im-fine-vox.mp3'],
  loop: true,
  volume: 0.75,
})
var keys = new Howl({
  src: ['/stems/im-fine-keys.mp3'],
  loop: true,
  volume: 0.75,
})

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isDrumsPlaying, setIsDrumsPlaying] = useState(true)
  const [isDrumsLoaded, setIsDrumsLoaded] = useContext(JamContext)
  const [isBassPlaying, setIsBassPlaying] = useState(true)
  const [isBassLoaded, setIsBassLoaded] = useContext(JamContext)
  const [isGuitarPlaying, setIsGuitarPlaying] = useState(true)
  const [isGuitarLoaded, setIsGuitarLoaded] = useContext(JamContext)
  const [isVoxPlaying, setIsVoxPlaying] = useState(true)
  const [isVoxLoaded, setIsVoxLoaded] = useContext(JamContext)
  const [isKeysPlaying, setIsKeysPlaying] = useState(true)
  const [isKeysLoaded, setIsKeysLoaded] = useContext(JamContext)
  const [jamAccepted, setJamAccepted] = useContext(Context)

  useEffect(() => {
    console.log(jamAccepted)
    if (isBassLoaded == 'loaded' && isGuitarLoaded == 'loaded' && isVoxLoaded == 'loaded' && isKeysLoaded == 'loaded' && isDrumsLoaded == 'loaded') {
    } else {
      const intervalId = setInterval(() => { 
        setIsBassLoaded(bass.state())
        setIsGuitarLoaded(guitar.state())
        setIsVoxLoaded(vox.state())
        setIsKeysLoaded(keys.state())
        setIsDrumsLoaded(drums.state())
        console.log(bass.state())
      }, 2500);
    
      return () => clearInterval(intervalId);
    }

    // If the user clicks back stop everything from playing
    window.addEventListener('popstate', function() {
      drums.pause();
      bass.pause();
      guitar.pause();
      vox.pause();
      keys.pause();
      setIsPlaying(false);
    }, false);
  });

  const togglePlay = () => {
    if (isPlaying == false) {
      drums.play();
      bass.play();
      guitar.play();
      vox.play();
      keys.play();
      setIsPlaying(true);
    } else if (isPlaying == true) {
      drums.pause();
      bass.pause();
      guitar.pause();
      vox.pause();
      keys.pause();
      setIsPlaying(false);
    }
  }

  const acceptJam = () => {
    setJamAccepted(true);

    setTimeout(() => {
      togglePlay();
    }, 200);
  }

  const stop = () => {
    drums.stop();
    bass.stop();
    guitar.stop();
    vox.stop();
    keys.stop();
    setIsPlaying(false);
  }

  const toggleDrums = () => {
    if (isDrumsPlaying == false) {
      drums.fade(0, 0.5, 1000);
      setIsDrumsPlaying(true);
    } else if (isDrumsPlaying == true) {
      drums.fade(0.5, 0, 1000);
      setIsDrumsPlaying(false);
    }
  }

  const toggleBass = () => {
    if (isBassPlaying == false) {
      bass.fade(0, 0.5, 1000);
      setIsBassPlaying(true);
    } else if (isBassPlaying == true) {
      bass.fade(0.5, 0, 1000);
      setIsBassPlaying(false);
    }
  }

  const toggleGuitar = () => {
    if (isGuitarPlaying == false) {
      guitar.fade(0, 0.5, 1000);
      setIsGuitarPlaying(true);
    } else if (isGuitarPlaying == true) {
      guitar.fade(0.5, 0, 1000);
      setIsGuitarPlaying(false);
    }
  }

  const toggleVox = () => {
    if (isVoxPlaying == false) {
      vox.fade(0, 0.5, 1000);
      setIsVoxPlaying(true);
    } else if (isVoxPlaying == true) {
      vox.fade(0.5, 0, 1000);
      setIsVoxPlaying(false);
    }
  }

  const toggleKeys = () => {
    if (isKeysPlaying == false) {
      keys.fade(0, 0.5, 1000);
      setIsKeysPlaying(true);
    } else if (isKeysPlaying == true) {
      keys.fade(0.5, 0, 1000);
      setIsKeysPlaying(false);
    }
  }

  return (
    <m.div
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen overflow-hidden relative"
    >
      <div className={`transition-opacity ease-in-out duration-500 fixed z-[90] w-full h-full ${ !jamAccepted ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
        <m.div variants={fade} className={`h-full w-full bg-red flex items-center justify-center selection:bg-off-black dark:selection:bg-off-black`}>
          <div className="pt-[20px] md:pt-[25px] fixed z-[50] top-0 left-0 w-full font-mono">
            <Container>
              <div className="flex flex-wrap">
                <div className="mx-auto hidden md:block">
                  <nav>
                    <ul className="flex items-center">
                      <li>
                        <Link href="/">
                          <a onClick={() => stop() } aria-label="Navigate to home page" className={`ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] pl-0 md:pl-0 md:pr-3 py-1 md:py-2 group relative overflow-hidden rounded-2xl text-off-white dark:text-off-white`}>
                            <div className="relative overflow-hidden z-10">
                              <Rollover label="Go Back" />
                            </div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </Container>
          </div>
          <div className="relative">
            <div className="relative z-20">
              <div className="relative">
                <h2 className="uppercase text-[10vw] leading-[0.95] text-center will-change block text-off-white dark:text-off-white relative z-10">
                  <span className="block overflow-hidden relative">
                    <m.span variants={fadeDelay} className="block">LET’S JAM!</m.span>
                  </span>
                </h2>
                <div className="absolute inset-0 flex justify-center pointer-events-none z-20">
                  <div className="overflow-hidden xl:pt-[4px]">
                    <m.div variants={fade}>
                      <div className="w-[78vw] pointer-events-none motion-safe:animate-float ml-[-1.2vw] mt-[-1.3vw]">
                        <Image
                          src={letsJamText}
                          alt="Let's Jam"
                          layout="responsive"
                          className="w-full will-change"
                          priority
                        />
                      </div>
                    </m.div>
                  </div>
                </div>
              </div>

              {/* <span className="text-[22px] md:text-[25px] xl:text-[28px] 2xl:text-[32px] leading-[0.95] text-center block relative z-20 uppercase text-off-white dark:text-off-white">
                <span className="block overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                    Get ready to jam with T-Ray
                  </m.span>
                </span>
              </span> */}
            </div>

            <div className="absolute top-0 left-0 right-0 flex justify-center items-center mt-[-6.5vw] 2xl:mt-[-8vw] z-0">
              <div className="w-[20vw] md:w-[17vw] xl:w-[15vw] opacity-40 transition-opacity duration-500 ease-in-out" data-scroll data-scroll-speed="0.35">
                <Image
                  src={kanji}
                  alt="Placeholder"
                  layout="responsive"
                  className="w-full will-change"
                />
              </div>
            </div>

            <div className="flex justify-center relative z-10 mt-8">
              {isDrumsLoaded == 'loaded' && isBassLoaded == 'loaded' && isGuitarLoaded == 'loaded' && isVoxLoaded == 'loaded' && isKeysLoaded == 'loaded' ? (
                <button onClick={() => acceptJam() } className="block group hover:text-off-white text-off-black transition-colors duration-500 ease-in-out font-display uppercase rounded-lg text-[22px] h-[115px] w-[280px] relative tracking-wide scale-100">
                  <div className={`block w-full whitespace-nowrap absolute top-0 left-0 right-0`}>
                    <div className="absolute inset-0 h-[115px] flex items-center justify-center">
                      <div className="overflow-hidden relative">
                        <m.div variants={reveal}>
                          <span className="mx-3 block">Let's Go!</span>
                        </m.div>
                      </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full text-yellow group-hover:text-off-black transition-colors duration-500 ease-in-out" fill="none">
                      <defs/>
                      <path fill="currentColor" fill-rule="evenodd" d="M138.4 113H59.2l-1.8-.1h-6l-1.3-.1h-3.6l-1.1-.1h-2.1l-1-.1h-2l-.8-.1h-1l-.8-.1h-1.6l-.8-.1h-.8l-.7-.1H33l-.8-.1h-.7l-.6-.1h-.7l-.6-.2H28.4l-.6-.1-.6-.1h-.6l-.6-.1-.5-.1h-.6l-.5-.1-.5-.1h-.6l-.5-.2h-.5l-.5-.1-.5-.1H21l-.5-.2H20l-.5-.2h-.4l-.5-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.2h-.3l-.4-.2h-.3l-.4-.2-.3-.1-.4-.1-.3-.2h-.3l-.4-.2-.3-.1-.3-.2-.3-.1-.3-.2h-.3l-.3-.2-.3-.2-.2-.1-.3-.2-.3-.1-.2-.2-.3-.1-.3-.2-.2-.2-.3-.1-.2-.2-.2-.2-.3-.1-.2-.2-.2-.2-.2-.2-.2-.2-.3-.2-.2-.1-.2-.2-.2-.2-.1-.2-.2-.3-.2-.2-.2-.2-.2-.2-.1-.2-.2-.3-.2-.2-.1-.2-.2-.3-.2-.2-.1-.3-.1-.2-.2-.3-.1-.3-.2-.3v-.2l-.2-.3-.1-.3-.2-.3v-.4l-.2-.3v-.3l-.2-.4v-.3L2 97v-.3l-.2-.4V96l-.1-.4-.1-.4v-.5l-.2-.4v-1l-.2-.5v-1.1L1 91v-.6l-.1-.7v-1.5l-.1-.8v-2.9l-.1-1.3V25.6l.1-.8v-1.5l.1-.7V22l.1-.6v-.6l.1-.5.1-.5v-.5l.1-.5.1-.4v-.5l.2-.4V17l.1-.4.1-.4.1-.4.1-.3.1-.4.1-.3.1-.4.1-.3.1-.3.1-.3.2-.3V13l.2-.3.2-.3v-.2l.2-.3.2-.3.1-.2.2-.3.1-.2.2-.3.2-.2.1-.2.2-.3.2-.2.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.3-.2.2-.2.2-.1.2-.2L8 7l.2-.2.3-.1.2-.2.3-.1.2-.2.3-.2.2-.1.3-.2.3-.1.3-.1.3-.2.3-.1.3-.2.3-.1.3-.1.3-.2h.3l.3-.2.4-.1.3-.2h.3l.4-.2.4-.1.3-.1.4-.1.4-.1.3-.1.4-.2h.4l.4-.2h.4l.4-.1.5-.1.4-.1.4-.1.5-.1.4-.1h.5l.5-.2h.5l.4-.1.5-.1.5-.1h.6l.5-.1.5-.1h.6l.5-.2h1.2l.6-.2h1.2l.6-.1.7-.1h.7l.6-.1h.7l.7-.1h.8l.7-.1h.8l.8-.1h1.6l.8-.1h1l.8-.1h2l1-.1h2l1.1-.1H50l1.3-.1h4.3l1.7-.1h23.2l5.2-.1h131.8l1.7.1h6l1.3.1h3.7l1 .1h2.2l1 .1h2l.8.1h1.8l.8.1h.8l.8.1h.8l.7.1h.8l.7.1h.7l.7.1h.6l.7.1.6.1h.7l.6.1h.6l.5.2h1.2l.5.2h.6l.5.1h.5l.5.2h.5l.5.1.5.1h.5l.5.2h.4l.5.1.4.1.4.1.5.1.4.1.4.1.4.1.4.1.4.1.4.1.3.1.4.1.4.2h.3l.4.2.3.1.4.1.3.1.3.2.4.1.3.1.3.2h.3l.3.2.3.2.3.1.3.2.2.1.3.1.3.2.2.2.3.1.3.2.2.1.3.2.2.2.2.1.3.2.2.2.2.2.2.1.3.2.2.2.2.2.2.2.2.2.2.2.2.2.1.2.2.3.2.2.2.2.1.2.2.3.2.2.1.2.2.3.1.2.2.3.1.3.1.2.2.3.1.3.1.3.2.3v.3l.2.3.1.3.1.4.1.3.1.3.1.4.1.4.1.4v.4l.2.4v.4l.1.4v.5l.2.4v1l.1.6.1.5v.6l.1.6v1.4l.1.8v1.6l.1 1v7.4l.1 3V85.4l-.1 1v1.8l-.1.7v1.4l-.1.7v.6l-.1.6v.5l-.1.5-.1.5v.5l-.1.5-.1.4-.1.4v.5l-.2.4v.3l-.1.4-.1.4-.1.3-.1.4-.1.3-.2.3v.4l-.2.3-.1.3-.1.3-.2.2v.3l-.2.3-.2.3-.1.2-.2.3-.1.2-.2.3-.1.2-.2.3-.2.2-.1.2-.2.2-.2.3-.2.2-.1.2-.2.2-.2.2-.2.2-.2.2-.2.2-.3.2-.2.2-.2.1-.2.2-.3.2-.2.2-.2.1-.3.2-.2.2-.3.1-.2.2-.3.1-.3.2-.2.1-.3.2-.3.1-.3.2-.3.1-.3.1-.3.2-.3.1-.3.1-.3.2h-.3l-.4.2-.3.1-.3.2h-.4l-.4.2-.3.1-.4.1-.4.1-.3.1-.4.1-.4.1-.4.1-.4.1-.4.1-.5.1-.4.1-.4.1-.5.1h-.4l-.5.2h-.5l-.4.1-.5.1-.5.1h-.5l-.5.2h-.6l-.5.1h-.5l-.6.1-.6.1h-.6l-.5.1-.7.1h-.6l-.6.1h-.6l-.7.1-.7.1h-.7l-.7.1h-.7l-.7.1h-.8l-.8.1h-1.6l-.9.1h-.8l-1 .1h-1.9l-1 .1h-2l-1 .1H227l-1.3.1H220l-1.7.1H197l-5 .1h-53.7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </button>
              ) : (
                <button disabled className="block group text-off-white transition-colors duration-500 ease-in-out font-display uppercase rounded-lg text-[22px] h-[115px] w-[280px] relative tracking-wide">
                  <div className={`block w-full whitespace-nowrap absolute top-0 left-0 right-0`}>
                    <div className="absolute inset-0 h-[115px] flex items-center justify-center">
                      <div className="overflow-hidden relative">
                        <m.div variants={reveal}>
                          <div className="relative flex overflow-x-hidden will-change mx-5">
                            <div className="motion-safe:animate-marquee whitespace-nowrap flex items-center">
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                            </div>

                            <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap flex items-center">
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                              <span className="block">Loading</span>
                              <span className="mx-3 block">&bull;</span>
                            </div>
                          </div>
                        </m.div>
                      </div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full text-off-black transition-colors duration-500 ease-in-out" fill="none">
                      <defs/>
                      <path fill="currentColor" fill-rule="evenodd" d="M138.4 113H59.2l-1.8-.1h-6l-1.3-.1h-3.6l-1.1-.1h-2.1l-1-.1h-2l-.8-.1h-1l-.8-.1h-1.6l-.8-.1h-.8l-.7-.1H33l-.8-.1h-.7l-.6-.1h-.7l-.6-.2H28.4l-.6-.1-.6-.1h-.6l-.6-.1-.5-.1h-.6l-.5-.1-.5-.1h-.6l-.5-.2h-.5l-.5-.1-.5-.1H21l-.5-.2H20l-.5-.2h-.4l-.5-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.1-.4-.2h-.3l-.4-.2h-.3l-.4-.2-.3-.1-.4-.1-.3-.2h-.3l-.4-.2-.3-.1-.3-.2-.3-.1-.3-.2h-.3l-.3-.2-.3-.2-.2-.1-.3-.2-.3-.1-.2-.2-.3-.1-.3-.2-.2-.2-.3-.1-.2-.2-.2-.2-.3-.1-.2-.2-.2-.2-.2-.2-.2-.2-.3-.2-.2-.1-.2-.2-.2-.2-.1-.2-.2-.3-.2-.2-.2-.2-.2-.2-.1-.2-.2-.3-.2-.2-.1-.2-.2-.3-.2-.2-.1-.3-.1-.2-.2-.3-.1-.3-.2-.3v-.2l-.2-.3-.1-.3-.2-.3v-.4l-.2-.3v-.3l-.2-.4v-.3L2 97v-.3l-.2-.4V96l-.1-.4-.1-.4v-.5l-.2-.4v-1l-.2-.5v-1.1L1 91v-.6l-.1-.7v-1.5l-.1-.8v-2.9l-.1-1.3V25.6l.1-.8v-1.5l.1-.7V22l.1-.6v-.6l.1-.5.1-.5v-.5l.1-.5.1-.4v-.5l.2-.4V17l.1-.4.1-.4.1-.4.1-.3.1-.4.1-.3.1-.4.1-.3.1-.3.1-.3.2-.3V13l.2-.3.2-.3v-.2l.2-.3.2-.3.1-.2.2-.3.1-.2.2-.3.2-.2.1-.2.2-.3.2-.2.1-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.2-.2.3-.2.2-.2.2-.1.2-.2L8 7l.2-.2.3-.1.2-.2.3-.1.2-.2.3-.2.2-.1.3-.2.3-.1.3-.1.3-.2.3-.1.3-.2.3-.1.3-.1.3-.2h.3l.3-.2.4-.1.3-.2h.3l.4-.2.4-.1.3-.1.4-.1.4-.1.3-.1.4-.2h.4l.4-.2h.4l.4-.1.5-.1.4-.1.4-.1.5-.1.4-.1h.5l.5-.2h.5l.4-.1.5-.1.5-.1h.6l.5-.1.5-.1h.6l.5-.2h1.2l.6-.2h1.2l.6-.1.7-.1h.7l.6-.1h.7l.7-.1h.8l.7-.1h.8l.8-.1h1.6l.8-.1h1l.8-.1h2l1-.1h2l1.1-.1H50l1.3-.1h4.3l1.7-.1h23.2l5.2-.1h131.8l1.7.1h6l1.3.1h3.7l1 .1h2.2l1 .1h2l.8.1h1.8l.8.1h.8l.8.1h.8l.7.1h.8l.7.1h.7l.7.1h.6l.7.1.6.1h.7l.6.1h.6l.5.2h1.2l.5.2h.6l.5.1h.5l.5.2h.5l.5.1.5.1h.5l.5.2h.4l.5.1.4.1.4.1.5.1.4.1.4.1.4.1.4.1.4.1.4.1.3.1.4.1.4.2h.3l.4.2.3.1.4.1.3.1.3.2.4.1.3.1.3.2h.3l.3.2.3.2.3.1.3.2.2.1.3.1.3.2.2.2.3.1.3.2.2.1.3.2.2.2.2.1.3.2.2.2.2.2.2.1.3.2.2.2.2.2.2.2.2.2.2.2.2.2.1.2.2.3.2.2.2.2.1.2.2.3.2.2.1.2.2.3.1.2.2.3.1.3.1.2.2.3.1.3.1.3.2.3v.3l.2.3.1.3.1.4.1.3.1.3.1.4.1.4.1.4v.4l.2.4v.4l.1.4v.5l.2.4v1l.1.6.1.5v.6l.1.6v1.4l.1.8v1.6l.1 1v7.4l.1 3V85.4l-.1 1v1.8l-.1.7v1.4l-.1.7v.6l-.1.6v.5l-.1.5-.1.5v.5l-.1.5-.1.4-.1.4v.5l-.2.4v.3l-.1.4-.1.4-.1.3-.1.4-.1.3-.2.3v.4l-.2.3-.1.3-.1.3-.2.2v.3l-.2.3-.2.3-.1.2-.2.3-.1.2-.2.3-.1.2-.2.3-.2.2-.1.2-.2.2-.2.3-.2.2-.1.2-.2.2-.2.2-.2.2-.2.2-.2.2-.3.2-.2.2-.2.1-.2.2-.3.2-.2.2-.2.1-.3.2-.2.2-.3.1-.2.2-.3.1-.3.2-.2.1-.3.2-.3.1-.3.2-.3.1-.3.1-.3.2-.3.1-.3.1-.3.2h-.3l-.4.2-.3.1-.3.2h-.4l-.4.2-.3.1-.4.1-.4.1-.3.1-.4.1-.4.1-.4.1-.4.1-.4.1-.5.1-.4.1-.4.1-.5.1h-.4l-.5.2h-.5l-.4.1-.5.1-.5.1h-.5l-.5.2h-.6l-.5.1h-.5l-.6.1-.6.1h-.6l-.5.1-.7.1h-.6l-.6.1h-.6l-.7.1-.7.1h-.7l-.7.1h-.7l-.7.1h-.8l-.8.1h-1.6l-.9.1h-.8l-1 .1h-1.9l-1 .1h-2l-1 .1H227l-1.3.1H220l-1.7.1H197l-5 .1h-53.7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          </div>

          <div className="pb-[20px] md:pb-[25px] fixed z-[100] bottom-0 left-0 w-full font-mono">          
            <div className="flex items-center justify-center w-full">
              <div>
                <svg className="mx-auto w-[32px] mb-3 text-off-white" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/></svg>
                <span className="block text-off-white text-center text-xl">
                  <span className="block overflow-hidden relative">
                    <m.span variants={reveal} className="block">
                      Get your keyboard &amp; Speakers ready!
                    </m.span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </m.div>
      </div>
      
      {/* Debug banner */}
      {/* <div className="fixed bottom-0 left-[40vw] z-[10000] bg-white text-black text-[12px] p-2">            
        <span className="block">Drums Loaded: {JSON.stringify(bass.state())}</span>
        <span className="block">Bass Loaded: {JSON.stringify(guitar.state())}</span>
        <span className="block">Guitar Loaded: {JSON.stringify(vox.state())}</span>
        <span className="block">Vox Loaded: {JSON.stringify(keys.state())}</span>
        <span className="block">Keys Loaded: {JSON.stringify(drums.state())}</span>
      </div> */}

      <div className={`${ jamAccepted ? 'opacity-100' : 'opacity-0 pointer-events-none' }`}>
        {/* Floor */}
        <m.div variants={fade} className="absolute bottom-0 left-0 right-0 scale-150 -rotate-2 bg-black bg-opacity-[0.15] dark:bg-opacity-50 w-full h-[12vh]">
        </m.div>
        
        {/* Clouds */}
        <m.div variants={fade} className="w-full h-full absolute inset-0 pointer-events-none z-0">
          <Image
            src={clouds}
            alt="Clouds"
            layout="responsive"
            className="w-full will-change clouds"
            priority
          />
          
          <div className="absolute inset-0 scale-50 z-0">
            <div className="clouds--delayed">
              <Image
                src={clouds}
                alt="Clouds"
                layout="responsive"
                className="w-full will-change"
                priority
              />
            </div>
          </div>
        </m.div>
        
        {/* Animated T! */}
        <m.div variants={fade} className="w-[18%] max-w-[280px] absolute bottom-0 right-0 mr-[4vw] mb-[4vw] z-10">
          <Image
            src={trayAnime}
            alt="ImReallyATrex"
            layout="responsive"
            className="w-full will-change"
            priority
          />

          <svg className="w-[25%] absolute top-0 left-0 ml-[2%] mt-[1%] burst origin-bottom-right" viewBox="0 0 55 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.109 26.413c-.048 0-.144 0-.192-.047-.239-.096-.334-.383-.239-.622l3.157-6.936c.143-.239.43-.334.67-.19.19.095.286.382.239.573l-3.157 6.983c-.096.096-.287.24-.478.24zM38.222 17.374c-.048 0-.144 0-.191-.048-.24-.096-.335-.383-.24-.622l1.34-2.918c.095-.239.382-.334.621-.239.24.096.335.383.24.622l-1.34 2.918c-.095.191-.239.287-.43.287zM22.2 31.387a.365.365 0 01-.24-.095L14.07 26.46c-.191-.191-.24-.478-.048-.67a.54.54 0 01.526-.143l7.892 4.83c.24.144.287.431.144.67-.096.096-.24.191-.383.24zM7.994 39.566c-.287.047-.478-.144-.526-.43-.048-.288.144-.48.43-.527l10.714-2.391c.287-.048.527.095.574.382.048.287-.095.526-.382.574L8.09 39.566h-.096zM.533 41.336c-.287.048-.478-.144-.526-.43-.048-.288.144-.479.43-.527l4.401-1.004c.24-.048.526.095.574.382.048.24-.096.526-.335.574l-4.4 1.005c-.096-.048-.144 0-.144 0zM4.12 23.305l1.004.86c.144.144.335.192.527.096l1.243-.335c.335-.095.622.096.718.43.047.144.047.24-.048.383l-.479 1.196a.513.513 0 00.048.526l.67 1.1c.191.287.096.622-.191.814a.887.887 0 01-.335.095l-1.292-.095c-.191 0-.382.047-.478.19l-.813 1.005a.597.597 0 01-.813.096c-.096-.096-.191-.192-.191-.335l-.287-1.291c-.048-.192-.192-.335-.383-.43l-1.244-.48a.646.646 0 01-.334-.764c.047-.096.143-.24.239-.287l1.1-.67c.143-.096.287-.287.287-.478l.095-1.292c.048-.334.335-.526.67-.526.096.096.191.144.287.192zM28.035 17.23l-2.87-.956a.325.325 0 00-.383.191v.143l.91 3.97c.047.144-.049.335-.24.335h-.144l-1.913-.622a.325.325 0 00-.382.192v.19l1.674 4.497c.047.143.239.239.382.191.096-.048.144-.096.192-.239l.382-1.961a.36.36 0 01.335-.24h.048l2.391.814a.325.325 0 00.383-.191V23.4l-.574-5.93c0-.096-.096-.24-.191-.24zM52.475 8.86c-1.1-.191-2.248.67-2.87 1.435-.478-1.34-1.77-3.157-3.73-1.913-1.34.86-1.866 2.535-1.196 3.97.909 1.913 2.248 3.635 3.922 4.926.096.096.239.096.335.048 1.004-.526 5.644-3.013 5.93-5.261.192-1.53-.86-2.966-2.391-3.205zM17.752 7.282c0-.191.095-.383.19-.526.288-.335.384-.718.288-1.148-.048-.24-.096-.526-.048-.765.096-.718-.335-1.435-1.004-1.722a2.385 2.385 0 00-1.148-.144l-.144-.287a1.426 1.426 0 00-.813-.574c-.43-.143-.909-.287-1.387-.287-.574-.047-1.1-.19-1.674-.382A4.5 4.5 0 0110.96.873a6.129 6.129 0 00-.957-.526C9.19.012 7.612-.371 6.368.729c-.287.192-.43.527-.43.861 0 .048 0 .144.048.192l-.048.095c-.144.43-.192.909-.144 1.387.048.24.287.383.526.287.096 0 .144-.095.24-.143.047-.096.143-.24.239-.335a1.36 1.36 0 000 .622.49.49 0 00.239.287.37.37 0 00.478-.096v.24a.36.36 0 00.24.334c.143.048.286.048.43-.096.095-.143.239-.239.382-.334-.143.19-.239.43-.287.67 0 .19.096.334.24.382.143.048.287.048.382-.048.144-.096.24-.191.383-.24a1.324 1.324 0 00-.144.623c0 .239.192.382.43.382.096 0 .144-.048.24-.095.096-.096.191-.192.287-.24-.048.192-.096.335-.096.527 0 .143.096.239.24.287.143.047.334.047.43-.096l.095-.096v.335a.46.46 0 00.431.335c.096 0 .143-.048.24-.096l.19-.191c0 .095 0 .191.048.287a.577.577 0 00.24.239c.143.048.334 0 .43-.144.048-.095.096-.19.191-.239.67.287 1.291.622 1.961.957l.287.143h-1.435-.43a.363.363 0 01-.096-.19.373.373 0 00-.191-.192.305.305 0 00-.287 0c-.096.048-.144.095-.191.143-.048.096-.048.192-.048.287-.048-.048-.048-.095-.048-.191-.048-.096-.096-.191-.24-.24-.143-.095-.334 0-.43.144a1.395 1.395 0 00-.095.43c-.048-.095-.048-.143-.096-.238-.048-.096-.096-.192-.24-.24a.386.386 0 00-.43.144c-.095.191-.143.43-.143.67v.047c-.144-.191-.24-.43-.335-.67a.577.577 0 00-.24-.238c-.19-.096-.382 0-.477.143-.096.144-.096.335-.144.526-.048-.095-.048-.143-.096-.191a.576.576 0 00-.239-.24c-.191-.095-.382 0-.478.144-.048.144-.096.335-.143.479v-.096c0-.144-.096-.24-.24-.287a.459.459 0 00-.43.096c-.144.19-.191.43-.24.67l-.047.43h.048c0 .047.048.095.048.143.239.43.621.765 1.1 1.005.095.047.191.047.287.095.191.048.765.096 2.104-.335a6.01 6.01 0 01.478-.143l.192.096h.048a7.42 7.42 0 002.008.573c.622 0 1.244-.19 1.77-.573a7.73 7.73 0 01.861-.479.971.971 0 00.622-1.1c.478.048.909-.335.956-.813 0-.143 0-.191-.047-.24z" fill="#9E7494"/>
          </svg>
          
          {/* Left Wheel */}
          <svg className="w-[8%] absolute bottom-0 left-0 ml-[18.92%] mb-[-3%] animate-spin-reverse" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.6482 6.36121C13.6482 9.87445 10.8002 12.7225 7.28699 12.7225C3.7738 12.7225 0.925781 9.87445 0.925781 6.36121C0.925781 2.84802 3.7738 0 7.28699 0C10.8002 0 13.6482 2.84802 13.6482 6.36121ZM9.82275 6.36108C9.82275 7.76111 8.68787 8.89606 7.28784 8.89606C5.88782 8.89606 4.75293 7.76111 4.75293 6.36108C4.75293 4.96112 5.88782 3.82617 7.28784 3.82617C8.68787 3.82617 9.82275 4.96112 9.82275 6.36108Z" fill="white"/>
            <path d="M8.00488 2.63063L8.38751 1.14795L8.77015 1.24361L8.38751 2.72629L8.00488 2.63063Z" fill="#FF2C46"/>
            <path d="M11.2575 2.67859L10.3966 3.92213L10.0618 3.68298L10.5401 2.96555L9.63131 3.39602L9.29651 3.15688L9.39216 2.10464L8.86605 2.86989L8.53125 2.63074L9.39216 1.38721L9.82263 1.67417L9.67914 2.91773L10.827 2.3916L11.0662 2.58293L11.2575 2.67859Z" fill="#FF2C46"/>
            <path d="M11.688 5.78744L11.1619 6.21788L11.0663 5.83525L11.5446 5.45263L11.4489 5.02216L10.875 5.16564L10.7793 4.78302L12.262 4.40039L12.3576 4.68735L12.549 5.40478C12.6446 5.64393 12.4533 5.93091 12.2142 5.97874C11.975 5.97874 11.7837 5.93092 11.688 5.78744ZM11.7837 4.87868L11.9272 5.45263C11.9272 5.50046 11.975 5.54828 12.0228 5.50045C12.0707 5.50045 12.1185 5.45261 12.0707 5.40478L11.9272 4.83086L11.7837 4.87868Z" fill="#FF2C46"/>
            <path d="M12.2143 6.79222H12.0708L11.9751 7.46183L11.5925 7.41399L11.6881 6.7444L11.4968 6.69656L11.3533 7.74879L10.9707 7.70098L11.2098 6.26611L12.6925 6.50526L12.4534 7.94012L12.0708 7.89228L12.2143 6.79222Z" fill="#FF2C46"/>
            <path d="M10.0137 9.13599L10.2528 8.75334L10.5876 8.80118L10.9224 8.22723L10.7311 7.94027L10.9702 7.55762L11.879 8.94466L11.6399 9.32729L10.0137 9.13599ZM11.0181 8.94466L11.4485 9.04033L11.1616 8.6577L11.0181 8.94466Z" fill="#FF2C46"/>
            <path d="M9.0575 10.2353L8.81836 9.9005L9.96626 9.0874L10.8272 10.331L10.4924 10.5701L9.91842 9.66135L9.0575 10.2353Z" fill="#FF2C46"/>
            <path d="M7.57418 10.6183L7.47852 10.2357L8.81772 9.90088L9.20036 11.3836L8.81772 11.4792L8.53076 10.3792L7.57418 10.6183Z" fill="#FF2C46"/>
            <path d="M5.80469 11.5267L6.52212 10.6657L6.56995 10.0918L7.00041 10.1396L6.95258 10.6657L7.4787 11.718L7.00041 11.6701L6.71344 11.0484L6.28298 11.5745L5.80469 11.5267Z" fill="#FF2C46"/>
            <path d="M4.0349 8.51416L4.3697 8.80115L4.27405 9.13596L4.75233 9.5664L5.03931 9.42292L5.37411 9.70988L3.84359 10.3795L3.50879 10.0447L4.0349 8.51416ZM4.08273 9.5664L3.93925 9.99687L4.3697 9.80554L4.08273 9.5664Z" fill="#FF2C46"/>
            <path d="M2.3133 6.45703L2.45678 7.0788L3.55684 6.8875L3.6525 7.27013L2.55244 7.50927L2.6481 8.13104L2.26546 8.2267L1.93066 6.55269L2.3133 6.45703Z" fill="#FF2C46"/>
            <path d="M3.12641 4.92659L3.79601 4.78311L3.70036 5.16573L3.07858 5.2614L2.98292 5.69187L3.55687 5.83535L3.46121 6.21797L1.97852 5.88317L2.02635 5.5962L2.16984 4.87877C2.21766 4.63963 2.45681 4.44832 2.74378 4.49615C2.93509 4.59181 3.07858 4.73527 3.12641 4.92659ZM2.60029 5.64402L2.74378 5.0701C2.74378 5.02227 2.74378 4.97444 2.69595 4.97444C2.64812 4.97444 2.60029 4.97442 2.60029 5.02225L2.4568 5.64402H2.60029Z" fill="#FF2C46"/>
            <path d="M3.07883 3.77877L3.22231 3.87443L3.60495 3.30048L3.89192 3.49178L3.50929 4.06573L3.65277 4.16139L4.27455 3.30048L4.60935 3.53962L3.74843 4.73534L2.50488 3.87443L3.3658 2.67871L3.7006 2.91785L3.07883 3.77877Z" fill="#FF2C46"/>
            <path d="M5.996 2.72641L5.56554 2.96555L5.03942 2.72641V3.30036L4.60896 3.5395L4.65679 2.63074L3.74805 2.24812L4.13067 2.00898L4.70462 2.24812V1.62635L5.08725 1.38721L5.03942 2.34378L5.996 2.72641Z" fill="#FF2C46"/>
          </svg>

          {/* Right Wheel */}
          <svg className="w-[8%] absolute bottom-0 right-0 mr-[17.8%] mb-[-1%] animate-spin-reverse origin-center" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.6482 6.36121C13.6482 9.87445 10.8002 12.7225 7.28699 12.7225C3.7738 12.7225 0.925781 9.87445 0.925781 6.36121C0.925781 2.84802 3.7738 0 7.28699 0C10.8002 0 13.6482 2.84802 13.6482 6.36121ZM9.82275 6.36108C9.82275 7.76111 8.68787 8.89606 7.28784 8.89606C5.88782 8.89606 4.75293 7.76111 4.75293 6.36108C4.75293 4.96112 5.88782 3.82617 7.28784 3.82617C8.68787 3.82617 9.82275 4.96112 9.82275 6.36108Z" fill="white"/>
            <path d="M8.00488 2.63063L8.38751 1.14795L8.77015 1.24361L8.38751 2.72629L8.00488 2.63063Z" fill="#FF2C46"/>
            <path d="M11.2575 2.67859L10.3966 3.92213L10.0618 3.68298L10.5401 2.96555L9.63131 3.39602L9.29651 3.15688L9.39216 2.10464L8.86605 2.86989L8.53125 2.63074L9.39216 1.38721L9.82263 1.67417L9.67914 2.91773L10.827 2.3916L11.0662 2.58293L11.2575 2.67859Z" fill="#FF2C46"/>
            <path d="M11.688 5.78744L11.1619 6.21788L11.0663 5.83525L11.5446 5.45263L11.4489 5.02216L10.875 5.16564L10.7793 4.78302L12.262 4.40039L12.3576 4.68735L12.549 5.40478C12.6446 5.64393 12.4533 5.93091 12.2142 5.97874C11.975 5.97874 11.7837 5.93092 11.688 5.78744ZM11.7837 4.87868L11.9272 5.45263C11.9272 5.50046 11.975 5.54828 12.0228 5.50045C12.0707 5.50045 12.1185 5.45261 12.0707 5.40478L11.9272 4.83086L11.7837 4.87868Z" fill="#FF2C46"/>
            <path d="M12.2143 6.79222H12.0708L11.9751 7.46183L11.5925 7.41399L11.6881 6.7444L11.4968 6.69656L11.3533 7.74879L10.9707 7.70098L11.2098 6.26611L12.6925 6.50526L12.4534 7.94012L12.0708 7.89228L12.2143 6.79222Z" fill="#FF2C46"/>
            <path d="M10.0137 9.13599L10.2528 8.75334L10.5876 8.80118L10.9224 8.22723L10.7311 7.94027L10.9702 7.55762L11.879 8.94466L11.6399 9.32729L10.0137 9.13599ZM11.0181 8.94466L11.4485 9.04033L11.1616 8.6577L11.0181 8.94466Z" fill="#FF2C46"/>
            <path d="M9.0575 10.2353L8.81836 9.9005L9.96626 9.0874L10.8272 10.331L10.4924 10.5701L9.91842 9.66135L9.0575 10.2353Z" fill="#FF2C46"/>
            <path d="M7.57418 10.6183L7.47852 10.2357L8.81772 9.90088L9.20036 11.3836L8.81772 11.4792L8.53076 10.3792L7.57418 10.6183Z" fill="#FF2C46"/>
            <path d="M5.80469 11.5267L6.52212 10.6657L6.56995 10.0918L7.00041 10.1396L6.95258 10.6657L7.4787 11.718L7.00041 11.6701L6.71344 11.0484L6.28298 11.5745L5.80469 11.5267Z" fill="#FF2C46"/>
            <path d="M4.0349 8.51416L4.3697 8.80115L4.27405 9.13596L4.75233 9.5664L5.03931 9.42292L5.37411 9.70988L3.84359 10.3795L3.50879 10.0447L4.0349 8.51416ZM4.08273 9.5664L3.93925 9.99687L4.3697 9.80554L4.08273 9.5664Z" fill="#FF2C46"/>
            <path d="M2.3133 6.45703L2.45678 7.0788L3.55684 6.8875L3.6525 7.27013L2.55244 7.50927L2.6481 8.13104L2.26546 8.2267L1.93066 6.55269L2.3133 6.45703Z" fill="#FF2C46"/>
            <path d="M3.12641 4.92659L3.79601 4.78311L3.70036 5.16573L3.07858 5.2614L2.98292 5.69187L3.55687 5.83535L3.46121 6.21797L1.97852 5.88317L2.02635 5.5962L2.16984 4.87877C2.21766 4.63963 2.45681 4.44832 2.74378 4.49615C2.93509 4.59181 3.07858 4.73527 3.12641 4.92659ZM2.60029 5.64402L2.74378 5.0701C2.74378 5.02227 2.74378 4.97444 2.69595 4.97444C2.64812 4.97444 2.60029 4.97442 2.60029 5.02225L2.4568 5.64402H2.60029Z" fill="#FF2C46"/>
            <path d="M3.07883 3.77877L3.22231 3.87443L3.60495 3.30048L3.89192 3.49178L3.50929 4.06573L3.65277 4.16139L4.27455 3.30048L4.60935 3.53962L3.74843 4.73534L2.50488 3.87443L3.3658 2.67871L3.7006 2.91785L3.07883 3.77877Z" fill="#FF2C46"/>
            <path d="M5.996 2.72641L5.56554 2.96555L5.03942 2.72641V3.30036L4.60896 3.5395L4.65679 2.63074L3.74805 2.24812L4.13067 2.00898L4.70462 2.24812V1.62635L5.08725 1.38721L5.03942 2.34378L5.996 2.72641Z" fill="#FF2C46"/>
          </svg>
        </m.div>
      
        {/* Play Button / Widget */}
        <m.div variants={fade} className="w-1/4 absolute bottom-0 left-0 ml-[30px] mb-[30px] z-20">
          <div className="bg-yellow rounded-full p-1 px-1 md:px-2 md:pr-5 max-w-[350px] flex overflow-hidden items-center">
          <button className="text-off-black block w-auto focus:border-none focus:outline-none" onClick={() => togglePlay() }>
            <div className="md:mr-[10px]">
              { isPlaying ? (
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

          <span className="uppercase text-[16px] md:text-[20px] xl:text-[20px] tracking-tight dark:text-off-black flex-1 overflow-hidden hidden md:block">
            <div className="relative flex overflow-x-hidden">
              <div className="motion-safe:animate-marquee whitespace-nowrap font-mono">
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
              </div>

              <div className="absolute top-0 motion-safe:animate-marquee2 whitespace-nowrap font-mono">
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
                <span className="mx-1">I'm Fine</span>
                <span className="mx-1 text-[18px]">&bull;</span>
              </div>
            </div>
          </span>
        </div>
        </m.div>

        <m.div variants={fade} className="pt-[20px] md:pt-[25px] fixed z-[50] top-0 left-0 w-full font-mono">
          <Container>
            <div className="flex flex-wrap">
              <div className="mx-auto hidden md:block">
                <nav>
                  <ul className="flex items-center">
                    <li>
                      <Link href="/">
                        <a onClick={() => stop() } aria-label="Navigate to home page" className={`ml-1 md:ml-2 uppercase block text-[16px] md:text-[17px] xl:text-[22px] pl-0 md:pl-0 md:pr-3 py-1 md:py-2 group relative overflow-hidden rounded-2xl`}>
                          <div className="relative overflow-hidden z-10">
                            <Rollover label="Go Back" />
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Container>
        </m.div>

        <Container>
          <m.div variants={fade} className="mb-12 md:mb-16 xl:mb-24 mt-[18vw] md:mt-[20vh] lg:mt-[22vh] xl:mt-[21vh] 2xl:mt-[24vh] relative z-10">
            {/* <h1 className="uppercase text-[11vw] md:text-[10vw] text-red text-center break-all will-change mb-[3vw] leading-[0.85]">
              <span className="relative overflow-hidden block">
                <m.span variants={reveal} className="block">
                  LET’S JAM!
                </m.span>
              </span>
            </h1> */}

            <div className="relative">
              <h1 className="uppercase text-[10vw] leading-[0.95] text-center will-change block text-red dark:text-red relative z-10">
                <span className="block overflow-hidden relative">
                  <m.span variants={fadeDelay} className="block">LET’S JAM!</m.span>
                </span>
              </h1>
              <div className="absolute inset-0 flex justify-center pointer-events-none z-20 opacity-100 dark:opacity-0">
                <div className="overflow-hidden xl:pt-[4px]">
                  <m.div variants={fade}>
                    <div className="w-[77.75vw] pointer-events-none motion-safe:animate-float mt-[-1.25vw]">
                      <Image
                        src={letsJamText}
                        alt="Let's Jam"
                        layout="responsive"
                        className="w-full will-change"
                        priority
                      />
                    </div>
                  </m.div>
                </div>
              </div>

              <div className="absolute inset-0 flex justify-center pointer-events-none z-20 opacity-0 dark:opacity-100">
                <div className="overflow-hidden xl:pt-[4px]">
                  <m.div variants={fade}>
                    <div className="w-[76.5vw] pointer-events-none motion-safe:animate-float ml-[-0.1vw] mt-[-0.8vw]">
                      <Image
                        src={letsJamTextDark}
                        alt="Let's Jam"
                        layout="responsive"
                        className="w-full will-change"
                        priority
                      />
                    </div>
                  </m.div>
                </div>
              </div>
            </div>


            <div className="flex justify-center mb-[20vw] md:mb-[18vw]">
              <div className="w-full lg:w-10/12 xl:w-1/2">

                <div className="mb-12 md:mb-16">
                  <DrumMachine/>
                </div>
                
                <div className="flex">                  
                  {/* <div className="w-full flex space-x-3 font-mono">
                    <span className="block">Vocals Loaded... <span className="text-red">{JSON.stringify(this.state.vocalsLoaded)}</span></span>
                    <span className="block">Guitar Loaded... <span className="text-red">{JSON.stringify(this.state.guitarLoaded)}</span></span>
                    <span className="block">Bass Loaded... <span className="text-red">{JSON.stringify(this.state.bassLoaded)}</span></span>
                    <span className="block">Keys Loaded... <span className="text-red">{JSON.stringify(this.state.keysLoaded)}</span></span>
                    <span className="block">Drums Loaded... <span className="text-red">{JSON.stringify(this.state.drumsLoaded)}</span></span>
                  </div> */}

                  {/* { isPlaying && (
                    <button className="bg-off-black text-off-white font-mono py-2 px-3 block rounded-lg ml-2" onClick={this.handleStop}>Reset</button>
                  )} */}
                </div>

                <div className="w-full flex justify-center space-x-12">
                  <div className="w-24 xl:w-32">
                    <button 
                      className="text-off-white dark:text-off-black font-mono relative w-24 xl:w-32 h-24 xl:h-32 mb-3"
                      onClick={toggleVox}>
                      <span className={`${!isVoxPlaying ? 'text-blue dark:text-off-white' : 'text-blue dark:text-yellow' } absolute inset-0 block`}>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center text-center dark:text-red text-off-white leading-none">
                          { isVoxPlaying ? (
                            <span className="block w-[40px] h-[40px] bg-pink dark:bg-current"></span>
                          ) : (
                            <span className="block arrow-right ml-[7px]"></span>
                          ) }
                        </span>
                        
                        <svg className="w-full" viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M142 71.5l-6.206 29.242-17.545 24.186-25.85 14.947L62.711 143l-28.389-9.238-22.182-20.004L0 86.448V56.552l12.14-27.31L34.325 9.238 62.712 0l29.686 3.125 25.851 14.948 17.545 24.185L142 71.5z" fill="currentColor"/></svg>
                      </span>
                    </button>
                    <span className={`font-mono block text-center text-xl ${isVoxPlaying ? '' : 'line-through'}`}>Vocals</span>
                  </div>

                  <div className="w-24 xl:w-32">
                    <button 
                      className="text-off-white dark:text-off-black font-mono relative w-24 xl:w-32 h-24 xl:h-32 mb-3"
                      onClick={toggleGuitar}>
                      <span className={`${!isGuitarPlaying ? 'text-blue dark:text-off-white' : 'text-blue dark:text-yellow' } absolute inset-0 block`}>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center dark:text-red text-off-white">
                          { isGuitarPlaying ? (
                            <span className="block w-[40px] h-[40px] bg-pink dark:bg-current"></span>
                          ) : (
                            <span className="block arrow-right ml-[7px]"></span>
                          )}
                        </span>
                        
                        <svg className="w-full" viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M142 71.5l-6.206 29.242-17.545 24.186-25.85 14.947L62.711 143l-28.389-9.238-22.182-20.004L0 86.448V56.552l12.14-27.31L34.325 9.238 62.712 0l29.686 3.125 25.851 14.948 17.545 24.185L142 71.5z" fill="currentColor"/></svg>
                      </span>
                    </button>
                    <span className={`font-mono block text-center text-xl ${isGuitarPlaying ? '' : 'line-through'}`}>Guitar</span>
                  </div>

                  <div className="w-24 xl:w-32">
                    <button 
                      className="text-off-white dark:text-off-black font-mono relative w-24 xl:w-32 h-24 xl:h-32 mb-3"
                      onClick={toggleBass}>
                      <span className={`${!isBassPlaying ? 'text-blue dark:text-off-white' : 'text-blue dark:text-yellow' } absolute inset-0 block`}>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center dark:text-red text-off-white">
                          { isBassPlaying ? (
                            <span className="block w-[40px] h-[40px] bg-pink dark:bg-current"></span>
                          ) : (
                            <span className="block arrow-right ml-[7px]"></span>
                          )}
                        </span>
                        
                        <svg className="w-full" viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M142 71.5l-6.206 29.242-17.545 24.186-25.85 14.947L62.711 143l-28.389-9.238-22.182-20.004L0 86.448V56.552l12.14-27.31L34.325 9.238 62.712 0l29.686 3.125 25.851 14.948 17.545 24.185L142 71.5z" fill="currentColor"/></svg>
                      </span>
                    </button>
                    <span className={`font-mono block text-center text-xl ${isBassPlaying ? '' : 'line-through'}`}>Bass</span>
                  </div>

                  <div className="w-24 xl:w-32">
                    <button 
                      className="text-off-white dark:text-off-black font-mono relative w-24 xl:w-32 h-24 xl:h-32 mb-3"
                      onClick={toggleDrums}>
                      <span className={`${!isDrumsPlaying ? 'text-blue dark:text-off-white' : 'text-blue dark:text-yellow' } absolute inset-0 block`}>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center dark:text-red text-off-white">
                          { isDrumsPlaying ? (
                            <span className="block w-[40px] h-[40px] bg-pink dark:bg-current"></span>
                          ) : (
                            <span className="block arrow-right ml-[7px]"></span>
                          )}
                        </span>
                        
                        <svg className="w-full" viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M142 71.5l-6.206 29.242-17.545 24.186-25.85 14.947L62.711 143l-28.389-9.238-22.182-20.004L0 86.448V56.552l12.14-27.31L34.325 9.238 62.712 0l29.686 3.125 25.851 14.948 17.545 24.185L142 71.5z" fill="currentColor"/></svg>
                      </span>
                    </button>
                    <span className={`font-mono block text-center text-xl ${isDrumsPlaying ? '' : 'line-through'}`}>Drums</span>
                  </div>

                  <div className="w-24 xl:w-32">
                    <button 
                      className="text-off-white dark:text-off-black font-mono relative w-24 xl:w-32 h-24 xl:h-32 mb-3"
                      onClick={toggleKeys}>
                      <span className={`${!isKeysPlaying ? 'text-blue dark:text-off-white' : 'text-blue dark:text-yellow' } absolute inset-0 block`}>
                        <span className="absolute inset-0 w-full h-full flex items-center justify-center dark:text-red text-off-white">
                          { isKeysPlaying ? (
                            <span className="block w-[40px] h-[40px] bg-pink dark:bg-current"></span>
                          ) : (
                            <span className="block arrow-right ml-[7px]"></span>
                          )}
                        </span>
                        
                        <svg className="w-full" viewBox="0 0 142 143" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M142 71.5l-6.206 29.242-17.545 24.186-25.85 14.947L62.711 143l-28.389-9.238-22.182-20.004L0 86.448V56.552l12.14-27.31L34.325 9.238 62.712 0l29.686 3.125 25.851 14.948 17.545 24.185L142 71.5z" fill="currentColor"/></svg>
                      </span>
                    </button>
                    <span className={`font-mono block text-center text-xl ${isKeysPlaying ? '' : 'line-through'}`}>Keys</span>
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </Container>
      </div>
    </m.div>
  )
}