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
import { useAppDispatch } from 'src/store'
import { signup } from 'src/store/user/userActions'
import { useAuthPageResponses } from 'src/hooks'

const ikeaCreateAccountSchema = yup
  .object({
    email: yup.string().email().required('A valid email is required.'),
    displayName: yup.string().required('Enter your name.'),
    password: yup.string().required('Enter the password.'),
  })
  .required()

type IkeaCreateAccountSchema = yup.InferType<typeof ikeaCreateAccountSchema>

const CreateAccountForm = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IkeaCreateAccountSchema>({
    resolver: yupResolver(ikeaCreateAccountSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  useAuthPageResponses()

  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit((data) => {
    dispatch(signup(data))
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
      <Label title='Display name' error={errors.displayName}>
        <Input placeholder='Enter your name.' {...register('displayName')} />
      </Label>
      <Button type='submit' fullWidth>
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
          <div className='flex flex-col justify-center min-h-screen p-12 '>
            <div className='max-w-sm text-4xl'>
              <span className='font-bold text-primary'>Create</span> an IKEA
              Family Profile.
            </div>
            <div className='max-w-xs mt-4 text-sm text-primary-800'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              inventore, nihil beatae perspiciatis.
            </div>

            <CreateAccountForm className='p-6 sm:hidden' />
          </div>
        </OverlapSpace.Child>
        <OverlapSpace.Child className='relative shadow-inner -z-10 bg-primary-25/50 '>
          <div className='absolute right-0 translate-x-1/2 -translate-y-1/2 top-full'>
            <BlurredCirle className='fill-red/30 ' radius={600} />
          </div>
          <div className='absolute translate-x-1/2 translate-y-1/2 right-full bottom-full'>
            <BlurredCirle className='fill-yellow/10 ' radius={1000} />
          </div>
          <div className='absolute right-0 translate-x-1/2 top-1/2'>
            <BlurredCirle className='fill-white/30 ' radius={400} />
          </div>
          <div className='absolute -translate-x-1/2 translate-y-1/2 left-full bottom-full'>
            <BlurredCirle className='fill-primary/10 ' radius={600} />
          </div>
          <div className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-full'>
            <BlurredCirle className='fill-green/20 ' radius={400} />
          </div>
        </OverlapSpace.Child>
      </OverlapSpace>
      <div className='items-center justify-center hidden sm:flex'>
        <CreateAccountForm className='p-12' />
      </div>
    </div>
  </Container>
)

export default CreateAccount
