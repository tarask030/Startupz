import { zodResolver } from '@hookform/resolvers/zod'
import Loader from 'assets/loader.svg'
import clsx from 'clsx'
import { Button, FormInput, FormTextArea, H4 } from 'components'
import { sendContactForm } from 'lib'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactFormSchema, ContactFormType } from 'types/models'

export const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    isError &&
      setTimeout(() => {
        setIsError(false)
      }, 2000)

    isSuccess &&
      setTimeout(() => {
        setIsSuccess(false)
      }, 2000)
  }, [isSuccess, isError])

  const defaultValues = useMemo(
    () => ({
      name: '',
      email: '',
      message: '',
    }),
    []
  )

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm<ContactFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(ContactFormSchema),
    defaultValues,
  })

  const onSubmit = async (data: ContactFormType) => {
    setIsLoading(true)
    try {
      await sendContactForm(data)
      setIsSuccess(true)
      setIsLoading(false)
      reset()
    } catch (error) {
      setIsError(true)
      setIsLoading(false)
    }
  }

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          'flex flex-col items-center justify-center h-[650px] w-full',
          'bg-gray-500 px-6 pt-[72px] pb-[40px] rounded-[10px]',
          'sm:min-w-[512px] sm:w-[512px]',
          'md:px-11'
        )}
      >
        <div className='relative w-full h-full flex items-center'>
          <div
            className={clsx(
              'absolute scale-0 transition-all text-center duration-1000 top-[40%] left-0',
              'z-10 w-full',
              isError ? 'text-red-500' : 'text-gray-600',
              (isSuccess || isError) && 'scale-100'
            )}
          >
            <H4 className={clsx('text-center w-full')}>
              {isSuccess
                ? 'Thank you for contacting us!'
                : 'Failed to send contact form :('}
            </H4>
          </div>
        </div>
        <div
          className={clsx(
            'flex flex-col gap-y-4 w-full',
            (isSuccess || isError) && 'hidden'
          )}
        >
          <FormInput
            name='name'
            placeholder='Name*'
            control={control}
            type='text'
            disabled={isLoading}
            errorMessage={errors.name?.message}
          />
          <FormInput
            name='email'
            placeholder='Email*'
            control={control}
            type='email'
            disabled={isLoading}
            errorMessage={errors.email?.message}
          />
          <FormTextArea
            name='message'
            placeholder='Message*'
            control={control}
            disabled={isLoading}
            errorMessage={errors.message?.message}
          />
        </div>

        <div
          className={clsx(
            'mt-[34px] relative w-[243px] z-0',
            (isSuccess || isError) && 'hidden'
          )}
        >
          {isLoading && (
            <Image
              priority
              src={Loader}
              alt='Loader'
              className='absolute top-0 h-[45px] w-[45px] left-1/2 -translate-x-[50%]'
            />
          )}
          <Button
            className='w-full'
            text={isLoading ? '' : 'Shoot us a message'}
            backgroundColor='darkBlue'
            disabled={!isDirty || isLoading}
            type='submit'
          />
        </div>
      </form>
    </>
  )
}
