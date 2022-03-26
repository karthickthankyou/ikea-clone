import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Masonry from './Masonry'

export default {
  title: 'molecules/Masonry',
  component: Masonry,
} as ComponentMeta<typeof Masonry>

const Template: ComponentStory<typeof Masonry> = (args) => <Masonry {...args} />

export const Primary = Template.bind({})
Primary.args = {
  items: [
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215863/nike/ikea/furni-4_ik1ofy.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215649/nike/ikea/furni-03_omo7ch.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215448/nike/ikea/furniture-02_ekpfno.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648208734/nike/ikea/room01_udxetf.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648218044/nike/ikea/decor-01_rvj6tr.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215863/nike/ikea/furni-4_ik1ofy.jpg',
    },
    {
      src: 'https://res.cloudinary.com/thankyou/image/upload/v1648215649/nike/ikea/furni-03_omo7ch.jpg',
    },
  ],
}
Primary.parameters = {}