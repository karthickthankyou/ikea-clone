import type { NextPage } from 'next'
import Head from 'next/head'
import Badge from 'src/components/atoms/Badge/Badge'
import Image from 'src/components/atoms/Image/Image'
import Button from 'src/components/atoms/Button/Button'
import Container from 'src/components/atoms/Container'
import BannerCard01 from 'src/components/molecules/BannerCard01/BannerCard01'
import CardCategory01 from 'src/components/molecules/CardCategory01/CardCategory01'
import ColorCard from 'src/components/molecules/ColorCard/ColorCard'
import HScroll from 'src/components/molecules/HScroll'
import {
  sampleImages,
  sampleImagesForMasonry,
} from 'src/components/molecules/Masonry/data'
import PriceMarker from 'src/components/molecules/PriceMarker/PriceMarker'
import ProductCard01 from 'src/components/molecules/ProductCard01'
import AdBanner from 'src/components/organisms/AdBanner/AdBanner'
import HomeBanner from 'src/components/organisms/HomeBanner'
import Masonry2 from 'src/components/templates/Masonry2'
import { useGetProductsQuery } from 'src/generated/graphql'
import { Children } from 'src/types'

const Heading = ({
  children,
  className,
}: {
  children: Children
  className?: string
}) => (
  <div className={`text-2xl font-medium mb-4 md:mb-8 ${className}`}>
    {children}
  </div>
)

const ColorCardScroll = () => (
  <HScroll>
    <HScroll.Arrow
      distance={200}
      className='absolute left-0 z-10 hidden h-full lg:block lg:-translate-x-1/2'
      arrowClassName='shadow-md'
    />
    <HScroll.Arrow
      distance={200}
      right
      className='absolute right-0 z-10 hidden h-full lg:block lg:translate-x-1/2'
      arrowClassName='shadow-md'
    />
    <HScroll.Body className='pb-responsive gap-responsive'>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg'
          title='Work from home essentials'
          detailsColor='primaryDark'
        >
          <PriceMarker
            badge={
              <Badge size='sm' variant='red'>
                Top seller
              </Badge>
            }
            displayName='Markus'
            category='Office chair'
            price={14990}
            className='flex items-end text-white'
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648659014/IKEA/linh-le-Ebwp2-6BG8E-unsplash_dlook3.jpg'
          title='Everyday essentials under Rs.499'
          detailsColor='gray'
        >
          <PriceMarker
            badge={
              <Badge size='sm' variant='primary'>
                Highest rated
              </Badge>
            }
            displayName='Korken'
            category='Bottle with stopper'
            price={199}
            className='flex items-end justify-end text-black '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
          title='Unbox your true potential of your home'
          detailsColor='yellow'
        >
          <PriceMarker
            displayName='Brimnes'
            category='Cabinet with doors'
            price={8990}
            className='flex items-end justify-start text-black '
          />
        </ColorCard>
      </HScroll.Child>

      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648659098/IKEA/olena-sergienko-mdzHRYPKt5s-unsplash_mhr2ma.jpg'
          title='Prepare for celebrations'
          detailsColor='black'
        >
          <PriceMarker
            displayName='Dosntmatr'
            category='Just a christmas tree'
            price={5699}
            className='flex items-start justify-center text-white '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648657783/IKEA/becca-tapert-dO3qTKxwik0-unsplash_hh5oap.jpg'
          title='Furniture under Rs.2999'
          detailsColor='red'
        >
          <PriceMarker
            badge={
              <Badge size='sm' variant='red'>
                Top seller
              </Badge>
            }
            displayName='Aromatix'
            category='Lattern for tea light'
            price={499}
            className='flex items-start justify-start text-black '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648657852/IKEA/sarah-dorweiler-0QmzQZndkOQ-unsplash_e5tys0.jpg'
          title='Textiles under Rs.999'
          detailsColor='primary'
        >
          <PriceMarker
            badge={
              <Badge size='sm' variant='gray'>
                New arrival
              </Badge>
            }
            displayName='Mulig'
            category='Clothes rack'
            price={899}
            className='flex items-end justify-center text-black '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648657901/IKEA/inside-weather-Uxqlfigh6oE-unsplash_m5ot2w.jpg'
          title='Our lowest price'
          detailsColor='yellowDark'
        >
          <PriceMarker
            displayName='Hildgen'
            category='Apron'
            price={199}
            className='flex items-end justify-end text-black '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648659877/IKEA/cut-collective-8yIYQDR8Qr8-unsplash_lrzcvy.jpg'
          title='Bathroom essentials'
          detailsColor='redDark'
        >
          <PriceMarker
            badge={
              <Badge size='sm' variant='gray'>
                New arrival
              </Badge>
            }
            displayName='Finfordela'
            category='Chopping board'
            price={129}
            className='flex items-start justify-start text-black '
          />
        </ColorCard>
      </HScroll.Child>
    </HScroll.Body>
  </HScroll>
)

