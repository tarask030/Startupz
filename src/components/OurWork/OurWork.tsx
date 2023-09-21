import Tolq from 'assets/images/our-work/tolq.png'
import FeedbackLabs from 'assets/images/our-work/feedback-labs.png'
import Codekeeper from 'assets/images/our-work/codekeeper.png'
import LegalSite from 'assets/images/our-work/legal-site.png'
import Like from 'assets/images/like.png'
import { H3, OurWorkTile, TextWithLikes } from 'components'
import Image from 'next/image'

export const OurWork = () => {
  const data = [
    {
      title: 'Tolq',
      titleColor: 'text-green-600',
      subtitle:
        'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
      image: Tolq,
      action: () => console.log('More about Tolq'),
    },
    {
      title: 'Feedback Labs',
      titleColor: 'text-blue-400',
      subtitle:
        'Feedback Labs turns feedback into actionable insights for your team.',
      image: FeedbackLabs,
      action: () => console.log('More about Feedback Labs'),
    },
    {
      title: 'Codekeeper',
      titleColor: 'text-green-500',
      subtitle:
        'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
      image: Codekeeper,
      action: () => console.log('More about Codekeeper'),
    },
    {
      title: 'LegalSite',
      titleColor: 'text-purple-500',
      subtitle:
        'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
      image: LegalSite,
      action: () => console.log('More about LegalSite'),
    },
  ]

  return (
    <div className='flex justify-center'>
      <div className='w-[1568px] px-16 pt-[140px] pb-[180px]'>
        <H3 className='text-center'>Our work</H3>
        <div className='grid grid-cols-2 gap-6 mt-14'>
          {data.map(({ title, titleColor, subtitle, image, action }, index) => {
            return (
              <OurWorkTile
                titleColor={titleColor}
                key={index}
                title={title}
                subtitle={subtitle}
                image={image}
                action={action}
              />
            )
          })}
        </div>
        <div className='mt-44'>
          <TextWithLikes
            text='Startups create a world that actually is better. Any problem that
          can be solved, will be solved by a startup, and that is a huge
          opportunity.'
          />
        </div>
      </div>
    </div>
  )
}
