import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - OpenNuts',
    default: 'OpenNuts - Open-Source Electromechanical CAD',
  },
  description:
    'Design electronics and mechanics in one place. OpenNuts is a free, open-source browser-based CAD tool for schematic capture, PCB layout, and 3D mechanical design.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', inter.variable)}>
      <body>{children}</body>
    </html>
  )
}
