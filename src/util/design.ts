// yellow #ffdb00 hsl(52, 100%, 50%)
// green #0a8a00 	hsl(116, 100%, 27%)
// red #e00751 	hsl(340, 94%, 45%)
// primary #0058a3 hsl(208, 100%, 32%)
export {}

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

const template = {
  DEFAULT: '38%',
  25: '98%',
  50: '96%',
  100: '92%',
  200: '86%',
  300: '78%',
  400: '66%',
  500: '50%',
  600: '36%',
  700: '24%',
  800: '12%',
  900: '04%',
}

const colorGen = ({ saturation = '100%', hue = 0, lightness = template }) =>
  Object.entries(lightness)
    .map(([key, item]) => ({
      [key]: `hsl(${hue}, ${saturation}, ${item})`,
    }))
    .reduce((obj, item) => Object.assign(obj, item), {})

// export const redPallete = colorGen({ hue: 0 })
// export const primaryPallete = colorGen({ hue: 208 })
// export const greenPallete = colorGen({ hue: 100 })
// export const yellowPallete = colorGen({ hue: 52, saturation: '93%' })
// export const grayPallete = colorGen({ hue: 208, saturation: '10%' })
