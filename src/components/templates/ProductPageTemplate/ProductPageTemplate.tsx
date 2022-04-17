import Container from 'src/components/atoms/Container'
import { useAppSelector } from 'src/store'
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'
import PriceCard from 'src/components/molecules/PriceCard/PriceCard'

import StoryCard from 'src/components/molecules/StoryCard'
import Image from 'src/components/atoms/Image/Image'
import HScroll from 'src/components/molecules/HScroll/HScroll'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import DesignerThoughtsCard from 'src/components/molecules/DesignerThoughtsCard'
import { Dispatch, SetStateAction, useState } from 'react'
import Sidebar from 'src/components/molecules/Sidebar'
import {
  GetProductQuery,
  useGetViewedProductsQuery,
} from 'src/generated/graphql'
import Loading from 'src/components/molecules/Loading/Loading'
import { UseQueryState } from 'urql/dist/types/hooks/useQuery'
import Price from 'src/components/molecules/Price/Price'
import Link from 'src/components/atoms/Link/Link'
import Badge from 'src/components/atoms/Badge'
import Skeleton from 'src/components/molecules/Skeleton/Skeleton'
import { sampleSearchData } from 'src/store/sampleData'
import Masonry2 from '../Masonry2'

export interface IProductPageTemplateProps {
  product: UseQueryState<GetProductQuery, object>
}

const InfoInSidebar = ({
  title,
  onClick,
}: {
  title: string
  onClick: Dispatch<SetStateAction<boolean>>
}) => (
  <button
    type='button'
    onClick={() => onClick((state) => !state)}
    className='flex items-center justify-between w-full gap-2 py-6 group'
  >
    <div className='text-xl font-semibold text-black underline-offset-8 group-hover:underline'>
      {title}
    </div>
    <ArrowRightIcon className='w-8 h-8 p-1 group-hover:animate-slide-right' />
  </button>
)

const dummyImages = [
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no1.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no2.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no3.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no4.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no5.jpg',
  'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/no6.jpg',
]

const RecentlyViewedProducts = ({
  title,
  currentProductId,
}: {
  title: string
  currentProductId: number | undefined
}) => {
  const uid = useAppSelector((state) => state.user.data.user?.uid)
  const [viewedItems] = useGetViewedProductsQuery({
    variables: {
      uid,
    },
    pause: !uid,
  })
  const { data, fetching } = viewedItems

  return (
    <div>
      <div className='mb-4 text-xl font-semibold'>{title}</div>
      <div className='flex gap-1'>
        {fetching &&
          [1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton key={item} className='w-48 h-64' />
          ))}
      </div>
      <HScroll className='flex gap-responsive'>
        <HScroll.Body className='gap-1'>
          {data?.views.map((item) => (
            <HScroll.Child className='relative mb-12 w-52' key={item.id}>
              <Link href={`/products/${item.pid}`}>
                <Image
                  src={item.product.images && item.product.images[0]}
                  alt=''
                />
                <div className='mt-2 text-sm line-clamp-2'>
                  {item.product.name}
                </div>
                <Price
                  price={item.product.price}
                  oldPrice={item.product.oldPrice}
                  className='mt-2'
                />
                <div className='mt-1'>
                  {currentProductId === item.pid && (
                    <Badge size='sm' variant='red'>
                      Current page
                    </Badge>
                  )}
                </div>
              </Link>
            </HScroll.Child>
          ))}
        </HScroll.Body>
        <HScroll.Arrow
          distance={200}
          className='absolute left-0 z-10 h-full -translate-x-1/2'
          arrowClassName='shadow-md'
        />
        <HScroll.Arrow
          distance={200}
          right
          className='absolute right-0 z-10 h-full translate-x-1/2'
          arrowClassName='shadow-md'
        />
      </HScroll>
    </div>
  )
}
const RelatedProducts = ({ title }: { title: string }) => {
  const { products } = sampleSearchData.data
  return (
    <div>
      <div className='mb-4 text-xl font-semibold'>{title}</div>
      <HScroll className='flex gap-responsive'>
        <HScroll.Body className='gap-1'>
          {products.map((item) => (
            <HScroll.Child className='relative mb-12 w-72' key={item.id}>
              <ProductCard01 product={item} />
            </HScroll.Child>
          ))}
        </HScroll.Body>
        <HScroll.Arrow
          distance={200}
          className='absolute left-0 z-10 h-full -translate-x-1/2'
          arrowClassName='shadow-md'
        />
        <HScroll.Arrow
          distance={200}
          right
          className='absolute right-0 z-10 h-full translate-x-1/2'
          arrowClassName='shadow-md'
        />
      </HScroll>
    </div>
  )
}

