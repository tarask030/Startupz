import Image from 'next/image'
import Logo from 'assets/logo.svg'
import { Button } from 'components'
import { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { push } = useRouter()

  const handleTurnToContact = () => {
    push('#contact'), setIsMobileMenuOpen(false)
  }

  const Menu = ({ className }: { className: string }) => (
    <ul className={className}>
      <li className='list-none text-blue-900'>
        <Link href='#startups' onClick={() => setIsMobileMenuOpen(false)}>
          Startups
        </Link>
      </li>
      <li className='list-none text-blue-900'>
        <Link href='#contact' onClick={() => setIsMobileMenuOpen(false)}>
          Contact
        </Link>
      </li>
    </ul>
  )

  return (
    <div className='flex justify-center bg-white fixed w-full z-20'>
      <div
        className={clsx(
          'py-[20px] max-w-[1568px] w-full px-8 justify-between items-center flex',
          'md:px-16 md:py-[37px]'
        )}
      >
        <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
          <Image priority src={Logo} alt='Logo' />
        </Link>
        <div className='hidden items-center gap-x-[42px] md:flex'>
          <Menu className='flex gap-x-[40px]' />
          <Button
            text='Shoot us a message'
            action={handleTurnToContact}
            backgroundColor='white'
          />
        </div>
        <button
          className='md:hidden z-10 w-[50px] h-[50px] flex justify-end items-center'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div>
            <div
              className={clsx(
                'border-b border-2 w-[30px] transition-all',
                isMobileMenuOpen && '-rotate-45 translate-y-[5px]'
              )}
            />
            <div
              className={clsx(
                'border-b w-[30px] border-2 mt-2',
                isMobileMenuOpen && 'hidden'
              )}
            />
            <div
              className={clsx(
                'border-b w-[30px] border-2 mt-2 transition-all',
                isMobileMenuOpen && 'rotate-45 -translate-y-[6px]'
              )}
            />
          </div>
        </button>
      </div>
      <div
        className={clsx(
          'w-screen h-screen bg-white absolute flex items-center justify-center',
          'transition-all',
          isMobileMenuOpen ? 'left-0' : 'left-full'
        )}
      >
        <div className='flex flex-col items-center gap-y-[70px]'>
          <Link href='/' onClick={() => setIsMobileMenuOpen(false)}>
            <Image priority src={Logo} alt='Logo' className='-translate-y-2' />
          </Link>
          <Menu className='flex flex-col gap-y-[70px]' />
          <Button
            text='Shoot us a message'
            action={handleTurnToContact}
            backgroundColor='white'
          />
        </div>
      </div>
    </div>
  )
}
