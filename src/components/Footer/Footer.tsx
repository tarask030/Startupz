import Image from 'next/image'
import Logo from 'assets/logo.svg'
import Twitter from 'assets/social/twitter.svg'
import Linkedin from 'assets/social/linkedin.svg'
import Instagram from 'assets/social/instagram.svg'
import { P, AnimationContainer } from 'components'
import clsx from 'clsx'
import Link from 'next/link'

export const Footer = () => (
  <div className='bg-gray-400 justify-center flex items-center'>
    <AnimationContainer classNames={clsx('w-[1568px] p-8', 'md:p-16')}>
      <div
        className={clsx(
          'w-full flex-col-reverse flex md:justify-between p-8 gap-y-10',
          'lg:flex-row md:gap-x-[100px] xl:gap-x-[155px] '
        )}
      >
        <div
          className={clsx(
            'flex-col-reverse gap-y-8 flex justify-between w-full',
            'smm:flex-row  lg:w-1/2'
          )}
        >
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
            <ul className='mt-5 flex gap-y-1 flex-col w-28'>
              <li className='list-none text-blue-500'>
                <Link href='#our-work'>Tolq</Link>
              </li>
              <li className='list-none text-blue-500'>
                <Link href='#our-work'>LegalSite</Link>
              </li>

              <li className='list-none text-blue-500'>
                <Link href='#our-work'>Codekeeper</Link>
              </li>
              <li className='list-none text-blue-500'>
                <Link href='#our-work'>Feedback Labs</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='flex-col-reverse gap-y-8 smm:flex-row flex justify-between w-full lg:w-1/2'>
          <div className='max-w-[300px]'>
            <span className='text-blue-900 text-[18px] font-normal'>
              Contact
            </span>
            <P className='text-gray-600 mt-5'>
              World Trade Center - The Hague Prinses Margrietplantsoen 33 2595
              AM The Hague The Netherlands
            </P>
            <Link href='#contact'>
              <P className='text-blue-500 mt-[11px]'>Send us an email</P>
            </Link>
          </div>

          <div className='w-28'>
            <span className='text-blue-900 text-[18px] font-normal'>
              Follow us
            </span>
            <div
              className={clsx('flex flex-row gap-[15px] mt-5', 'md:flex-col')}
            >
              <Link href='https://twitter.com/' target='_blank'>
                <Image priority src={Twitter} alt='Follow us on Twitter' />
              </Link>
              <Link href='https://www.linkedin.com/' target='_blank'>
                <Image priority src={Linkedin} alt='Follow us on Linkedin' />
              </Link>
              <Link href='https://www.instagram.com/' target='_blank'>
                <Image priority src={Instagram} alt='Follow us on Instagram' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimationContainer>
  </div>
)
