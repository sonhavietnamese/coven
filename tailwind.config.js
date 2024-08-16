import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        integral: ['var(--font-integral)'],
        mono: ['var(--font-roboto-mono)'],
        lemon: ['var(--font-lemon)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
