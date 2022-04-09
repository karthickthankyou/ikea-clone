import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Badge from 'src/components/atoms/Badge/Badge'
import Card01 from './Card01'
import PriceMarker from '../PriceMarker/PriceMarker'

export default {
  title: 'molecules/Card01',
  component: Card01,
} as ComponentMeta<typeof Card01>

// ImageBlock
// ImageBlockChild
// DetailsBlock
// Title
// ArrowButton

const Template: ComponentStory<typeof Card01> = () => (
  <div className='max-w-xs'>
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
  </div>
)

export const Primary = Template.bind({})

const BlueTemplate: ComponentStory<typeof Card01> = () => (
  <div className='max-w-xs'>
    <Card01 href='/'>
      <Card01.ImageBlock src='https://res.cloudinary.com/thankyou/image/upload/v1648215649/nike/ikea/furni-03_omo7ch.jpg'>
        <Card01.ImageBlockChild className='flex items-end justify-end p-8 text-white'>
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
      <Card01.DetailsBlock bg='bg-primary-200' text='text-black'>
        <Card01.Title>Unbox the true potential of your home</Card01.Title>
        <Card01.ArrowButton color='white' />
      </Card01.DetailsBlock>
    </Card01>
  </div>
)

export const Blue = BlueTemplate.bind({})
const GrayTemplate: ComponentStory<typeof Card01> = () => (
  <div className='max-w-xs'>
    <Card01 href='/'>
      <Card01.ImageBlock src='https://res.cloudinary.com/thankyou/image/upload/v1648215863/nike/ikea/furni-4_ik1ofy.jpg'>
        <Card01.ImageBlockChild className='flex items-start justify-end p-8 text-white'>
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
      <Card01.DetailsBlock bg='bg-green-600' text='text-white'>
        <Card01.Title>Everyday essentials under Rs.499</Card01.Title>
        <Card01.ArrowButton color='white' />
      </Card01.DetailsBlock>
    </Card01>
  </div>
)

export const Gray = GrayTemplate.bind({})
