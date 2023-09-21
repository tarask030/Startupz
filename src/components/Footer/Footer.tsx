import Image from 'next/image'
import Logo from 'assets/logo.svg'
import Twitter from 'assets/social/twitter.svg'
import Linkedin from 'assets/social/linkedin.svg'
import Instagram from 'assets/social/instagram.svg'
import { P } from 'components'

export const Footer = () => {
  return (
    <div className='bg-gray-400 h-[400px] justify-center flex items-center'>
      <div className='w-[1568px] flex justify-between p-16'>
        <div>
          <Image priority src={Logo} alt='Logo' className='-translate-y-2' />
          <P className='text-gray-600 mt-[60px]'>
            {`© ${new Date().getFullYear()} Startupz.`}
            <br /> All rights reserved.
          </P>
        </div>

        <div className='max-w-[300px]'>
          <span className='text-blue-900 text-[18px] font-normal'>
            Companies
          </span>
          <div className='mt-5 flex gap-y-1 flex-col'>
            <P className='text-blue-500'>Tolq</P>
            <P className='text-blue-500'>LegalSite</P>
            <P className='text-blue-500'>Codekeeper</P>
            <P className='text-blue-500'>Feedback Labs</P>
          </div>
        </div>

        <div className='max-w-[300px]'>
          <span className='text-blue-900 text-[18px] font-normal'>Contact</span>
          <P className='text-gray-600 mt-5'>
            World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
            The Hague The Netherlands
          </P>
          <P className='text-blue-500 mt-[11px]'>Send us an email</P>
        </div>

        <div>
          <span className='text-blue-900 text-[18px] font-normal'>
            Follow us
          </span>
          <div className='flex flex-col gap-y-[15px] mt-5'>
            <a href='https://twitter.com/' target='_blank'>
              <Image priority src={Twitter} alt='Follow us on Twitter' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank'>
              <Image priority src={Linkedin} alt='Follow us on Linkedin' />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <Image priority src={Instagram} alt='Follow us on Instagram' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
