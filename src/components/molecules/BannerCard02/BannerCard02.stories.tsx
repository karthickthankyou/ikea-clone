import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Container from 'src/components/atoms/Container/Container'
import BannerCard02 from './BannerCard02'

export default {
  title: 'molecules/BannerCard02',
  component: BannerCard02,
} as ComponentMeta<typeof BannerCard02>

const Template: ComponentStory<typeof BannerCard02> = (args) => (
  <BannerCard02 {...args} />
)
const ContainerTemplate: ComponentStory<typeof BannerCard02> = (args) => (
  <Container>
    <BannerCard02 {...args} />
  </Container>
)

export const Primary = Template.bind({})
Primary.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
  text: 'See all storage solution systems.',
  align: 'items-end',
}
export const ContainerBanner = ContainerTemplate.bind({})
ContainerBanner.args = {
  src: 'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
  text: 'See all storage solution systems.',
  align: 'items-end',
}
