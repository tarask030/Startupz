import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '../../components/**/*.{js,ts,jsx,tsx}',
    './stories/*.{tsx, stories.tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'easy-in-out',
      },
      fontFamily: {
        circular_400: ['Circular-400', 'sans-serif'],
        circular_700: ['Circular-700', 'sans-serif'],
      },
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    screens: {
      smm: '546px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1550px',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        '300': '#FBFAFA',
        '400': '#FBFBFA',
        '500': '#F3F3F3',
        '600': '#939393',
      },
      blue: {
        '400': '#8BB5C9',
        '500': '#46B8C8',
        '600': '#00A0B6',
        '900': '#3D4F5C',
      },
      yellow: {
        '500': '#FFC351',
      },
      green: {
        '500': '#A9BC87',
      },
      purple: {
        '500': '#8B60D3',
      },
      orange: {
        '500': '#FB8958',
      },
      red: {
        '500': '#FF0000',
      },
      transparent: 'transparent',
    },

    backgroundColor: ({ theme }) => theme('colors'),
    borderColor: ({ theme }) => theme('colors'),
    space: ({ theme }) => ({
      ...theme('spacing'),
    }),
    gap: ({ theme }) => theme('spacing'),
    textColor: ({ theme }) => theme('colors'),
    textOpacity: ({ theme }) => theme('opacity'),
    translate: ({ theme }) => ({
      ...theme('spacing'),
    }),
    margin: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
    padding: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
    }),
  },
  plugins: [],
}
export default config
