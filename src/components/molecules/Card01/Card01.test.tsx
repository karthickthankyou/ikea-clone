import { mount } from '@cypress/react'
import Badge from 'src/components/atoms/Badge/Badge'
import PriceMarker from '../PriceMarker/PriceMarker'
import Card01 from './Card01'

describe('Card01 Component', () => {
  it('Card01 renders', () => {
    mount(
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
    )
  })
})
