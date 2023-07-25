import Container from 'src/components/atoms/Container/Container'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import { useForm } from 'react-hook-form'

import Button from 'src/components/atoms/Button/Button'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from 'src/store'

import ArrowLeftIcon from '@heroicons/react/outline/ArrowLeftIcon'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormTypeLogin, formSchemaLogin } from 'src/forms'
import { login } from 'src/config/auth'
import { useAsync } from 'src/hooks/async'
import FormError from 'src/components/atoms/FormError'

export const BackToHome = () => (
  <Link
    href='/'
    className='flex items-center justify-start w-full gap-1 mt-8 group'
  >
    <ArrowLeftIcon className='w-4 h-4 group-hover:animate-slide-left' /> Back to
    home
  </Link>
)

const LoginForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormTypeLogin>({
    resolver: zodResolver(formSchemaLogin),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeLogin) => login(data),
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
        const { email, password } = data
        await callAsyncFn({ email, password })
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
      <Button isLoading={loading} type='submit' fullWidth>
        Login
      </Button>
      {error ? <FormError error={error.message} /> : null}

      <div className='mt-12 text-sm'>
        Do not have an IKEA account?
        <br />
        <Link href='/createAccount' className='text-primary'>
          Create one{' '}
        </Link>
        now.
      </div>
    </form>
  )
}

const Login = () => (
  <Container>
    <div className='sm:grid sm:grid-cols-2'>
      <OverlapSpace className='relative overflow-hidden'>
        <OverlapSpace.Child>
          <div className='flex flex-col items-center justify-center min-h-screen p-12 '>
            <div className='max-w-sm'>
              <div className='text-4xl '>
                <span className='font-bold text-primary'>Login</span> to your
                IKEA account.
              </div>
              <div className='mt-4 text-sm text-primary-800'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
                inventore, nihil beatae perspiciatis.
              </div>
            </div>

            <LoginForm className='p-6 sm:hidden' />
            <div className='w-full max-w-sm'>
              <BackToHome />
            </div>
          </div>
        </OverlapSpace.Child>
        <OverlapSpace.Child className='relative -z-10 animate-spin-30'>
          <div className='absolute animate-move-right-48'>
            <BlurredCirle className='fill-primary/50 ' radius={800} />
          </div>
          <div className='absolute -translate-y-1/2 top-full animate-move-right-60'>
            <BlurredCirle className='fill-yellow/50 ' radius={600} />
          </div>
          <div className='absolute top-1/2 animate-move-right-36'>
            <BlurredCirle className='fill-red/50 ' radius={400} />
          </div>
          <div className='absolute -translate-y-1/2 animate-move-right-24'>
            <BlurredCirle className='fill-green/50 ' radius={200} />
          </div>
          <div className='absolute animate-move-right-12'>
            <BlurredCirle className='fill-white/50 ' radius={100} />
          </div>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className='items-center justify-center hidden sm:flex'>
        <LoginForm className='max-w-md p-12 ' />
      </div>
    </div>
  </Container>
)

export default Login
