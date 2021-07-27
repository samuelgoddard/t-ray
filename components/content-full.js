import BlockContent from '@sanity/block-content-to-react'

export default function ContentFull({ text }) {
  return(
    <div className="text-[23px] md:text-[32px] xl:text-[40px] 2xl:text-[46px] leading-[1.175] text-indent tracking-tight w-full md:w-10/12 mx-auto">
      <BlockContent serializers={{ container: ({ children }) => children }} blocks={text} />
    </div>
  )
}