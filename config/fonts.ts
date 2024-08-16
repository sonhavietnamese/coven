import { Fira_Code as FontMono, Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const integral = localFont({ src: '../fonts/integralcf-bold.ttf', variable: '--font-integral' })
export const lemon = localFont({ src: '../fonts/Lemon-Milk-Pro-Medium.otf', variable: '--font-lemon' })
