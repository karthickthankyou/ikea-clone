/* eslint-disable camelcase */
import Button from 'src/components/atoms/Button/Button'
import Image from 'src/components/atoms/Image'
import Price from 'src/components/molecules/Price/Price'
import {
  useInsertUserProductsOneMutation,
  User_Products_Type_Enum,
} from 'src/generated/graphql'
import { useAppSelector } from 'src/store'

export interface ICartCardProps {
  id: number
  src: string
  title: string
  description: string
  price: number
  buttonType: User_Products_Type_Enum
}

const CartCard = ({
  id,
  src,
  title,
  description,
  price,
  buttonType,
}: ICartCardProps) => {
  const [{ fetching, data, error }, removeProductFromCart] =
    useInsertUserProductsOneMutation()
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  return (
    <div className='md:flex group'>
      <div className='flex-shrink-0 w-24 h-24 mr-2'>
        <Image src={src} alt='' className='rounded-lg ' />
      </div>
      <div className='flex-grow'>
        <div className='font-medium'>{title}</div>
        <div className='text-gray-600'>{description}</div>
      </div>
      <div className='flex flex-col items-end justify-between '>
        <Price price={price} />

        {fetching && <div>Loading...</div>}
        <Button
          variant='text'
          className='hidden group-hover:block'
          onClick={() =>
            removeProductFromCart({
              object: {
                pid: id,
                uid,
                type: buttonType,
              },
            })
          }
        >
          {buttonType === User_Products_Type_Enum.InCart
            ? 'Move to cart'
            : 'Save for later'}
        </Button>
      </div>
    </div>
  )
}

export default CartCard