const ProductPageTemplate = ({ product }: IProductPageTemplateProps) => {
  const uid = useAppSelector((state) => state.user.data.user?.uid)

  const [openProductDetials, setOpenProductDetials] = useState(false)
  const [openMeasurements, setOpenMeasurements] = useState(false)

  const { error, data, fetching } = product

  if (error) {
    if (error.networkError)
      return (
        <Container>
          Network error. Please check your connection and try again.
        </Container>
      )

    if (error.message.includes('unexpected null value'))
      return (
        <Container>Invalid URL. The product id provided is invalid.</Container>
      )

    return <Container>Something went wrong.</Container>
  }

  if (fetching) return <Loading />
  if (!data?.product) return <Container>Product not found</Container>

  const productImages = data.product?.images || []

  const images = productImages.slice(0, 6)

  return (
    <>
      <Sidebar
        overlayBlur={false}
        open={openProductDetials}
        setOpen={setOpenProductDetials}
      >
        <Sidebar.Body>
          <div className='text-2xl font-semibold'>Product details</div>
          <Price
            price={data?.product?.price}
            oldPrice={data?.product?.oldPrice}
            showTaxComment
            className='mt-4'
          />
          <div>
            {data?.product?.outOfStock && (
              <div className='text-red'>Out of stock</div>
            )}
          </div>
          {/* <div className='mt-4'>MRP Rs.{data?.product?.price} (incl. tax)</div> */}
          <div className='mt-2 text-gray-600'>{data.product.description}</div>
        </Sidebar.Body>
      </Sidebar>
      <Sidebar
        overlayBlur={false}
        open={openMeasurements}
        setOpen={setOpenMeasurements}
      >
        <Sidebar.Body>
          <div className='text-2xl font-semibold'>Measurements</div>
          <div className='mt-4 space-y-2 text-gray-600'>
            <p>{data.product.measurements}</p>
          </div>
        </Sidebar.Body>
      </Sidebar>

      <Container className='space-y-12'>
        <div className='grid grid-cols-1 gap-8 mb-24 lg:grid-cols-3 lg:gap-16'>
          <div className='col-span-1'>
            <div className='sticky top-24'>
              <PriceCard product={data?.product} />
            </div>
          </div>
          <div className='col-span-2 space-y-6 md:space-y-12'>
            <Masonry2
              gap='6'
              columns='2'
              shortOnes={[2, 3]}
              className='block md:hidden'
            >
              {images.map((item: string) => (
                <Image alt='' key={item} src={item} layout='fill' />
              ))}
              {Array.from(Array(6 - images.length), (x, i) => i).map((item) => (
                <Image alt='' key={item} src='' layout='fill' />
              ))}
            </Masonry2>
            <Masonry2
              gap='6'
              columns='3'
              shortOnes={[1, 2, 5, 6, 9]}
              className='hidden md:block'
            >
              {images.map((item: string) => (
                <Image key={item} alt='' src={item} layout='fill' />
              ))}
              {Array.from(Array(6 - images.length), (x, i) => i).map((item) => (
                <Image alt='' key={item} src='' layout='fill' />
              ))}
            </Masonry2>
            <div className='max-w-2xl text-xl font-light leading-relaxed text-gray-700'>
              {data.product.description}
            </div>
            <div className='flex flex-wrap gap-3'>
              {data.product?.tags?.map((item: string) => (
                <Badge variant='yellow' key={item}>
                  {item}
                </Badge>
              ))}
            </div>
            <div>
              <div className='text-sm text-gray-600'>Article number</div>
              <div className='mt-2 inline-block px-1 py-0.5 text-sm text-white bg-black'>
                803.542.76
              </div>
            </div>
            <StoryCard
              src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
              title='Hello world'
              description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quas quod recusandae! Temporibus, debitis. Beatae molestiae dicta nisi cumque, doloribus reiciendis sequi voluptates voluptate quasi dolorum iste accusantium tenetur repellendus placeat fugit! Earum sapiente accusantium illo ipsum quia blanditiis quos suscipit perferendis excepturi ipsam? Repellendus aliquid ea alias itaque ipsam aut, non, consequuntur sunt blanditiis dolore autem temporibus natus, enim quidem voluptates? Quisquam sequi, vero labore, a id maxime sunt animi qui dolorum eum ullam vel provident nemo autem at, ad iusto voluptatum. Animi, illum est dolorum voluptas quo aliquam id harum reprehenderit? Ut laudantium iusto, iste aperiam mollitia autem aut porro necessitatibus impedit? Repellendus natus saepe accusamus quod nemo voluptatum quo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quas quod recusandae! Temporibus, debitis. Beatae molestiae dicta nisi cumque, doloribus reiciendis sequi voluptates voluptate quasi dolorum iste accusantium tenetur repellendus placeat fugit! Earum sapiente accusantium illo ipsum quia blanditiis quos suscipit perferendis excepturi ipsam? Repellendus aliquid ea alias itaque ipsam aut, non, consequuntur sunt blanditiis dolore autem temporibus natus, enim quidem voluptates? Quisquam sequi, vero labore, a id maxime sunt animi qui dolorum eum ullam vel provident nemo autem at, ad iusto voluptatum. Animi, illum est dolorum voluptas quo aliquam id harum reprehenderit? Ut laudantium iusto, iste aperiam mollitia autem aut porro necessitatibus impedit? Repellendus natus saepe accusamus quod nemo voluptatum quo!'
            />
            <div className='space-y-2'>
              <InfoInSidebar
                onClick={setOpenProductDetials}
                title='Product details'
              />
              <InfoInSidebar
                onClick={setOpenMeasurements}
                title='Measurements'
              />
            </div>

            <DesignerThoughtsCard
              src='https://res.cloudinary.com/thankyou/image/upload/v1648458983/nike/people/IMG_20220313_150642_bbbv9x.jpg'
              designerName='Karthick Ragavendran'
              thoughts={
                <div className='space-y-3'>
                  <p>
                    Lorem ipsum is{' '}
                    <span className='font-bold'>Hakuna Matata</span> for
                    programmers. Lorem ipsum! What a wonderful phrase. Lorem
                    ipsum! It did not even rhyme!
                  </p>
                  <p>
                    Let&apos;s all lorem ipsum for a moment. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ea pariatur quisquam
                    nisi.
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <RelatedProducts title='Related products' />
        {uid ? (
          <RecentlyViewedProducts
            title='Recently viewed products'
            currentProductId={data?.product?.id}
          />
        ) : (
          <div>
            <Link href='/login' className='underline underline-offset-4'>
              Login
            </Link>{' '}
            to see viewed products.
          </div>
        )}
      </Container>
    </>
  )
}

export default ProductPageTemplate
