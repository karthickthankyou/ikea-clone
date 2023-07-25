import { z } from 'zod'
import {
  SortTypes,
  categories,
  filterDefaultValues,
  sortOptionsList,
} from '../components/templates/ProductListing/data'
import { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export const formSchemaContact = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().email('A valid email is required'),
  phone: z.string().nonempty('Phone is required'),
  location: z.string().nonempty('Location is required'),
  category: z.string().nonempty('Category is required'),
  message: z.string().nonempty('Message is required'),
})

export type FormTypeContact = z.infer<typeof formSchemaContact>

export const formSchemaCreateAccount = z.object({
  email: z.string().email('A valid email is required.'),
  displayName: z.string().nonempty('Enter your name.'),
  password: z.string().min(6, 'Password should be 6 characters minimum.'),
})

export type FormTypeCreateAccount = z.infer<typeof formSchemaCreateAccount>

export const formSchemaLogin = z.object({
  email: z.string().email('A valid email is required.'),
  password: z.string().min(6, 'Password should be 6 characters minimum.'),
})

export type FormTypeLogin = z.infer<typeof formSchemaLogin>

export const formSchemaNewProduct = z.object({
  name: z.string().nonempty('Product name is required'),
  description: z.string().nonempty('Product description is required'),
  measurements: z.string().nonempty('Product measurements is required'),
  tags: z.string(),
  price: z
    .number()
    .min(0, 'Price can not be negative')
    .nonnegative('A valid numeric value is required.')
    .refine((value) => value !== null, {
      message: 'Product price is required',
    }),
  discount: z
    .number()
    .min(0, 'Discount can not be negative')
    .max(100, 'Discount can not be greater than 100')
    .refine((value) => value !== null, {
      message: 'It is not a valid numeric number.',
    }),
  category: z.string().nonempty('Pick a product category'),
  subCategory: z.string().nonempty("Pick the product's sub category"),
  outOfStock: z.boolean(),
  images: z
    .array(z.string())
    .min(1, 'select 1 to 8 images')
    .max(8, 'select 1 to 8 images'),
})

export type FormTypeNewProduct = z.infer<typeof formSchemaNewProduct>

export const formSchemaFilter = z.object({
  search: z.string(),
  price: z.tuple([z.number(), z.number()]),
  rating: z.string(),
  category: z.array(z.enum(categories as [string, ...string[]])),
  sort: z.enum(sortOptionsList as [string, ...string[]]),
})

export type FormTypeFilter = z.infer<typeof formSchemaFilter>

export const FormProviderFilter = ({ children }: { children: ReactNode }) => {
  const methods = useForm<FormTypeFilter>({
    resolver: zodResolver(formSchemaFilter),
    defaultValues: filterDefaultValues,
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
