const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

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
const greenPallete = {
  DEFAULT: 'hsl(116, 100%, 27%)',
  25: 'hsl(116, 100%, 98%)',
  50: 'hsl(116, 100%, 90%)',
  100: 'hsl(116, 100%, 78%)',
  200: 'hsl(116, 100%, 66%)',
  300: 'hsl(116, 100%, 54%)',
  400: 'hsl(116, 100%, 40%)',
  500: 'hsl(116, 100%, 27%)',
  600: 'hsl(116, 100%, 21%)',
  700: 'hsl(116, 100%, 14%)',
  800: 'hsl(116, 100%, 08%)',
  900: 'hsl(116, 100%, 04%)',
}
const redPallete = {
  DEFAULT: 'hsl(340, 94%, 45%)',
  25: 'hsl(340, 94%, 98%)',
  50: 'hsl(340, 94%, 92%)',
  100: 'hsl(340, 94%, 84%)',
  200: 'hsl(340, 94%, 74%)',
  300: 'hsl(340, 94%, 64%)',
  400: 'hsl(340, 94%, 54%)',
  500: 'hsl(340, 94%, 45%)',
  600: 'hsl(340, 94%, 35%)',
  700: 'hsl(340, 94%, 22%)',
  800: 'hsl(340, 94%, 10%)',
  900: 'hsl(340, 94%, 04%)',
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  important: true,
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      primary: primaryPallete,
      red: redPallete,
      green: greenPallete,
      yellow: yellowPallete,
      gray: grayPallete,
      accent: primaryPallete.DEFAULT,
    },
    extend: {
      borderWidth: {
        // DEFAULT: '1px',
        1.5: '1.5px',
      },
      animation: {
        'spin-reverse': 'reverse-spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        'slide-left': 'slide-left 1s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slide: {
          '0%': { transform: 'translateX(-25%)', opacity: 0 },
          '50%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(25%)',
            opacity: 0,
          },
        },
        'slide-left': {
          '0%': { transform: 'translateX(25%)', opacity: 0 },
          '50%': {
            opacity: 1,
          },
          '100%': {
            transform: 'translateX(-25%)',
            opacity: 0,
          },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.1 },
          '60%': {
            transform: 'scale(1.5)',
            opacity: 1,
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        custom: 'cubic-bezier(0,.84,.17,1.27)',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      boxShadow: {
        'inner-l': 'inset 6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-r': 'inset -6px 0px 3px rgba(0, 0, 0, 0.3)',
        'inner-lr':
          'inset 8px 0px 2px rgba(0, 0, 0, 0.3), inset -8px 0px 2px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        '-50': '-50',
        '-40': '-40',
        '-30': '-30',
        '-20': '-20',
        '-10': '-10',
      },
      backgroundImage: {
        hero: "url('https://res.cloudinary.com/thankyou/image/upload/b_black,o_80/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
        hloan:
          "url('https://res.cloudinary.com/thankyou/image/upload/c_fit,q_auto:eco/a_0/v1640717751/nike/misc/surface-0WFE46jwO8o-unsplash_lk8dfy.jpg')",
        hero2:
          "url('https://res.cloudinary.com/thankyou/image/upload/v1640667691/nike/rowan-heuvel-bjej8BY1JYQ-unsplash_ekhbh0.jpg')",
      },

      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        208: '52rem',
        '90p': '90%',
      },
      height: {
        screen50: '50vh',
        screen80: '80vh',
        screen90: '90vh',
      },
      lineHeight: {
        '80p': '80%',
        '90p': '90%',
      },
      fontFamily: {
        display: ['Helvetica'],
      },
      outlineWidth: {
        1.5: '1.5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')],
}
