import Tolq from 'assets/images/our-work/tolq.png'
import FeedbackLabs from 'assets/images/our-work/feedback-labs.png'
import Codekeeper from 'assets/images/our-work/codekeeper.png'
import LegalSite from 'assets/images/our-work/legal-site.png'
import { AnimationSection, H2, OurWorkTile, TextWithLikes } from 'components'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

export const OurWork = () => {
  const { push } = useRouter()

  const handleTurnToContact = () => {
    push('#contact')
  }

  const data = [
    {
      title: 'Tolq',
      titleColor: 'text-green-600',
      subtitle:
        'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
      image: Tolq,
      action: handleTurnToContact,
    },
    {
      title: 'Feedback Labs',
      titleColor: 'text-blue-400',
      subtitle:
        'Feedback Labs turns feedback into actionable insights for your team.',
      image: FeedbackLabs,
      action: handleTurnToContact,
    },
    {
      title: 'Codekeeper',
      titleColor: 'text-green-500',
      subtitle:
        'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
      image: Codekeeper,
      action: handleTurnToContact,
    },
    {
      title: 'LegalSite',
      titleColor: 'text-purple-500',
      subtitle:
        'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
      image: LegalSite,
      action: handleTurnToContact,
    },
  ]

  return (
    <div className='flex justify-center'>
      <div
        id='our-work'
        className={clsx('-translate-y-20', 'md:-translate-y-10')}
      />
      <div
        className={clsx(
          'w-[1568px] px-8 pt-[90px] pb-[100px]',
          'md:px-16 md:pt-[140px] md:pb-[180px]'
        )}
      >
        <AnimationSection>
          <H2 className='text-center'>Our work</H2>
          <div
            className={clsx('grid grid-cols-1 gap-6 mt-14', 'md:grid-cols-2')}
          >
            {data.map(
              ({ title, titleColor, subtitle, image, action }, index) => {
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
              }
            )}
          </div>
          <div className={clsx('mt-20', 'md:mt-44')}>
            <TextWithLikes
              text='Startups create a world that actually is better. Any problem that
          can be solved, will be solved by a startup, and that is a huge
          opportunity.'
            />
          </div>
        </AnimationSection>
      </div>
    </div>
  )
}
