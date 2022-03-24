import { mount } from '@cypress/react'
import Text from '.'

describe('Text component', () => {
  it('should render', () => {
    const textContent = 'Hello World'
    mount(<Text>{textContent}</Text>)
    // expect(screen.getByText(textContent)).toHaveTextContent(textContent)
  })
  it('should accept props', () => {
    const textContent = 'Hello World'
    mount(<Text size='text-7xl'>{textContent}</Text>)
    // expect(screen.getByText(textContent)).toHaveTextContent(textContent)
  })
})
