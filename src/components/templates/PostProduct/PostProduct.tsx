import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { FieldError, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as yup from 'yup'
import HtmlSelect from 'src/components/atoms/HtmlSelect'
import Input from 'src/components/atoms/HtmlInput'
import Label from 'src/components/atoms/HtmlLabel'
import TextArea from 'src/components/atoms/HtmlTextArea'
import BadgeCheckIcon from '@heroicons/react/outline/BadgeCheckIcon'

import { notify, scrollToTop } from 'src/hooks'
import { categories } from 'src/types'
import Link from 'next/link'
import Dialog from 'src/components/molecules/Dialog'
import Image from 'src/components/atoms/Image'
import { usePostNewProductMutation } from 'src/generated'
import Button from 'src/components/atoms/Button'
import { useAppSelector } from 'src/store'
import Price from 'src/components/molecules/Price/Price'
import { FormTypeNewProduct, formSchemaNewProduct } from 'src/forms'
import { selectUid } from 'src/store/user'

export interface IPostProductTemplateProps {}

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
  } = useForm<FormTypeNewProduct>({
    resolver: zodResolver(formSchemaNewProduct),
    defaultValues: {
      name: '',
      description: '',
      category: '',
      subCategory: '',
      price: undefined,
      discount: 0,
      images: undefined,
      outOfStock: false,
    },
  })

  const uid = useAppSelector(selectUid)

  const [isUploading, setIsUploading] = useState(false)

  const formData = watch()
  const [postNewProduct, { loading, error, data: postedData }] =
    usePostNewProductMutation()

  const onSubmit = handleSubmit(async (data) => {
    const newPrice = data.discount
      ? data.price * ((100 - data.discount) / 100)
      : data.price

    if (!uid) {
      notify({ message: 'You are not logged in.' })
      return
    }

    await postNewProduct({
      variables: {
        createProductInput: {
          category: data.category,
          description: data.description,
          discount: data.discount,
          oldPrice: data.price,
          price: +newPrice.toFixed(2),
          name: data.name,
          outOfStock: data.outOfStock,
          subCategory: data.subCategory,
          tags: data.tags?.split('|') || [],
          sellerId: uid,
          images: data.images || [],
          measurements: data.measurements,
        },
      },
    })
  })

  const [showDialog, setshowDialog] = useState(false)

  useEffect(() => {
    setshowDialog(Boolean(postedData?.createProduct?.id))
  }, [postedData?.createProduct?.id])

  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <form onSubmit={onSubmit} className='container min-h-screen p-6 mx-auto'>
      <Dialog
        open={showDialog}
        setOpen={setshowDialog}
        className='max-w-md space-y-2 bg-white'
      >
        <div className='text-xl font-semibold'>Product posted!</div>

        <div>
          <p className='font-semibold'>Product id</p>
          <p> {postedData?.createProduct?.id}</p>
        </div>
        <div>
          <p className='font-semibold'>Name</p>
          <p>{postedData?.createProduct?.name}</p>
        </div>
        <div>
          <p className='font-semibold'>Category</p>
          <p>{postedData?.createProduct?.category}</p>
        </div>
        <div>
          <p className='font-semibold'>Price</p>
          <Price
            price={postedData?.createProduct?.price || 0}
            oldPrice={postedData?.createProduct?.oldPrice}
          />
        </div>

        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            onClick={() => Router.reload()}
            className='inline-block px-4 py-2 mt-8 text-center border text-primary-600 border-primary-600'
          >
            + Post another product
          </button>
          <Link
            className='inline-block px-4 py-2 mt-8 text-center text-white bg-primary-600'
            href={`/products/${postedData?.createProduct?.id}`}
          >
            Visit page
          </Link>
        </div>
      </Dialog>
      <div className='grid gap-6 mt-8 '>
        <div className='w-full max-w-xl p-4 mx-auto space-y-6 bg-white shadow-xl'>
          <div className='mt-4 text-2xl '>Add new product</div>
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
                placeholder='Rs. '
                {...register('price', { valueAsNumber: true })}
              />
            </Label>
            <Label title='Discount % (Optional)' error={errors.discount}>
              <Input
                type='number'
                placeholder='Enter the discount of the product.'
                {...register('discount', { valueAsNumber: true })}
              />
            </Label>
          </div>
          <Label title='Out of stock' error={errors.outOfStock}>
            <div className='flex items-center'>
              <input {...register('outOfStock')} type='checkbox' />
              <span className='ml-2 text-sm text-gray'>
                Product is currently out of stock.
              </span>
            </div>
          </Label>
          <Label
            title='Images'
            className='grid-cols-2'
            error={errors.images && (errors.images as unknown as FieldError)}
          >
            <Input
              type='file'
              placeholder='Upload images'
              accept='image/*'
              multiple
              disabled={
                formData && formData.images && formData.images.length > 0
              }
              onChange={(e) => {
                const images = e.target.files
                if (images && images?.length > 8) {
                  setError('images', {
                    message:
                      'Can not upload more than 8 images. Please rechoose files.',
                  })
                  return
                }

                if (images && images.length > 0) {
                  clearErrors('images')
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
                      setValue('images', urls)
                      setIsUploading(false)
                    })
                    .catch(() => {
                      setIsUploading(false)
                      // Todo: Also reset the uploaded pictures.
                      setError('images', {
                        message: 'Something went wrong.',
                      })
                    })
                }
              }}
            />
            <div className='grid grid-cols-3 gap-3 my-2'>
              {formData?.images?.map((item) => (
                <Image
                  src={item || ''}
                  key={item}
                  alt=''
                  className='w-64 h-64 rounded'
                />
              ))}
            </div>
            {isUploading && <div className='mt-2'>Uploading...</div>}
            {formData && formData.images && formData.images.length > 0 && (
              <div className='flex items-center gap-1 py-2 mt-2'>
                <BadgeCheckIcon className='w-4 h-4 text-green' />
                {formData.images?.length}{' '}
                {formData.images?.length === 1 ? 'picture' : 'pictures'}{' '}
                uploaded
              </div>
            )}
          </Label>

          <Label title='Description' error={errors.description}>
            <TextArea
              placeholder='Describe about the product.'
              rows={3}
              {...register('description')}
            />
          </Label>
          <Label title='Measurements' error={errors.measurements}>
            <TextArea
              placeholder='24 x 24 x 100 inches'
              rows={3}
              {...register('measurements')}
            />
          </Label>
          <Label title='Tags (Optional)' error={errors.tags}>
            <TextArea
              placeholder='Enter the tags.'
              rows={3}
              {...register('tags')}
            />
          </Label>

          <div className='flex justify-end space-x-4'>
            <Button
              isLoading={loading}
              className='px-20 py-2 text-white rounded bg-primary-500'
              type='submit'
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PostProductTemplate
