import HeadingKanji from '@/components/heading-kanji'
import imADinoKanji from '@/public/images/kanji-im-a-dino.svg'


export default function Heading({ text }) {
  return(
    <HeadingKanji horizontal heading={text} kanji={imADinoKanji} />
  )
}