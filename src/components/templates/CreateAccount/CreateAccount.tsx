import Container from 'src/components/atoms/Container/Container'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import { useForm } from 'react-hook-form'

import Button from 'src/components/atoms/Button/Button'
import Link from 'next/link'

import { FormTypeCreateAccount, formSchemaCreateAccount } from 'src/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { register as registerUser } from 'src/config/auth'
import { BackToHome } from '../Login/Login'
import { useAsync } from 'src/hooks/async'

const CreateAccountForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeCreateAccount>({
    resolver: zodResolver(formSchemaCreateAccount),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeCreateAccount) => registerUser(data),
    (err: any) => {
      if (err.code === 'auth/user-not-found') {
        return 'Invalid email.'
      } else if (err.code === 'auth/wrong-password') {
        return 'Invalid password.'
      }
      return 'Something went wrong. Please try again.'
    }
  )

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const { email, password, displayName } = data
        const user = await callAsyncFn({ email, password, displayName })
      })}
      className={`w-full mt-12 space-y-6 border border-white rounded-lg bg-white/30 backdrop-blur backdrop-filter ${className}`}
    >
      <Label title='Email' error={errors.email}>
        <Input placeholder='Enter the email.' {...register('email')} />
      </Label>
      <Label title='Password' error={errors.password}>
        <Input
          type='password'
          placeholder='********'
          {...register('password')}
        />
      </Label>
      <Label title='Display name' error={errors.displayName}>
        <Input placeholder='Enter your name.' {...register('displayName')} />
      </Label>
      <Button isLoading={loading} type='submit' fullWidth>
        Create account
      </Button>
      <div className='mt-12 text-sm'>
        Already have an IKEA account?
        <br />
        <Link href='/login' className='text-primary'>
          Login{' '}
        </Link>
        now.
      </div>
    </form>
  )
}

const CreateAccount = () => (
  <Container>
    <div className='sm:grid sm:grid-cols-2'>
      <OverlapSpace className='relative overflow-hidden'>
        <OverlapSpace.Child>
          <div className='flex flex-col items-center justify-center min-h-screen p-12 '>
            <div className='max-w-sm'>
              <div className='text-4xl '>
                <span className='font-bold text-primary'>Create</span> an IKEA
                Family Profile.
              </div>
              <div className='mt-4 text-sm text-primary-800'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                inventore, nihil beatae perspiciatis.
              </div>
            </div>

            <CreateAccountForm className='p-6 sm:hidden' />
            <div className='w-full max-w-sm'>
              <BackToHome />
            </div>
          </div>
        </OverlapSpace.Child>
        <OverlapSpace.Child className='relative animate-spin-30 -z-10 '>
          <div className='absolute -translate-y-1/2 top-2/4 animate-move-right-60'>
            <BlurredCirle className='fill-yellow/50 ' radius={800} />
          </div>
          <div className='absolute translate-y-1/2 top-2/4 animate-move-right-48'>
            <BlurredCirle className='fill-red/50 ' radius={600} />
          </div>
          <div className='absolute translate-y-1/2 top-full bottom-full animate-move-right-36'>
            <BlurredCirle className='fill-primary/50 ' radius={400} />
          </div>
          <div className='absolute -translate-y-1/2 top-full animate-move-right-24'>
            <BlurredCirle className='fill-green/50 ' radius={200} />
          </div>

          <div className='absolute top-1/2 animate-move-right-12'>
            <BlurredCirle className='fill-white/50 ' radius={100} />
          </div>
          <div className='absolute top-2/3 animate-move-right-24'>
            <BlurredCirle className='fill-white/50 ' radius={60} />
          </div>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className='items-center justify-center hidden sm:flex'>
        <CreateAccountForm className='max-w-md p-12' />
      </div>
    </div>
  </Container>
)

export default CreateAccount