const CategoryCards = [
  <CardCategory01
    text='Sofas & armchair'
    key='Sofas & armchair'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657901/IKEA/inside-weather-Uxqlfigh6oE-unsplash_m5ot2w.jpg'
  />,
  <CardCategory01
    text='Cookware & tableware'
    key='Cookware & tableware'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657852/IKEA/sarah-dorweiler-0QmzQZndkOQ-unsplash_e5tys0.jpg'
  />,
  <CardCategory01
    text='Smart home'
    key='Smart home'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657752/IKEA/samantha-gades-BlIhVfXbi9s-unsplash_gvzqkh.jpg'
  />,
  <CardCategory01
    text='Mirrors'
    key='Mirrors'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661059/IKEA/giorgio-trovato-CgXnJ4Z5KFI-unsplash_moggxx.jpg'
  />,
  <CardCategory01
    text='Shoe rack and clothes stand'
    key='Shoe rack and clothes stand'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661101/IKEA/jake-goossen-juhD3QGCv20-unsplash_jiwsem.jpg'
  />,
  <CardCategory01
    text='Beds'
    key='Beds'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661142/IKEA/chastity-cortijo-M8iGdeTSOkg-unsplash_htvvhi.jpg'
  />,
  <CardCategory01
    text='Chairs'
    key='Chairs'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg'
  />,
  <CardCategory01
    text='Table and desks'
    key='Table and desks'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
  />,
  <CardCategory01
    text='Baby & children'
    key='Baby & children'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661196/IKEA/kids-me-germany-Zzgmde4_lYU-unsplash_tcx3xa.jpg'
  />,
  <CardCategory01
    text='Storage & organisation'
    key='Storage & organisation'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660778/IKEA/nathan-oakley-jSbBnR22cXc-unsplash_xakhbu.jpg'
  />,
]

