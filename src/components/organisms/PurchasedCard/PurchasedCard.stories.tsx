import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PurchasedCard from './PurchasedCard'

export default {
  title: 'organisms/PurchasedCard',
  component: PurchasedCard,
  decorators: [(story) => <div className='max-w-lg'>{story()}</div>],
} as ComponentMeta<typeof PurchasedCard>

const Template: ComponentStory<typeof PurchasedCard> = (args) => (
  <PurchasedCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: {
    id: 12,
    pid: 100,
    updatedAt: '2022-04-10T08:17:21.466839',
    product: {
      images: [
        'https://res.cloudinary.com/thankyou/image/upload/v1648662487/IKEA/andrea-davis-duXRC8vT5wQ-unsplash_uugrpn.jpg',
      ],
      name: 'The sofa',
    },
  },
}
Primary.parameters = {}
