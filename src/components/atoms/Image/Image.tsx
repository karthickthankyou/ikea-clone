/* eslint-disable react/jsx-props-no-spreading */
import NextImage, { ImageProps } from 'next/image'
import * as React from 'react'

const Image = ({
  className,
  src,
  width = 240,
  height = 240,
  layout = 'responsive',
  alt = '',
  quality = 75,
  ...props
}: ImageProps) => (
  <NextImage
    className={`object-cover ${className}`}
    src={src}
    width={width}
    height={height}
    layout={layout}
    alt={alt}
    quality={quality}
    {...props}
  />
)

export default Image
