import { mount } from '@cypress/react'
import React from 'react'
import RangeSlider from './RangeSlider'

describe('SliderMui Component', () => {
  beforeEach(() => {
    mount(
      <RangeSlider
        initialData={[0, 100]}
        step={12}
        value={[34, 56]}
        onChange={() => {}}
      />
    )
  })
  it('SliderMui renders', () => {})
})
