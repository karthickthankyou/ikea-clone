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

const ikeaLoginSchema = yup
  .object({
    email: yup.string().email().required('A valid email is required.'),
    password: yup.string().required('Enter the password.'),
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
            <div className='text-4xl '>
              <span className='font-bold text-primary'>Login</span> to your IKEA
              account.
            </div>
            <div className='mt-4 text-sm text-primary-800'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              inventore, nihil beatae perspiciatis.
            </div>

            <LoginForm className='p-6 sm:hidden' />
          </div>
        </OverlapSpace.Child>
        <OverlapSpace.Child className='relative shadow-inner -z-10 bg-primary-25/50 '>
          <div className='absolute translate-x-1/2 -translate-y-1/2 top-full right-1/2'>
            <BlurredCirle className='fill-yellow/30 ' radius={600} />
          </div>
          <div className='absolute translate-x-1/2 right-full'>
            <BlurredCirle className='fill-red/10 ' radius={600} />
          </div>
          <div className='absolute right-0 translate-x-1/2 -translate-y-1/2'>
            <BlurredCirle className='fill-green/30 ' radius={600} />
          </div>
          <div className='absolute left-1/2'>
            <BlurredCirle className='fill-white/30 ' radius={100} />
          </div>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className='items-center justify-center hidden sm:flex'>
        <LoginForm className='p-12' />
      </div>
    </div>
  </Container>
)

export default Login