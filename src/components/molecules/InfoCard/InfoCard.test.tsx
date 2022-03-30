import { mount } from '@cypress/react'
import HeartIcon from '@heroicons/react/outline/HeartIcon'
import InfoCard from './InfoCard'

describe('InfoCard Component', () => {
  it('InfoCard renders', () => {
    mount(
      <InfoCard
        Icon={HeartIcon}
        title='Returns policy'
        description='Exceptions during COVID19'
        href='/'
      />
    )
  })
})
