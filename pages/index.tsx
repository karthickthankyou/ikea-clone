import type { NextPage } from 'next'
import Head from 'next/head'
import Badge from 'src/components/atoms/Badge/Badge'
import Container from 'src/components/atoms/Container'
import BannerCard01 from 'src/components/molecules/BannerCard01/BannerCard01'
import Card01 from 'src/components/molecules/Card01/Card01'
import CardCategory01 from 'src/components/molecules/CardCategory01/CardCategory01'
import HScroll from 'src/components/molecules/HScroll'
import PriceMarker from 'src/components/molecules/PriceMarker/PriceMarker'
import AdBanner from 'src/components/organisms/AdBanner/AdBanner'
import HomeBanner from 'src/components/organisms/HomeBanner'
import Masonry2 from 'src/components/templates/Masonry2'
import { useGetProductsQuery } from 'src/generated/graphql'

const CategoryCards = [
  <CardCategory01
    text='Sofas & armchair'
    key='Sofas & armchair'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Cookware & tableware'
    key='Cookware & tableware'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Smart home'
    key='Smart home'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Mirrors'
    key='Mirrors'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Shoe rack and clothes stand'
    key='Shoe rack and clothes stand'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Beds'
    key='Beds'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Chairs'
    key='Chairs'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Table and desks'
    key='Table and desks'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Baby & children'
    key='Baby & children'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
  <CardCategory01
    text='Storage & organisation'
    key='Storage & organisation'
    href='/'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
  />,
]

const Home: NextPage = () => {
  const [data] = useGetProductsQuery()
  console.log('Data: ', data)
  return (
    <div>
      <Head>
        <title>IKEA Clone | Karthick Ragavendran</title>
        <meta name='description' content='Home page of the IKEA clone.' />
        <link rel='icon' href='/ikea.ico' />
      </Head>

      <HomeBanner />
      <Container className='space-y-12'>
        <div className='text-2xl font-medium'>Essentials</div>
        <HScroll>
          <HScroll.Arrow
            distance={200}
            className='absolute left-0 z-10 h-full md:-translate-x-1/2'
            arrowClassName='shadow-md'
          />
          <HScroll.Arrow
            distance={200}
            right
            className='absolute right-0 z-10 h-full md:translate-x-1/2'
            arrowClassName='shadow-md'
          />
          <HScroll.Body className='gap-responsive'>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <HScroll.Child className='relative mb-3 w-80' key={item}>
                <Card01 href='/'>
                  <Card01.ImageBlock src='https://res.cloudinary.com/thankyou/image/upload/v1648215448/nike/ikea/furniture-02_ekpfno.jpg'>
                    <Card01.ImageBlockChild className='p-8 '>
                      <PriceMarker
                        badge={
                          <Badge size='sm' variant='red'>
                            Top Seller
                          </Badge>
                        }
                        displayName='Markus'
                        category='Office chair'
                        price={14990}
                        className='flex items-start'
                      />
                    </Card01.ImageBlockChild>
                  </Card01.ImageBlock>
                  <Card01.DetailsBlock bg='bg-red-200' text='text-black'>
                    <Card01.Title>Work from home essentials</Card01.Title>
                    <Card01.ArrowButton />
                  </Card01.DetailsBlock>
                </Card01>
              </HScroll.Child>
            ))}
          </HScroll.Body>
        </HScroll>
        <div className='text-2xl font-medium'>Limited festive collection</div>
        <div className='grid grid-cols-2 gap-responsive'>
          <BannerCard01
            title='AROMATISK'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
            src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
            href='/'
          />
          <BannerCard01
            title='AROMATISK'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
            src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
            href='/'
          />
        </div>

        <div>
          <div>Top categories</div>
          <Masonry2
            columns='5'
            gap='6'
            shortOnes={[1, 2, 5, 6, 9]}
            className='hidden pt-6 lg:block'
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
          <div className='text-xl font-bold'>More ideas and inspiration</div>
          <HScroll>
            <HScroll.Body className='gap-responsive bg-gray-25'>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello
              </HScroll.Child>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello 2
              </HScroll.Child>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello 3
              </HScroll.Child>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello 4
              </HScroll.Child>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello 5
              </HScroll.Child>
              <HScroll.Child className='px-6 py-2 bg-white shadow-lg'>
                Hello 6
              </HScroll.Child>
            </HScroll.Body>
          </HScroll>
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
