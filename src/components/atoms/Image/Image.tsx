import NextImage, { ImageProps } from 'next/image'

const Image = ({
  className,
  src,
  width = 240,
  height = 240,
  alt = '',
  quality = 75,
  ...props
}: ImageProps) => {
  const imgSrc =
    src ||
    'https://res.cloudinary.com/thankyou/image/upload/v1649599416/IKEA/nopicture_fi31cv.jpg'

  return (
    <NextImage
      className={`object-cover w-full h-full ${className}`}
      src={imgSrc}
      width={300}
      height={300}
      alt={alt}
      quality={quality}
      placeholder='blur'
      blurDataURL='/images/blur.png'
      {...props}
    />
  )
}

export default Image
