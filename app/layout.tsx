import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yaw Sarpong – Software Engineer',
  description:
    'Portfolio of Yaw Sarpong – a software engineer with experience across banking, ports, fintech, NGOs, and e-commerce environments.',
  keywords: ['software engineer', 'frontend developer', 'full-stack', 'Angular', 'Next.js', 'React Native', 'portfolio'],
  authors: [{ name: 'Yaw Sarpong' }],
  openGraph: {
    title: 'Yaw Sarpong – Software Engineer',
    description: 'Building reliable software across banking, fintech, and e-commerce.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <head>
        {/* Clash Display from CDN */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
