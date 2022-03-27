import Container from 'src/components/atoms/Container'
import { sampleImagesForMasonry } from 'src/components/molecules/Masonry/data'
import Masonry from 'src/components/molecules/Masonry/Masonry'
import PriceCard from 'src/components/molecules/PriceCard/PriceCard'
import StoryCard from 'src/components/molecules/StoryCard'

export interface IProductPageTemplateProps {}

const ProductPageTemplate = () => (
  <Container>
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
          facere eaque id debitis modi ullam voluptatum omnis similique quisquam
          corrupti voluptas, exercitationem aspernatur ab et quos dicta
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
    <div className='h-screen'>Hello</div>
  </Container>
)

export default ProductPageTemplate
