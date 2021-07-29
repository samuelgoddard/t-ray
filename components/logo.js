import Image from 'next/image'
import trayLogo from '@/public/images/logo.svg'

export default function Logo({ ticker }) {
  return (
    <div className={`hover:animate-wiggle ${ ticker ? 'w-[40px] md:w-[55px] xl:w-[65px]' : 'w-[55px] md:w-[65px] xl:w-[75px]'}`}>
      <Image
        src={trayLogo}
        alt="ImReallyATrex Logo"
        layout="responsive"
        className="w-full will-change"
      />
    </div>
  )
}