import Link from 'next/link'
import Image from 'next/image'
import MetaTeaser from '@/components/meta-teaser'

export default function ReleaseTeaser({ href, image, title, date, type }) {
  return(
    <div>
      <div className="w-full mb-6">
        <Image
          src={image}
          alt="Placeholder"
          layout="responsive"
          className="w-full rounded-md will-change"
          placeholder="blur"
        />
      </div>
        
      <div className="flex justify-center mb-4 md:mb-6">
        <MetaTeaser />
      </div>
      
      <h3 className="text-[19px] md:text-[21px] xl:text-[26px] text-center mb-2 xl:mb-4 leading-none">{title}</h3>

      <span className="flex uppercase justify-center space-x-2 text-lg">
        <span>Spotify</span>
        <span>&bull;</span>
        <span>Apple Music</span>
        <span>&bull;</span>
        <span>Amazon</span>
      </span>
    </div>
  )
}