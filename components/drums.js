import React from 'react'
import useKeypress from 'react-use-keypress'
import { Howl } from 'howler'
import { m } from 'framer-motion'

var snare = new Howl({
  src: ['./stems/drums/im-fine-snare.wav'],
  volume: 1,
});
var kick = new Howl({
  src: ['./stems/drums/im-fine-kick.wav'],
  volume: 2,
});
var hat = new Howl({
  src: ['./stems/drums/im-fine-hat.wav'],
  volume: 5,
});
var crash = new Howl({
  src: ['./stems/drums/im-fine-crash.wav'],
  volume: 4,
});

function DrumMachine() {
  useKeypress(['b', '1', '3', 'h'], (event) => {
    if (event.key === '3') {
      snare.play();
    } else if (event.key === '1') {
      kick.play();
    } else if (event.key === 'b') {
      hat.play();
    } else if (event.key === 'h') {
      crash.play();
    }
  });

  return (
    <div className="bg-black bg-opacity-10 dark:bg-opacity-10 py-4 px-4 rounded-full max-w-2xl mx-auto">
      <div className="flex flex-wrap md:space-x-3 justify-center">
        <button
          onClick={() => kick.play()}
          className="mb-4 md:mb-0 w-1/2 md:flex-1 flex items-center justify-center space-x-3 focus:border-none focus:outline-none drum-button"
        >
          <span className="dark:bg-yellow bg-blue rounded-full flex h-[29px] py-1 px-4 dark:text-off-black text-off-white">
            <svg className="w-[18px]" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/></svg>
            <span className="inline-block uppercase ml-1 text-[14px]">1</span>
          </span>
          <span className="font-display uppercase text-[11px]">kick</span>
        </button>
        <button onClick={() => snare.play()} className="mb-4 md:mb-0 w-1/2 md:flex-1 flex items-center justify-center space-x-3 focus:border-none focus:outline-none">
          <span className="dark:bg-yellow bg-blue rounded-full flex h-[29px] py-1 px-4 dark:text-off-black text-off-white">
            <svg className="w-[18px]" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/></svg>
            <span className="inline-block uppercase ml-1 text-[14px]">3</span>
          </span>
          <span className="font-display uppercase text-[11px]">snare</span>
        </button>
        <button onClick={() => hat.play()} className="w-1/2 md:flex-1 flex items-center justify-center space-x-3 focus:border-none focus:outline-none">
          <span className="dark:bg-yellow bg-blue rounded-full flex h-[29px] py-1 px-4 dark:text-off-black text-off-white">
            <svg className="w-[18px]" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/></svg>
            <span className="inline-block uppercase ml-1 text-[14px]">b</span>
          </span>
          <span className="font-display uppercase text-[11px]">hi-hat</span>
        </button>
        <button onClick={() => crash.play()} className="w-1/2 md:flex-1 flex items-center justify-center space-x-3 focus:border-none focus:outline-none">
          <span className="dark:bg-yellow bg-blue rounded-full flex h-[29px] py-1 px-4 dark:text-off-black text-off-white">
            <svg className="w-[18px]" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/><path d="M10 7H.77a.765.765 0 01-.545-.228.782.782 0 01-.225-.55V.778C0 .57.081.374.225.228A.765.765 0 01.77 0H10c.204 0 .4.082.544.228a.782.782 0 01.225.55v5.444a.782.782 0 01-.225.55A.765.765 0 0110 7zM.77.778v5.444H10V.778H.77z" fill="currentColor"/><path d="M2.962 4.577h4.307v.807H2.962v-.807zM1.615 1.615h.808v.808h-.808v-.808zM2.962 1.615h.807v.808h-.807v-.808zM4.577 1.615h.808v.808h-.808v-.808zM6.192 1.615H7v.808h-.808v-.808zM1.615 4.577h.808v.807h-.808v-.807zM1.615 2.961h.808v.808h-.808v-.808zM2.962 2.961h.807v.808h-.807v-.808zM4.577 2.961h.808v.808h-.808v-.808zM7.808 1.615h1.346v.808H7.808v-.808zM7.808 2.961h1.346v.808H7.808v-.808zM6.192 2.961H7v.808h-.808v-.808zM8.077 4.577h1.077v.807H8.077v-.807z" fill="currentColor"/></svg>
            <span className="inline-block uppercase ml-1 text-[14px]">h</span>
          </span>
          <span className="font-display uppercase text-[11px]">crash</span>
        </button>
      </div>
    </div>
  ) 
}

export default DrumMachine;