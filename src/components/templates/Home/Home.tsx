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
import { sampleImages } from 'src/components/templates/Masonry2/data'
import PriceMarker from 'src/components/molecules/PriceMarker/PriceMarker'
import ProductCard01 from 'src/components/molecules/ProductCard01'
import AdBanner from 'src/components/organisms/AdBanner/AdBanner'
import HomeBanner from 'src/components/organisms/HomeBanner'
import Masonry2 from 'src/components/templates/Masonry2'
import { Children } from 'src/types'
import InfoCard from 'src/components/molecules/InfoCard'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import Link from 'next/link'
import DeveloperCommentary from 'src/components/molecules/DeveloperCommentary/DeveloperCommentary'
import TripGuide from 'src/components/organisms/TripGuide/TripGuide'

const tags = [
  'Sofas',
  'Beds',
  'Dining',
  'Tv units',
  'Mattresses',
  'Seating',
  'Coffee',
  'Tables',
  'Wardrobes',
  'Storage',
  'Bookshelves',
  'Shoe racks',
  'Decor',
  'Bathroom',
  'Textiles',
  'Pots & plants',
  'Home electronics',
  'Home',
  'Improvement',
  'Lighting',
]

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
          src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
          title='Unbox your true potential of your home'
          detailsColor='yellow'
        >
          <PriceMarker
            displayName='Brimnes'
            category='Cabinet with doors'
            price={8990}
            className='flex items-center justify-start text-right text-black '
          />
        </ColorCard>
      </HScroll.Child>
      <HScroll.Child className='w-56 md:w-64 lg:w-80'>
        <ColorCard
          src='https://res.cloudinary.com/thankyou/image/upload/v1648670456/IKEA/katrin-hauf-gdUxNykbuZc-unsplash_da0eol.jpg'
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
            className='flex items-start justify-start text-black '
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
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657901/IKEA/inside-weather-Uxqlfigh6oE-unsplash_m5ot2w.jpg'
  />,
  <CardCategory01
    text='Cookware & tableware'
    key='Cookware & tableware'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657852/IKEA/sarah-dorweiler-0QmzQZndkOQ-unsplash_e5tys0.jpg'
  />,
  <CardCategory01
    text='Smart home'
    key='Smart home'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648657752/IKEA/samantha-gades-BlIhVfXbi9s-unsplash_gvzqkh.jpg'
  />,
  <CardCategory01
    text='Mirrors'
    key='Mirrors'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661059/IKEA/giorgio-trovato-CgXnJ4Z5KFI-unsplash_moggxx.jpg'
  />,
  <CardCategory01
    text='Shoe rack and clothes stand'
    key='Shoe rack and clothes stand'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661101/IKEA/jake-goossen-juhD3QGCv20-unsplash_jiwsem.jpg'
  />,
  <CardCategory01
    text='Beds'
    key='Beds'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661142/IKEA/chastity-cortijo-M8iGdeTSOkg-unsplash_htvvhi.jpg'
  />,
  <CardCategory01
    text='Chairs'
    key='Chairs'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg'
  />,
  <CardCategory01
    text='Table and desks'
    key='Table and desks'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
  />,
  <CardCategory01
    text='Baby & children'
    key='Baby & children'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648661196/IKEA/kids-me-germany-Zzgmde4_lYU-unsplash_tcx3xa.jpg'
  />,
  <CardCategory01
    text='Storage & organisation'
    key='Storage & organisation'
    href='/products'
    src='https://res.cloudinary.com/thankyou/image/upload/v1648660778/IKEA/nathan-oakley-jSbBnR22cXc-unsplash_xakhbu.jpg'
  />,
]

