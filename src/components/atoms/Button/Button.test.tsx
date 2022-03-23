import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () => {
  test('Button renders', () => {
    render(<Button />)
  })
})
