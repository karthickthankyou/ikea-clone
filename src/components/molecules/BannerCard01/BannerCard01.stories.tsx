import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BannerCard01 from './BannerCard01'

export default {
  title: 'molecules/BannerCard01',
  component: BannerCard01,
  decorators: [(story) => <div className='max-w-md '>{story()}</div>],
} as ComponentMeta<typeof BannerCard01>

const Template: ComponentStory<typeof BannerCard01> = (args) => (
  <BannerCard01 {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'AROMATISK',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime, molestiae ut magni aperiam tenetur beatae in repellendus quia possimus sit libero nihil laborum.',
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
}
Primary.parameters = {}
