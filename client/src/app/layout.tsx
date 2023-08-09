"use client"

import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';
import EthProvider from '../components/EthProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RecoilRoot>
        <EthProvider>
          <body className={inter.className}>{children}</body>
        </EthProvider>
      </RecoilRoot>
    </html>
  )
}
