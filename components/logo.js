import Image from 'next/image'
import trayLogo from '@/public/images/logo.svg'

export default function Logo() {
  return (
    <div className="w-[55px] md:w-[65px] xl:w-[75px] hover:animate-wiggle">
      <Image
        src={trayLogo}
        alt="ImReallyATrex Logo"
        layout="responsive"
        className="w-full will-change"
      />
    </div>
  )
}