import { create } from '@storybook/theming'

const primaryPallete = {
  DEFAULT: 'hsl(208, 100%, 32%)',
  25: 'hsl(208, 100%, 98%)',
  50: 'hsl(208, 100%, 90%)',
  100: 'hsl(208, 100%, 80%)',
  200: 'hsl(208, 100%, 70%)',
  300: 'hsl(208, 100%, 60%)',
  400: 'hsl(208, 100%, 50%)',
  500: 'hsl(208, 100%, 32%)',
  600: 'hsl(208, 100%, 24%)',
  700: 'hsl(208, 100%, 16%)',
  800: 'hsl(208, 100%, 08%)',
  900: 'hsl(208, 100%, 04%)',
}

const yellowPallete = {
  DEFAULT: 'hsl(52, 100%, 50%)',
  25: 'hsl(52, 100%, 98%)',
  50: 'hsl(52, 100%, 92%)',
  100: 'hsl(52, 100%, 84%)',
  200: 'hsl(52, 100%, 75%)',
  300: 'hsl(52, 100%, 66%)',
  400: 'hsl(52, 100%, 58%)',
  500: 'hsl(52, 100%, 50%)',
  600: 'hsl(52, 100%, 38%)',
  700: 'hsl(52, 100%, 24%)',
  800: 'hsl(52, 100%, 10%)',
  900: 'hsl(52, 100%, 04%)',
}
const grayPallete = {
  DEFAULT: 'hsl(208, 10%, 32%)',
  25: 'hsl(208, 10%, 98%)',
  50: 'hsl(208, 10%, 90%)',
  100: 'hsl(208, 10%, 80%)',
  200: 'hsl(208, 10%, 70%)',
  300: 'hsl(208, 10%, 60%)',
  400: 'hsl(208, 10%, 50%)',
  500: 'hsl(208, 10%, 32%)',
  600: 'hsl(208, 10%, 24%)',
  700: 'hsl(208, 10%, 16%)',
  800: 'hsl(208, 10%, 08%)',
  900: 'hsl(208, 10%, 04%)',
}

const white = '#fff'

export default create({
  base: 'dark',
  colorPrimary: yellowPallete.DEFAULT,
  colorSecondary: primaryPallete.DEFAULT,

  // UI
  appBg: yellowPallete[50],
  appContentBg: white,
  appBorderColor: grayPallete[100],
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: grayPallete[900],
  textInverseColor: grayPallete[50],

  // Toolbar default and active colors
  barTextColor: primaryPallete[900],
  barSelectedColor: primaryPallete[800],
  barBg: primaryPallete[25],

  // Form colors
  inputBg: primaryPallete[25],
  inputBorder: primaryPallete[200],
  inputTextColor: primaryPallete[800],
  inputBorderRadius: 0,

  brandTitle: 'Ikea clone | Karthick Ragavendran',
  brandUrl: 'https://ikea.iamkarthick.com',
  brandImage:
    'https://res.cloudinary.com/thankyou/image/upload/v1649351934/nike/ikea/ikea_qipy50.png',
})
