import { mount } from '@cypress/react'
import Heading from '.'

describe('header component', () => {
  const headingContent = 'Heading 0'
  it('should render with given text', async () => {
    mount(<Heading>{headingContent}</Heading>)

    // expect(screen.getByText(headingContent)).toHaveTextContent(headingContent)
  })
  it('should render with given text with props variant and header type', async () => {
    mount(
      <Heading variant='heading-1' headerType='h4'>
        {headingContent}
      </Heading>
    )
    // expect(screen.getByText(headingContent)).toHaveTextContent(headingContent)
  })
})
