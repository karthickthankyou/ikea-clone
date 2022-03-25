import { mount } from '@cypress/react'
import Badge from 'src/components/atoms/Badge'
import PriceMarker from './PriceMarker'

describe('PriceMarker Component', () => {
  it('PriceMarker renders', () => {
    mount(
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
    )
  })
})
