import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-ramen',
  display: 'swap',
})

const title = 'Ramenbet — понятный гид по казино, официальному сайту и проверке зеркала игроков'
const description = 'Разбираемся в Ramenbet: как проверить официальный сайт и зеркало, защитить аккаунт и прочитать правила казино. Ясный гид для взрослых игроков без обещаний выигрыша, лишних слов и непроверенных ссылок.'

export const metadata: Metadata = {
  metadataBase: new URL('https://ramenbet14casino.vercel.app'),
  title,
  description,
  applicationName: 'Ramenbet Guide',
  alternates: { canonical: 'https://ramenbet14casino.vercel.app/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ramenbet14casino.vercel.app/',
    siteName: 'Ramenbet Guide',
    title,
    description,
    images: [{ url: '/images/ramen-gate.webp', width: 1050, height: 700, alt: 'Ramenbet — независимый гид по платформе и безопасности' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/ramen-gate.webp'] },
  icons: { icon: [{ url: '/icon.png', type: 'image/png', sizes: '64x64' }], apple: [{ url: '/images/ramen-apple.png', sizes: '180x180', type: 'image/png' }] },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#10141e',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`bg-background ${manrope.variable}`}>
      <head />
      <body className="font-sans">{children}</body>
    </html>
  )
}
