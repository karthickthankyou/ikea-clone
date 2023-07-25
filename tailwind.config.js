const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

// #0159A3
const primaryPallete = {
  DEFAULT: 'hsl(207, 99%, 32%)',
  25: 'hsl(207, 99%, 98%)',
  50: 'hsl(207, 99%, 90%)',
  100: 'hsl(207, 99%, 80%)',
  200: 'hsl(207, 99%, 70%)',
  300: 'hsl(207, 99%, 60%)',
  400: 'hsl(207, 99%, 50%)',
  500: 'hsl(207, 99%, 32%)',
  600: 'hsl(207, 99%, 24%)',
  700: 'hsl(207, 99%, 16%)',
  800: 'hsl(207, 99%, 08%)',
  900: 'hsl(207, 99%, 04%)',
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

// #FBD813
const yellowPallete = {
  DEFAULT: 'hsl(52, 100%, 50%)',
  25: 'hsl(51, 97%, 98%)',
  50: 'hsl(51, 97%, 92%)',
  100: 'hsl(51, 97%, 84%)',
  200: 'hsl(51, 97%, 75%)',
  300: 'hsl(51, 97%, 66%)',
  400: 'hsl(51, 97%, 58%)',
  500: 'hsl(51, 97%, 50%)',
  600: 'hsl(51, 97%, 38%)',
  700: 'hsl(51, 97%, 24%)',
  800: 'hsl(51, 97%, 10%)',
  900: 'hsl(51, 97%, 04%)',
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
        'spin-12': 'spin 12s linear infinite',
        'spin-24': 'spin 24s linear infinite',
        'spin-30': 'spin 30s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        'slide-left': 'slide-left 1s ease-in-out infinite',
        'slide-right': 'slide-right 1s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        'move-right-12': 'move-right 12s ease-in-out infinite',
        'move-right-24': 'move-right 24s ease-in-out infinite',
        'move-right-36': 'move-right 36s ease-in-out infinite',
        'move-right-48': 'move-right 48s ease-in-out infinite',
        'move-right-60': 'move-right 60s ease-in-out infinite',
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
          '0%': { opacity: 1 },
          '100%': { transform: 'translateX(25%)' },
        },
        'move-right': {
          '0%': {
            left: '20%',
            opacity: 0,
          },
          '10%, 90%': {
            opacity: 1,
          },
          '100%': {
            left: '80%',
            opacity: 0,
          },
        },
        'slide-right': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(25%)', opacity: 0 },
          '54%': {
            transform: 'translateX(-25%)',
            opacity: 0,
          },
        },
        'slide-left': {
          '40%,60%': {
            opacity: 1,
          },
          '46%': { transform: 'translateX(-25%)', opacity: 0 },
          '54%': {
            transform: 'translateX(25%)',
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
      minHeight: {
        screen50: '50vh',
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
}
