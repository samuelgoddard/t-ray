import HeadingKanji from '@/components/heading-kanji'
import japaneseCharacters from '@/public/images/japanese-characters.svg'

export default function Heading({ text }) {
  return(
    <HeadingKanji heading={text} kanji={japaneseCharacters} />
  )
}