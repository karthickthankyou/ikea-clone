import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { filterDefaultValues } from 'src/components/templates/ProductListing/data'
import { FormProvider, useForm } from 'react-hook-form'
import ProductFilter from './ProductFilter'

export default {
  title: 'organisms/ProductFilter',
  component: ProductFilter,
} as ComponentMeta<typeof ProductFilter>

const Template: ComponentStory<typeof ProductFilter> = () => {
  const methods = useForm({ defaultValues: filterDefaultValues })

  return (
    <FormProvider {...methods}>
      <ProductFilter />
    </FormProvider>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
Primary.parameters = {}
