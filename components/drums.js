import React from 'react';
import useKeypress from 'react-use-keypress';
import { Howl } from 'howler';

const drums = new Howl({
  "src": [
    "./stems/drums-sprite.webm",
    "./stems/drums-sprite.mp3"
  ],
  "sprite": {
    "clap": [
      0,
      734.2630385487529
    ],
    "closed-hihat": [
      2000,
      445.94104308390035
    ],
    "crash": [
      4000,
      1978.6848072562354
    ],
    "kick": [
      7000,
      553.0839002267571
    ],
    "open-hihat": [
      9000,
      962.7664399092968
    ],
    "snare": [
      11000,
      354.48979591836684
    ]
  }
});

function playDrum(soundToPlay) {
  drums.play(soundToPlay);
}

function DrumMachine() {
  useKeypress(['b', '1', '2', '3', '4', '7'], (event) => {
    if (event.key === 'b') {
      playDrum('closed-hihat');
    } else if (event.key === '1') {
      playDrum('snare')
    } else if (event.key === '2') {
      playDrum('clap')
    } else if (event.key === '3') {
      playDrum('open-hihat')
    } else if (event.key === '4') {
      playDrum('crash')
    } else if (event.key === '7') {
      playDrum('kick')
    }
  });

  return (
    <div className="bg-black bg-opacity-10 dark:bg-opacity-50 p-6 rounded-lg">
      <h2 className="font-bold mb-0 pb-5 flex text-2xl">Play Along Mode <span className="flex items-center bg-red text-off-white dark:text-off-black dark:bg-yellow ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">Keyboard</span></h2>
      <div className="flex flex-wrap">
        <button onClick={() => playDrum('snare')} className="font-mono flex items-center justify-center bg-black dark:bg-off-white text-off-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">snare <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">1</span></button>
        <button onClick={() => playDrum('clap')} className="font-mono flex items-center justify-center bg-black dark:bg-off-white  text-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">clap <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">2</span></button>
        <button onClick={() => playDrum('open-hihat')} className="font-mono flex items-center justify-center bg-black dark:bg-off-white text-off-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">open hi-hat <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">3</span></button>
        <button onClick={() => playDrum('crash')} className="font-mono flex items-center justify-center bg-black dark:bg-off-white text-off-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">crash <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">4</span></button>
        <button onClick={() => playDrum('kick')} className="ml-auto font-mono flex items-center justify-center bg-black dark:bg-off-white text-off-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">kick <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">7</span></button>
      </div>
      <div className="flex flex-wrap">
        <button onClick={() => playDrum('closed-hihat')} className="font-mono flex items-center justify-center bg-black dark:bg-off-white text-off-white dark:text-off-black text-center mr-3 mb-3 px-3 py-3 capitalize rounded-lg">closed hi-hat <span className="block text-off-black dark:text-off-white bg-off-white dark:bg-off-black ml-2 rounded-lg px-2 py-1 text-xs font-bold shadow-md">B</span></button>
      </div>
    </div>
  ) 
}

export default DrumMachine;