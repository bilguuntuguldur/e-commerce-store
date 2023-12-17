
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

import ToastProvider from '@/providers/toast-provider';
import Header from "@/components/header/Nav";
import Footer from "@/components/footer/Footer"
import ModalProvider from '@/providers/modal-provider';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beki onlineshop',
  description: 'Greate awesome online shop by own',
  icons: {
    icon: ["/favicon.ico?v=4"] 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
          <ToastProvider />
          <ModalProvider />
          <Header />
            {children}
          <Footer />
        </body>
    </html>
  )
}
