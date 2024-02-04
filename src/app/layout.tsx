import type { Metadata } from 'next'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import "../../public/globals.css"
import Head from 'next/head'
import {Montserrat} from 'next/font/google'

const mont = Montserrat({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mont'
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      <body className={mont.variable}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
