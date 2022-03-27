import Container from 'src/components/atoms/Container'
import { sampleImagesForMasonry } from 'src/components/molecules/Masonry/data'
import Masonry from 'src/components/molecules/Masonry/Masonry'
import ArrowRightIcon from '@heroicons/react/outline/ArrowRightIcon'
import PriceCard from 'src/components/molecules/PriceCard/PriceCard'
import Button from 'src/components/atoms/Button'

import StoryCard from 'src/components/molecules/StoryCard'
import Image from 'src/components/atoms/Image/Image'
import HScroll from 'src/components/molecules/HScroll/HScroll'
import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import DesignerThoughtsCard from 'src/components/molecules/DesignerThoughtsCard'
import Footer from 'src/components/organisms/Footer/Footer'

export interface IProductPageTemplateProps {}

const InfoInSidebar = ({ title }: { title: string }) => (
  <button
    type='button'
    className='flex items-center justify-between w-full gap-2 px-3 py-6 bg-white group'
  >
    <div className='text-2xl font-semibold'>{title}</div>
    <ArrowRightIcon className='w-8 h-8 p-1 group-hover:animate-slide-right' />
  </button>
)

const RelatedProducts = ({ title }: { title: string }) => {
  const items = sampleImagesForMasonry
  return (
    <div>
      <div className='mb-4 text-2xl text-gray-700'>{title}</div>
      <HScroll className='flex gap-6'>
        <HScroll.Body className='gap-1'>
          {items.map((item) => (
            <HScroll.Child className='relative mb-12 w-72' key={item.src}>
              <ProductCard01
                title='BOKKREMLA'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!'
                src={item.src}
                price={2.29}
                rating={4.5}
                reviews={12}
              />
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

const ProductPageTemplate = () => (
  <>
    <Container className='space-y-12'>
      <div className='grid-cols-3 gap-16 lg:grid'>
        <div className='col-span-2 space-y-6 md:space-y-12'>
          <Masonry
            columns='2'
            gap='4'
            items={sampleImagesForMasonry.slice(0, 6)}
            shortOne={3}
          />
          <div className='max-w-2xl text-2xl font-light leading-relaxed text-gray-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            amet quasi temporibus facilis debitis rem provident necessitatibus
            dicta reiciendis tempora ex nesciunt dolorum eligendi accusantium
            porro, quod repellat totam. Voluptate quis laudantium neque sequi
            facere eaque id debitis modi ullam voluptatum omnis similique
            quisquam corrupti voluptas, exercitationem aspernatur ab et quos
            dicta
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
            <InfoInSidebar title='Product details' />
            <InfoInSidebar title='Measurements' />
          </div>
          <DesignerThoughtsCard
            src='https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg'
            designerName='Karthick Ragavendran'
            thoughts='Lorem ipsum is a great quote with valuable life lessions. Lets all lorem ipsum for a second. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus! Iusto, explicabo eum ea nam corrupti minus!'
          />
        </div>
        <div className='col-span-1'>
          <div className='sticky top-24'>
            <PriceCard
              title='MICKE'
              category='Desk, white'
              price={7990}
              oldPrice={9000}
            />
          </div>
        </div>
      </div>
      <RelatedProducts title='Related products' />
    </Container>
    <Footer />
  </>
)

export default ProductPageTemplate