const Home: NextPage = () => (
  <div>
    <Head>
      <title>IKEA Clone | Karthick Ragavendran</title>
      <meta name='description' content='Home page of the IKEA clone.' />
      <link rel='icon' href='/ikea.ico' />
    </Head>

    <HomeBanner />
    <Container className='mt-24 space-y-24'>
      <div>
        <Heading className='flex items-center gap-1'>
          <div>Highlights</div>
          <DeveloperCommentary>
            <div>
              In the real IKEA, they use images along with the price cards
              stamped over it.
            </div>
            <div>
              Here, we can place the price cards dynamically. After all, any
              image probably has some free spot to write on.
            </div>
          </DeveloperCommentary>
        </Heading>

        <ColorCardScroll />
      </div>
      <div>
        <Heading>Limited festive collection</Heading>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-responsive'>
          <BannerCard01
            title='AROMATISK'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
            src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
            href='/products'
          />
          <BannerCard01
            title='KORKEN'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.'
            src='https://res.cloudinary.com/thankyou/image/upload/v1648657783/IKEA/becca-tapert-dO3qTKxwik0-unsplash_hh5oap.jpg'
            href='/products'
          />
        </div>
      </div>

      <div>
        <Heading className='flex items-center gap-1'>
          <div>Top categories</div>
          <DeveloperCommentary>
            <div>
              In the real IKEA, they use two rows of these cards. That&apos;ll
              do but it is a bit plain and boring.
            </div>
            <div>We use css columns to create a masonry here!</div>
            <div>
              Also, it is completely responsive. Try resizing the window.
            </div>
          </DeveloperCommentary>
        </Heading>
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
          <div className='flex items-center gap-1'>
            <div className='break-words'>IKEA family products</div>
            <DeveloperCommentary>
              <div>
                In the real IKEA, they use two rows of these cards. That&apos;ll
                do but it is a bit plain and boring.
              </div>
              <div>We use css columns to create a masonry here!</div>
              <div>
                Also, it is completely responsive. Try resizing the window.
              </div>
            </DeveloperCommentary>
          </div>
          <Button className='mt-4' variant='outlined' color='black'>
            Show all offers
          </Button>
        </Heading>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-responsive'>
          <ProductCard01
            product={{
              id: 1,
              name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
              images: [
                'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
              ],
              category: 'Office',
              subCategory: 'Desk',
              price: 2.29,
            }}
          />
          <ProductCard01
            product={{
              id: 2,
              name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!!',
              images: [
                'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
              ],
              category: 'Office',
              subCategory: 'Desk',
              price: 2.29,
            }}
          />
          <ProductCard01
            product={{
              id: 3,
              name: 'EKTORP',
              images: [
                'https://res.cloudinary.com/thankyou/image/upload/v1648662487/IKEA/andrea-davis-duXRC8vT5wQ-unsplash_uugrpn.jpg',
              ],
              category: 'Office',
              subCategory: 'Arm chair',
              price: 2.29,
            }}
          />
          <ProductCard01
            product={{
              id: 3,
              name: 'BOKKREMLA',
              images: [
                'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
              ],
              category: 'Office',
              subCategory: 'Arm chair',
              price: 2.29,
            }}
          />
        </div>
      </div>
      <div>
        <Heading className='flex items-center gap-1'>
          <div>Shop products for a more sustainable home</div>
          <DeveloperCommentary>
            <div>Notice the position of the arrows?</div>
            <div>
              In the Hightlights section, we placed these arrows{' '}
              <strong className='text-primary-200'>absolutely</strong>.
            </div>
            <div>
              This corousel is a custom made compount component. That allows us
              to easily reuse it for multiple scenarios.
            </div>
          </DeveloperCommentary>
        </Heading>
        <HScroll>
          <HScroll.Body className='gap-responsive'>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                text='Storage & organisation'
                key='Storage & organisation'
                href='/products'
                className='w-56 h-72'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648660778/IKEA/nathan-oakley-jSbBnR22cXc-unsplash_xakhbu.jpg'
              />
            </HScroll.Child>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                className='w-56 h-72'
                text='Baby & children'
                key='Baby & children'
                href='/products'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648661196/IKEA/kids-me-germany-Zzgmde4_lYU-unsplash_tcx3xa.jpg'
              />
            </HScroll.Child>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                className='w-56 h-72'
                text='Table and desks'
                key='Table and desks'
                href='/products'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648660259/IKEA/nathan-oakley-gj1dnc7yRG0-unsplash_cxdhhr.jpg'
              />
            </HScroll.Child>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                className='w-56 h-72'
                text='Beds'
                key='Beds'
                href='/products'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648661142/IKEA/chastity-cortijo-M8iGdeTSOkg-unsplash_htvvhi.jpg'
              />
            </HScroll.Child>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                className='w-56 h-72'
                text='Chairs'
                key='Chairs'
                href='/products'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648660432/IKEA/thestandingdesk-_mpablfu5pM-unsplash_jzqojr.jpg'
              />
            </HScroll.Child>
            <HScroll.Child className='relative mb-responsive'>
              <CardCategory01
                className='w-56 h-72'
                text='Shoe rack and clothes stand'
                key='Shoe rack and clothes stand'
                href='/products'
                src='https://res.cloudinary.com/thankyou/image/upload/v1648661101/IKEA/jake-goossen-juhD3QGCv20-unsplash_jiwsem.jpg'
              />
            </HScroll.Child>
          </HScroll.Body>
          <div className='flex justify-end gap-2 mt-2'>
            <HScroll.Arrow />
            <HScroll.Arrow right />
          </div>
        </HScroll>
      </div>
      <div>
        <Heading className='flex items-center gap-1'>
          <div>More ideas and inspiration</div>
          <DeveloperCommentary>
            <div>
              Product markers over the photographs is a cool feature of IKEA
              site.
            </div>
            <div>
              It is not yet implemented in this clone. The below is a responsive
              masonry with plain images. Stay tuned for updates.
            </div>
          </DeveloperCommentary>
        </Heading>
        <Masonry2
          columns='3'
          gap='4'
          shortOnes={[4, 5, 14]}
          childrenLimit={15}
          className='hidden lg:block'
          heights={['h-72', 'h-112']}
        >
          {sampleImages.map((item) => (
            <Image key={item} alt='' src={item} />
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
            <Image key={item} alt='' src={item} />
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
            <Image key={item} alt='' src={item} />
          ))}
        </Masonry2>
      </div>

      <AdBanner
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
        title='Download the IKEA app'
        description='Explore a wide range of affordable, well-designed and functional home furnishing solutions for every room in your home - at your fingertips.'
        buttonText='Download now'
        href='/appstore'
      />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-responsive'>
        <InfoCard
          Icon={HeartIcon}
          title='Returns policy'
          description='Exceptions during COVID19'
          href='/learnmore'
          className='p-responsive'
        />
        <InfoCard
          Icon={HeartIcon}
          title='Click & collect'
          description='Safe click and collect shopping at IKEA Stores!'
          href='/learnmore'
          className='p-responsive'
        />
        <InfoCard
          Icon={HeartIcon}
          title='Planning tools'
          description='Our planning tools will help you give shape to your ideas'
          href='/learnmore'
          className='p-responsive'
        />
        <InfoCard
          Icon={HeartIcon}
          title='Safety at IKEA store'
          description='Safe shopping experience at IKEA'
          href='/learnmore'
          className='p-responsive'
        />
      </div>
      <div>
        <Heading>Explore our furniture & home furnishing range</Heading>
        <div className='grid grid-cols-1 gap-responsive md:grid-cols-2'>
          <div>
            <div className='flex flex-wrap items-center justify-start gap-responsive'>
              {tags.map((tag) => (
                <Link
                  href='/products'
                  key={tag}
                  className='inline-block px-3 py-1.5 transition-all border border-yellow-100 bg-yellow-25 hover:border-black hover:shadow-xl hover:-translate-y-0.5 hover:bg-white'
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className='gap-8 mt-8 space-y-8 text-sm font-light text-gray-800 columns-2 md:mt-0'>
            <p className='font-bold text-primary'>
              IKEA is a global leader in life at home.
            </p>
            <p>
              Whether you just moved into a new home or looking to revamp your
              current one, we at IKEA are here to inspire you with affordable
              home furniture solutions, there is a piece of furniture to every
              corner of your home. Create a home that is perfect for you.
            </p>
            <p>
              Shopping at IKEA is a bit different and exciting compared to your
              shopping at an everyday retail. It is about experiencing solutions
              first hand and getting to know ideas and inspirations that can fit
              perfectly into your home. That’s why, we offer more than 7500
              products, solutions at our store along with home furnishing ideas
              and services for you to explore.
            </p>
            <p>
              When you visit IKEA store, make yourself at home in our many room
              settings in the store. Squeeze the upholsteries, feel the oriental
              rugs, try the sofa beds and open the cabinets to feel the quality.
              On the price tag, you’ll find all you need to know about a
              product, including where in the store you can pick it up.
            </p>
            <p>
              Since most IKEA furniture is flat-packed, they are quite easy to
              bring home when you buy from the store.
            </p>
          </div>
        </div>
      </div>
    </Container>
    <div className='py-6 my-12 bg-gray-25'>
      <Container>
        <div className='text-xl font-semibold'>Trip guide</div>
        <div className='mt-2'>Working parts of the application.</div>
        <TripGuide currentPageName='Home' />
      </Container>
    </div>
  </div>
)

export default Home
