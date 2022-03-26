import { mount } from '@cypress/react'
import Paragraphs from './Paragraphs'

describe('Paragraphs Component', () => {
  it('Paragraphs renders', () => {
    mount(
      <Paragraphs>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iste
          omnis veniam!
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis
          veritatis possimus voluptatum dicta recusandae asperiores? Accusantium
          velit ipsa quis suscipit doloremque qui. Aspernatur, ex!
        </div>
      </Paragraphs>
    )
  })
})
