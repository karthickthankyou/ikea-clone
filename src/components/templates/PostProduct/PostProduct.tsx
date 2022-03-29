/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import HtmlSelect from 'src/components/atoms/HtmlSelect'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'

import { scrollToTop } from 'src/hooks'
import { categories } from 'src/types'
import Link from 'src/components/atoms/Link'
import Dialog from 'src/components/molecules/Dialog'
import Image from 'src/components/atoms/Image'

export interface IPostProductTemplateProps {}

const newProductFormSchema = yup
  .object({
    name: yup.string().required('Product name is required'),
    description: yup.string().required('Product description is required'),
    measurements: yup.string().required('Product measurements is required'),
    tags: yup.string(),
    price: yup
      .number()
      .transform((value) => (value === '' ? null : value))
      .typeError('A valid numeric value is required.')
      .required('Product price is required'),
    discount: yup
      .number()
      .transform((value) => (value === '' ? null : value))
      .typeError('It is not a valid numeric number.'),
    category: yup.string().required('Pick a product category'),
    subCategory: yup.string().required("Pick the product's sub category"),
    outOfStock: yup.boolean(),
    imgs: yup
      .mixed()
      .when('isArray', {
        is: Array.isArray,
        then: yup.array().of(yup.string()),
        otherwise: yup.string(),
      })
      .test(
        'required',
        'select 1 to 8 images',
        (arr: any) => arr && arr.length > 0 && arr.length <= 8
      ),
  })
  .required()

/** Todo: How to make any one of phone or email to be required? */

type NewProductFormSchema = yup.InferType<typeof newProductFormSchema>

const publishedHome = {
  data: {
    insert_homes_one: {
      id: null,
    },
  },
}

const PostProductTemplate = () => {
  // const [publishedHome, addNewHome] = useInsertHomeMutation()

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<NewProductFormSchema>({
    resolver: yupResolver(newProductFormSchema),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      subCategory: '',
      price: undefined,
      discount: 0,
      imgs: undefined,
      outOfStock: false,
    },
  })

  const [isUploading, setIsUploading] = useState(false)

  const formData = watch()

  const onSubmit = handleSubmit(async (data) => {
    console.log('Data: ', data)
  })

  const [showDialog, setshowDialog] = useState(true)
  useEffect(() => {
    setshowDialog(Boolean(publishedHome.data?.insert_homes_one?.id))
  }, [])

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <form
      onSubmit={onSubmit}
      className='max-w-lg p-6 mx-auto mb-24 space-y-6 bg-white shadow-lg'
    >
      <div className='mt-4 text-2xl '>Add new product</div>

      <Dialog open={showDialog} setOpen={setshowDialog} className='max-w-md'>
        <div className='text-xl font-semibold'>🎊 New product created! 🎊</div>
        <p className='mt-4 text-sm text-gray-600'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          tempore laudantium consequuntur, adipisci quidem ex fugit quo et?
        </p>
        <p>Home id: {publishedHome.data?.insert_homes_one?.id}</p>
        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            onClick={() => Router.reload()}
            className='inline-block px-4 py-2 mt-8 text-center border text-primary-600 border-primary-600'
          >
            + Post another home
          </button>
          <Link
            className='inline-block px-4 py-2 mt-8 text-center text-white bg-primary-600'
            href={`/home/${publishedHome.data?.insert_homes_one?.id}`}
          >
            Visit page
          </Link>
        </div>
      </Dialog>

      <Label title='Product name' error={errors.name}>
        <Input
          type='string'
          placeholder='Enter the name.'
          {...register('name')}
        />
      </Label>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <Label title='Category' error={errors.category}>
          <HtmlSelect {...register('category')}>
            <option value='Select product category' disabled>
              Select category
            </option>
            [
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
            ]
          </HtmlSelect>
        </Label>
        <Label title='Sub category' error={errors.subCategory}>
          <Input
            type='string'
            placeholder='Enter the sub category of the product.'
            {...register('subCategory')}
          />
        </Label>
      </div>

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <Label title='Price' error={errors.price}>
          <Input
            type='number'
            placeholder='Enter the price of the product.'
            {...register('price')}
          />
        </Label>
        <Label title='Discount (Optional)' error={errors.discount}>
          <Input
            type='number'
            placeholder='Enter the discount of the product.'
            {...register('discount')}
          />
        </Label>
      </div>

      <Label title='Images' className='grid-cols-2' error={errors.imgs}>
        <Input
          type='file'
          placeholder='Upload images'
          accept='image/*'
          multiple
          disabled={formData && formData.imgs && formData.imgs.length > 0}
          onChange={(e) => {
            const images = e.target.files
            if (images && images?.length > 8) {
              setError('imgs', {
                message:
                  'Can not upload more than 8 images. Please rechoose files.',
              })
              return
            }

            if (images && images.length > 0) {
              clearErrors('imgs')
              setIsUploading(true)

              const promises = Object.values(images).map((file: any) => {
                const imageFormData = new FormData()
                imageFormData.append('file', file)
                imageFormData.append('upload_preset', 'zillow-clone')
                imageFormData.append('cloud_name', 'thankyou')

                return fetch(
                  'https://api.cloudinary.com/v1_1/thankyou/image/upload',
                  {
                    method: 'post',
                    body: imageFormData,
                  }
                ).then((res) => res.json())
              })

              Promise.all(promises)
                .then((res) => {
                  const urls = res.map((url) => url.secure_url)
                  setValue('imgs', urls)
                  setIsUploading(false)
                })
                .catch(() => {
                  setIsUploading(false)
                  // Todo: Also reset the uploaded pictures.
                  setError('imgs', {
                    message: 'Something went wrong.',
                  })
                })
            }
          }}
        />
        <div className='grid grid-cols-3 gap-3 my-2'>
          {formData?.imgs?.map((item: string) => (
            <Image src={item} key={item} alt='' className='w-64 h-64 rounded' />
          ))}
        </div>
        {isUploading && <div className='mt-2'>Uploading...</div>}
        {formData && formData.imgs && formData.imgs.length > 0 && (
          <div className='flex items-center gap-1 py-2 mt-2'>
            <BadgeCheckIcon className='w-4 h-4 text-green' />
            {formData.imgs?.length}{' '}
            {formData.imgs?.length === 1 ? 'picture' : 'pictures'} uploaded
          </div>
        )}
      </Label>

      <Label title='Description' error={errors.description}>
        <TextArea
          placeholder='Describe about the product.'
          rows={4}
          {...register('description')}
        />
      </Label>
      <Label title='Measurements' error={errors.measurements}>
        <TextArea
          placeholder='24 x 24 x 100 inches'
          rows={4}
          {...register('measurements')}
        />
      </Label>
      <Label title='Tags (Optional)' error={errors.tags}>
        <TextArea
          placeholder='Enter the tags.'
          rows={4}
          {...register('tags')}
        />
      </Label>

      <div className='flex justify-end space-x-4'>
        <button
          className='px-20 py-2 text-white rounded bg-primary-500'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostProductTemplate
