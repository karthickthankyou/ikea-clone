/* eslint-disable react/jsx-props-no-spreading */
import Container from 'src/components/atoms/Container/Container'
import BlurredCirle from 'src/components/molecules/BlurredCirle/BlurredCirle'
import OverlapSpace from 'src/components/molecules/OverlapSpace/OverlapSpace'
import * as yup from 'yup'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'src/components/atoms/Button/Button'
import Link from 'src/components/atoms/Link/Link'
import { useAppDispatch, useAppSelector } from 'src/store'
import { signin } from 'src/store/user'
import { useAuthPageResponses } from 'src/hooks'
import ArrowLeftIcon from '@heroicons/react/outline/ArrowLeftIcon'

export const BackToHome = () => (
  <Link
    href='/'
    className='flex items-center justify-start w-full gap-1 mt-8 group'
  >
    <ArrowLeftIcon className='w-4 h-4 group-hover:animate-slide-left' /> Back to
    home
  </Link>
)

const ikeaLoginSchema = yup
  .object({
    email: yup.string().email().required('A valid email is required.'),
    password: yup
      .string()
      .required('Enter the password.')
      .min(6, 'Password should be 6 characters minimum.'),
  })
  .required()

type IkeaLoginSchema = yup.InferType<typeof ikeaLoginSchema>

const LoginForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IkeaLoginSchema>({
    resolver: yupResolver(ikeaLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { loading } = useAppSelector((state) => state.user)

  useAuthPageResponses()

  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit((data) => {
    dispatch(signin(data))
  })
  return (
    <form
      onSubmit={onSubmit}
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
