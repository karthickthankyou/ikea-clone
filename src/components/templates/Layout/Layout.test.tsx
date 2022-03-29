import React from 'react'
import { mount } from '@cypress/react'
import Layout from './Layout'

describe('Layout Component', () => {
  it('Layout mounts', () => {
    mount(
      <Layout>
        <div>Hello</div>
      </Layout>
    )
  })
})
