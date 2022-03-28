import ProductCard01 from 'src/components/molecules/ProductCard01/ProductCard01'
import ProductFilter from 'src/components/organisms/ProductFilter'

export interface IProductListingProps {}

const ProductListing = () => (
  <div>
    <ProductFilter />
    <div className='grid grid-cols-3 gap-6 mt-12'>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <ProductCard01
          key={item}
          title='BOKKREMLA'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim perspiciatis pariatur!'
          src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
          rating={4.2}
          price={1.99}
          oldPrice={2.49}
          reviews={12}
        />
      ))}
    </div>
  </div>
)

export default ProductListing
