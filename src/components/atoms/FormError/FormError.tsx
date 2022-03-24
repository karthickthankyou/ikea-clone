import { FieldError } from 'react-hook-form'
import ExclamationIcon from '@heroicons/react/solid/ExclamationIcon'

export interface IFormErrorProps {}

const FormError = ({ error }: { error?: FieldError | undefined }) => {
  if (error) {
    return (
      <div className='mt-1 text-sm text-gray-900'>
        <ExclamationIcon className='inline w-4 h-4 text-red-600' />{' '}
        {error.message}
      </div>
    )
  }
  return null
}

export default FormError
