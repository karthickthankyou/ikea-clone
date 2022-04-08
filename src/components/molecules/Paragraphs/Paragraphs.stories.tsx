import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Image from 'src/components/atoms/Image'
import Paragraphs from './Paragraphs'

export default {
  title: 'molecules/Paragraphs',
  component: Paragraphs,
} as ComponentMeta<typeof Paragraphs>

const Template: ComponentStory<typeof Paragraphs> = (args) => (
  <Paragraphs {...args} />
)

const TextchildrenWithBg = (
  <>
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className='bg-yellow-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at,
        nobis debitis dolorum pariatur odio ullam illum voluptatibus obcaecati
        aut distinctio voluptate rerum quod, neque quisquam labore. Totam
        reiciendis delectus. explicabo aspernatur temporibus ad, sapiente id,
        voluptatem reprehenderit.
      </div>
    ))}
    {[1, 2, 3, 4].map((item) => (
      <div key={item} className='bg-yellow-200'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at
        soluta illum quas a distinctio explicabo aspernatur temporibus ad,
        sapiente id, voluptatem reprehenderit. Iusto.
      </div>
    ))}
  </>
)
const Textchildren = (
  <>
    {[1, 2, 3, 4].map((item) => (
      <div key={item}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at,
        nobis debitis dolorum pariatur odio ullam illum voluptatibus obcaecati
        aut distinctio voluptate rerum quod, neque quisquam labore. Totam
        reiciendis delectus. explicabo aspernatur temporibus ad, sapiente id,
        voluptatem reprehenderit.
      </div>
    ))}
    {[1, 2, 3, 4].map((item) => (
      <div key={item}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at
        soluta illum quas a distinctio explicabo aspernatur temporibus ad,
        sapiente id, voluptatem reprehenderit. Iusto.
      </div>
    ))}
  </>
)

const items = [
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
    src: 'https://res.cloudinary.com/thankyou/image/upload/v1648216310/nike/ikea/light-02_zjbzuh.jpg',
  },
]

const ImageChildren = () => (
  <>
    {items.map((item, index) => {
      const mod = (index % 5) + 3

      const height = 100 * mod
      return (
        <div key={item.src} className='break-inside-avoid'>
          <Image
            alt=''
            height={height}
            width={400}
            layout='responsive'
            src={item.src}
          />
        </div>
      )
    })}
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  gap: 8,
  children: Textchildren,
}
export const ParagraphWithBgToExposeEvenGap = Template.bind({})
ParagraphWithBgToExposeEvenGap.args = {
  gap: 6,
  children: TextchildrenWithBg,
}
export const ParagraphWithImage = Template.bind({})
ParagraphWithImage.args = {
  gap: 8,
  children: <ImageChildren />,
}
