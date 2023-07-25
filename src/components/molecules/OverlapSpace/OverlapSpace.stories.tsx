import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from 'src/components/atoms/Image'
import OverlapSpace from './OverlapSpace'

export default {
  title: 'molecules/OverlapSpace',
  component: OverlapSpace,
} as ComponentMeta<typeof OverlapSpace>

const Template: ComponentStory<typeof OverlapSpace> = (args) => (
  <OverlapSpace>
    <OverlapSpace.Child>Hey. We share the same space!</OverlapSpace.Child>
    <OverlapSpace.Child>Wow. Yes. I cant read anything.</OverlapSpace.Child>
  </OverlapSpace>
)
const ImageTemplate: ComponentStory<typeof OverlapSpace> = (args) => (
  <OverlapSpace>
    <OverlapSpace.Child>
      <Image
        alt='text over image demo'
        src='https://res.cloudinary.com/thankyou/image/upload/v1648218985/nike/ikea/sofa-01_fgsi8y.jpg'
      />
    </OverlapSpace.Child>
    <OverlapSpace.Child className='z-10'>
      Wow. I can read now. (Text over image. )
    </OverlapSpace.Child>
  </OverlapSpace>
)

export const Primary = Template.bind({})
export const TextOverImage = ImageTemplate.bind({})
