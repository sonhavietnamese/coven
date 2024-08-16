import '@/styles/globals.css'
import clsx from 'clsx'
import { Metadata, Viewport } from 'next'
import { Providers } from './providers'
import { fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import { Root } from '@/components/root'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <Root>{children}</Root>
        </Providers>
      </body>
    </html>
  )
}
