import * as NextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context' // next 12
import { withScreenshot } from 'storycap'
import '../src/globals.css'
import yourTheme from './myTheme'

const OriginalNextImage = NextImage.default

export const decorators = [
  withScreenshot, // Registration the decorator is required
]

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      blurDataURL='https://res.cloudinary.com/thankyou/image/upload/v1649674760/IKEA/blur_tgdojj.png'
    />
  ),
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: yourTheme,
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  screenshot: {
    // Put global screenshot parameters(e.g. viewport)
    delay: 2000,
    viewports: {
      large: {
        width: 1024,
        height: 768,
      },
      small: {
        width: 375,
        height: 668,
      },
    },
  },
}