const Home: NextPage = () => {
  const [data] = useGetProductsQuery()

  return (
    <div>
      <Head>
        <title>IKEA Clone | Karthick Ragavendran</title>
        <meta name='description' content='Home page of the IKEA clone.' />
        <link rel='icon' href='/ikea.ico' />
      </Head>

      <HomeBanner />
      <Container className='mt-24 space-y-24'>
        <div>
          <Heading>Highlights</Heading>
          <ColorCardScroll />
        </div>
        <div>
          <Heading>Limited festive collection</Heading>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-responsive'>
            <BannerCard01
              title='AROMATISK'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
              href='/'
            />
            <BannerCard01
              title='KORKEN'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648657783/IKEA/becca-tapert-dO3qTKxwik0-unsplash_hh5oap.jpg'
              href='/'
            />
          </div>
        </div>

        <div>
          <Heading>Top categories</Heading>
          <Masonry2
            columns='5'
            gap='4'
            shortOnes={[1, 2, 5, 6, 9]}
            className='hidden lg:block'
            heights={['h-64', 'h-80']}
          >
            {CategoryCards}
          </Masonry2>
          <Masonry2
            childrenLimit={9}
            columns='3'
            gap='3'
            shortOnes={[2, 3, 8]}
            className='hidden md:block lg:hidden'
            heights={['h-52', 'h-72']}
          >
            {CategoryCards}
          </Masonry2>
          <Masonry2
            childrenLimit={10}
            columns='2'
            gap='2'
            shortOnes={[4, 5]}
            heights={['h-48', 'h-64']}
            className='block md:hidden'
          >
            {CategoryCards}
          </Masonry2>
        </div>
        <div>
          <Heading className='flex items-center justify-between gap-4'>
            <div className='break-words'>IKEA family products</div>
            <Button className='mt-4' variant='outlined' color='black'>
              Show all offers
            </Button>
          </Heading>
          <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
            <ProductCard01
              tag='IKEA family price'
              title='BOKKREMLA'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
              price={2.29}
            />
            <ProductCard01
              tag='IKEA family price'
              title='BOKKREMLA'
              description='Lunch bag'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
              price={2.29}
              oldPrice={2.99}
              rating={4.2}
              reviews={12}
            />
            <ProductCard01
              tag='IKEA family price'
              title='EKTORP'
              description='Arm chair'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648662487/IKEA/andrea-davis-duXRC8vT5wQ-unsplash_uugrpn.jpg'
              price={2.29}
            />
            <ProductCard01
              tag='IKEA family price'
              title='BOKKREMLA'
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!'
              src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
              price={2.29}
            />
          </div>
        </div>
        <div>
          <Heading>Shop products for a more sustainable home</Heading>
          <HScroll>
            <HScroll.Body className='gap-responsive pb-responsive'>
              <HScroll.Child className='relative w-56 h-72'>
                <CardCategory01
                  text='Storage & organisation'
                  key='Storage & organisation'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648660778/IKEA/nathan-oakley-jSbBnR22cXc-unsplash_xakhbu.jpg'
                />
              </HScroll.Child>
              <HScroll.Child className='relative h-72 w-52 '>
                <CardCategory01
                  text='Baby & children'
                  key='Baby & children'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648661196/IKEA/kids-me-germany-Zzgmde4_lYU-unsplash_tcx3xa.jpg'
                />
              </HScroll.Child>
              <HScroll.Child className='relative h-72 w-52 '>
                <CardCategory01
                  text='Table and desks'
                  key='Table and desks'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
                />
              </HScroll.Child>
              <HScroll.Child className='relative h-72 w-52 '>
                <CardCategory01
                  text='Beds'
                  key='Beds'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648661142/IKEA/chastity-cortijo-M8iGdeTSOkg-unsplash_htvvhi.jpg'
                />
              </HScroll.Child>
              <HScroll.Child className='relative h-72 w-52 '>
                <CardCategory01
                  text='Chairs'
                  key='Chairs'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg'
                />
              </HScroll.Child>
              <HScroll.Child className='relative h-72 w-52'>
                <CardCategory01
                  text='Shoe rack and clothes stand'
                  key='Shoe rack and clothes stand'
                  href='/'
                  src='https://res.cloudinary.com/thankyou/image/upload/v1648661101/IKEA/jake-goossen-juhD3QGCv20-unsplash_jiwsem.jpg'
                />
              </HScroll.Child>
            </HScroll.Body>
          </HScroll>
        </div>
        <div>
          <Heading>More ideas and inspiration</Heading>
          <Masonry2
            columns='3'
            gap='4'
            shortOnes={[4, 5, 14]}
            childrenLimit={15}
            className='hidden lg:block'
            heights={['h-72', 'h-112']}
          >
            {sampleImages.map((item) => (
              <Image key={item} alt='' src={item} layout='fill' />
            ))}
          </Masonry2>
          <Masonry2
            childrenLimit={14}
            columns='2'
            gap='3'
            shortOnes={[6, 7]}
            className='hidden md:block lg:hidden'
            heights={['h-52', 'h-72']}
          >
            {sampleImages.map((item) => (
              <Image key={item} alt='' src={item} layout='fill' />
            ))}
          </Masonry2>
          <Masonry2
            childrenLimit={14}
            columns='2'
            gap='2'
            shortOnes={[6, 7]}
            heights={['h-48', 'h-64']}
            className='block md:hidden'
          >
            {sampleImages.map((item) => (
              <Image key={item} alt='' src={item} layout='fill' />
            ))}
          </Masonry2>
        </div>

        <AdBanner
          src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
          title='Download the IKEA app'
          description='Explore a wide range of affordable, well-designed and functional home furnishing solutions for every room in your home - at your fingertips.'
          buttonText='Download now'
          href='/'
        />
      </Container>
    </div>
  )
}

export default Home
