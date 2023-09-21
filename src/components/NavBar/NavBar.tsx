import Image from 'next/image'
import Logo from 'assets/logo.svg'
import { Button } from 'components'
import { useState } from 'react'
import clsx from 'clsx'

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <div className='flex justify-center bg-white fixed w-full z-10'>
        <div className='py-[37px] max-w-[1568px] w-full px-16 justify-between items-center flex'>
          <div>
            <Image priority src={Logo} alt='Logo' className='-translate-y-2' />
          </div>
          <div className='hidden items-center gap-x-[42px] md:flex'>
            <ul className='flex gap-x-[40px]'>
              <li className='list-none'>Startups</li>
              <li className='list-none'>Contact</li>
            </ul>
            <Button
              text='Shoot us a message'
              action={() => console.log('')}
              backgroundColor='white'
            />
          </div>
        </div>
        <button
          className='md:hidden z-10 w-[50px] h-[50px] p-10 flex justify-center items-center'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div>
            <div className='border-b border-2 w-[35px]' />
            <div className='border-b w-[35px] border-2  mt-2' />
            <div className='border-b w-[35px] border-2  mt-2' />
          </div>
        </button>

        <div
          className={clsx(
            'w-screen h-screen bg-white absolute flex items-center justify-center',
            '-translate-y-full transition-all',
            isMobileMenuOpen && '-translate-y-0'
          )}
        >
          <div className='flex flex-col items-center gap-y-[70px]'>
            <div>
              <Image
                priority
                src={Logo}
                alt='Logo'
                className='-translate-y-2'
              />
            </div>
            <ul className='flex flex-col gap-y-[70px]'>
              <li className='list-none'>Startups</li>
              <li className='list-none'>Contact</li>
            </ul>
            <Button
              text='Shoot us a message'
              action={() => console.log('')}
              backgroundColor='white'
            />
          </div>
        </div>
      </div>
    </>
  )
}
